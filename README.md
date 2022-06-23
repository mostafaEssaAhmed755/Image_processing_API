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
