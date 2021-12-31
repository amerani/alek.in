'use strict';
exports.handler = (event, context, callback) => {
    const response = event.Records[0].cf.response;
    const headers = response.headers;
    
    headers['strict-transport-security'] = [{
        key:   'Strict-Transport-Security', 
        value: "max-age=300; includeSubdomains;"
    }];

    headers['content-security-policy'] = [{
        key:   'Content-Security-Policy', 
        value: "default-src 'none'; img-src * 'self' data: https:; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'"
    }];

    headers['x-content-type-options'] = [{
        key:   'X-Content-Type-Options',
        value: "nosniff"
    }];
    
    headers['x-frame-options'] = [{
        key:   'X-Frame-Options',
        value: "DENY"
    }];
    
    headers['x-xss-protection'] = [{
        key:   'X-XSS-Protection',
        value: "1; mode=block"
    }];

    headers['referrer-policy'] = [{
        key:   'Referrer-Policy',
        value: "same-origin"
    }];
    
    callback(null, response);
};