# [alek.in](http://alek.in)
personal website hosted on s3

## development
`npm i` - install dependencies  
`npm start` - start dev server using parcel-bundler  

http://localhost:1234/index.html  
http://localhost:1234/error.html  

## deployment
`npm run build` - bundle app using parcel-bundler  
`npm run publish` - copy bundle to AWS S3 bucket  

http://alek.s3-website-us-east-1.amazonaws.com