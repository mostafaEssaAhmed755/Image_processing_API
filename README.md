# Placeholder

This api is used to display animal images of different sizes and you can also specify these sizes

## Installation & setup

Use the package manager [npm](https://www.npmjs.com/) to setup Placeholder project.

```bash
npm install 
```
## running project
to running server in development mode use 

```bash
npm run start:d 
```

to running server in production mode use 

```bash
npm run start:p
```
## Usage

In order to use this api, you must pass the name of the animal, and that name must be a [ dog, cat, deer ], and then write the required width and height of the image
```bash
 http://localhost:3000/{name}/{width}/{height} 

 //example
 http://localhost:3000/cat/500/400
```

## Test project 

to test this project you must execute this code in console

```bash
npm run test
```

## linter  and formater

to format code use

```bash
npm run lint

//or use linter with auto fix
npm run lint:f

//or use just formater 
npm run format
```

## Files structure and proccessing

So how does this project work? I want to explain to you first what are the components of the project and then explain to you how the requests are processed.
First of all, there is a src/index.ts file. This is the main server file that runs the project

When sending a request to the server in this form cat/500/400, the request first passes through src/middleware/validParams.ts to ensure that the parameters are valid to complete the process, and then passes through src/middleware/fileExists.ts to make sure that the image already exists in the required size and saved in src/model/Image.ts file on array data and thumbnail, then the image is returned or the request is completed to the controller, and when the request reaches this point, the image is resized and saved to the server, then the resized image is returned