# aws-dynamo-db-basics
An simple introduction to basic commands to operate AWS DynamoDB using NodeJS

## Goals

This project was built from the learning obtained in the course https://www.udemy.com/course/amazon-aws-dynamodb-para-iniciantes/, from [Udemy](https://www.udemy.com/) , and aims to help the community in the dissemination of knowledge about [AWS DynamoDB](https://aws.amazon.com/dynamodb/).

The objective was purely and simply to provide examples of use of the service, so good code practices were not considered during its development.

Any contributions are welcome!

## Prerequisites

This project was implemented to connect to an instance of an AWS DynamoDB table. Thus, it is necessary that, before running it:

* You already have a table created in the service
* You already have access credentials (accessKey and secretKey)
* You enter these credentials and the respective region in the file [config.json](config.json)

The examples detailed here are based on the name of the tables that were created in the [AWS DynamoDB] instance(https://aws.amazon.com/en/dynamodb/). So it's important to note the names and change them according to your tables:

* [server.js - Line 63](server.js#L63)
* [server.js - Line 98](server.js#L98)
* [server.js - Line 123](server.js#L123)
* [server.js - Line 154](server.js#L154)
* [server.js - Line 154](server.js#L154)
* [server.js - Line 187](server.js#L187)
* [server.js - Line 215](server.js#L215)
* [server.js - Line 223](server.js#223)
* [server.js - Line 254](server.js#254)
* [server.js - Line 264](server.js#264)

## How to run this project

### Install local application
This project is based on NodeJS 12.x. So, first of all, you need to install NodeJs on your local environment:

https://nodejs.org/en/download/

We used npm to manage packages. 

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm


### Install app packages dependencies

Run `npm instal` to install locally all dependencies on your machine

###Run app locally

Run `node server.js` to run app locally 
