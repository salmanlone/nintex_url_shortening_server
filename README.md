# Nintex url shortening server
Nintex assignment code

## This is a server for url shortening.

Make sure NPM or Yarn is installed on your machine before running anything

## Install require packages

```shell
yarn
```

```shell
npm install
```

## Available Scripts

```shell
yarn start
```

Or if you use NPM you can:

```shell
npm run start
```

### Functionality

This code contains:

- Mongodb for storing data.
  
  ```shell
  Make sure mondodb is installed on your local system and the server instance is running and create a document with the name 'url-shortner'

  in my case it was 'mongodb://localhost:27017/url-shortner'
  ```

- API endpoints for url shortening service.
- Swagger UI for testing the service endpoints.
- Travis CI pipeline for solution building. Details could be found in

```shell
.travis.yml
```

# Please make sure that you run the server before the client
It would require port 5000 from your end.

# Explore Swagger
http://{baseurl}/docs/swagger/index.html

In my case the baseurl was `localhost:5000`

# Sample input for endpoints

Following are sample input for endpoints

## Post

url:

```shell
http://localhost:5000/item
```
header:

```shell
Content-Type: application/json
```

body:

```shell
{
"originalUrl": "https://www.aliexpress.com/?src=google&albch=fbrnd&acnt=304-410-9721&isdl=y&aff_short_key=UneMJZVf&albcp=54095668&albag=1897140028&slnk=&trgt=kwd-464198394164&plac=&crea=257006900048&netw=g&device=c&mtctp=e&memo1=1t1&albbt=Google_7_fbrnd&aff_platform=google&albagn=888888&gclid=CjwKCAjwuqfoBRAEEiwAZErCsvlcwW7v5eX7avFWrZMO0cyNO-kwQC0-NhIjdVzurd25IvOhRBOD9hoCLNUQAvD_BwE",
"shortBaseUrl":"http://localhost:5000"
}
```

output:

```shell
{
    "_id": "5d12f0c2d558db2b5ccfe9fd",
    "originalUrl": "https://www.aliexpress.com/?src=google&albch=fbrnd&acnt=304-410-9721&isdl=y&aff_short_key=UneMJZVf&albcp=54095668&albag=1897140028&slnk=&trgt=kwd-464198394164&plac=&crea=257006900048&netw=g&device=c&mtctp=e&memo1=1t1&albbt=Google_7_fbrnd&aff_platform=google&albagn=888888&gclid=CjwKCAjwuqfoBRAEEiwAZErCsvlcwW7v5eX7avFWrZMO0cyNO-kwQC0-NhIjdVzurd25IvOhRBOD9hoCLNUQAvD_BwE",
    "shortUrl": "http://localhost:5000/vvI1WDelA",
    "urlCode": "vvI1WDelA",
    "updatedAt": "2019-06-26T04:12:50.706Z",
    "createdAt": "2019-06-26T04:12:50.726Z",
    "__v": 0
}
```

## Get

url:

```shell
http://localhost:5000/orignal/vvI1WDelA
```

header:

```shell
Content-Type: application/json
```

output:

```shell
"https://www.aliexpress.com/?src=google&albch=fbrnd&acnt=304-410-9721&isdl=y&aff_short_key=UneMJZVf&albcp=54095668&albag=1897140028&slnk=&trgt=kwd-464198394164&plac=&crea=257006900048&netw=g&device=c&mtctp=e&memo1=1t1&albbt=Google_7_fbrnd&aff_platform=google&albagn=888888&gclid=CjwKCAjwuqfoBRAEEiwAZErCsvlcwW7v5eX7avFWrZMO0cyNO-kwQC0-NhIjdVzurd25IvOhRBOD9hoCLNUQAvD_BwE"
```

# After you will add the above data into database, you can hit 

```shell
http://localhost:5000/vvI1WDelA
```

to redirect to orignal URL. The id in url is saved in post call, make sure you are giving the id which is generated in your databse.
