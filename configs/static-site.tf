provider "aws" {
    region = "us-east-1"
}

variable "bucket_name" { }
variable "function_name" { }
variable "s3_origin_id" { }
variable "function_zip" { }

resource "template_file" "fn_src" {
  template = "${file("${var.function_zip}")}"
}

resource "aws_s3_bucket" "bucket" {
    bucket = "${var.bucket_name}"
    acl    = "public-read"
    website {
        index_document = "index.html"
        error_document = "error.html"
    }
}

resource "aws_s3_bucket_policy" "bucket" {
  bucket = "${aws_s3_bucket.bucket.id}"
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "${aws_s3_bucket.bucket.arn}/*"
    } 
  ]
}
POLICY
}

resource "aws_iam_role_policy" "lambda_policy" {
  name = "fn_policy"
  role = "${aws_iam_role.lambda_role.id}"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::*"
    }
  ]
}
EOF
}

resource "aws_iam_role" "lambda_role" {
  name = "fn_role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    },
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "edgelambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_lambda_function" "fn" {
    function_name = "${var.function_name}"
    runtime = "nodejs8.10"
    handler = "index.handler"
    role = "${aws_iam_role.lambda_role.arn}"
    source_code_hash = "${base64sha256(template_file.fn_src.rendered)}"
    filename = "${var.function_zip}"
    publish = true
}

resource "aws_cloudfront_distribution" "dist" {
    default_cache_behavior {
        allowed_methods = ["GET", "HEAD"]
        cached_methods = ["GET", "HEAD"]
        forwarded_values {
            cookies {
                forward = "none"
            }
            query_string = false
        }
        target_origin_id = "${var.s3_origin_id}"
        viewer_protocol_policy = "redirect-to-https"
        lambda_function_association {
            event_type = "viewer-response"
            lambda_arn = "${aws_lambda_function.fn.qualified_arn}"
        }
    }

    enabled = true
    default_root_object = "index.html"

    origin {
        domain_name = "${aws_s3_bucket.bucket.website_endpoint}"
        origin_id   = "${var.s3_origin_id}"        
        custom_origin_config {
            http_port = 80
            https_port = 443
            origin_protocol_policy = "http-only"
            origin_ssl_protocols = [ "TLSv1.1" ]
        }
    }

    restrictions {
        geo_restriction {
            restriction_type = "none"        
        }
    }

    viewer_certificate {
        cloudfront_default_certificate = true
    }
}