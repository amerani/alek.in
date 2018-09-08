# [alek.in](https://alek.in)
Static site with custom headers built using AWS S3, CloudFront, and Lambda@Edge

## development
`npm i` - install dependencies  
`npm start` - start dev server using parcel-bundler  

http://localhost:1234/index.html  
http://localhost:1234/error.html  

## deployment
`npm run build` - bundle app using parcel-bundler  
`npm run publish` - copy bundle to AWS S3 bucket and update lambda code

## security scans
:a: :heavy_plus_sign: [Mozilla Observatory](https://observatory.mozilla.org/analyze.html?host=alek.in)  
:a: :heavy_plus_sign: [SSL Labs](https://www.ssllabs.com/ssltest/analyze.html?d=alek.in) 