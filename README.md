
# Architecture

Solution contains one main package **mck** 
And under this main package there 3 sub packages which are;

1. API **mck-api** which is simple rest api
2. Client application **mck-client** is a react application
3. Server **mck-server** which contains build of client application as minified and performance optimzed version of react. 

# Starting application

Application developed with node.js and npm, so your device contains these programs installed.  After you pull the application from github you should install **npm** packages and start api and client with following steps;

1. Go to /mck folder which contains its package.json file and run `npm install` command. it will install all packages to **node_modules** folder in same folder. 
2. Go to /mck-api folder which contains its package.json file and run `npm install` command. it will install all packages to **node_modules** folder in same folder. 
3. Go to /mck-server folder which contains its package.json file and run `npm install` command. it will install all packages to **node_modules** folder in same folder, also it contains /build folder which is builded version of react app. 
4. inside /mck folder run start commands `npm run start:api` which is responsible to start api package. It will start to listen localhost:9000 port with message "Server listening port:9000". If it is not started be sure npm packages installed correctly and these port is not occupied by another application.
5. Again inside /mck folder run start commands `npm run start:server` which is responsible to start react application build package. It will start to listen localhost:8080 port with message "Server listening port:8080" in order to deliver client application. If it is not started, be sure npm packages installed correctly and these port is not occupied by another application.

# Used Technologies

1. API **mck-api** is developed with javascript, node.js. this node.js application contains express server which provide api accessible over http. in order to allow user access from `cross origin` it uses cors library. otherwise browsers not allow to fetch data from another origin. 

2. Client application **mck-client** contains react app. that react app is created with [create react app](https://facebook.github.io/create-react-app/) as suggested bu facebook. That install all necessary packages to application and auto generated readme.md file. But for running application it is not mendatory to insatall react, or compile react app because build packages is already provided in source code. 

3. Server **mck-server** is actuall a simple node.js express server which delivers builded version of react client application. It contains build package compressed and optimized version of react app. It is not doing anyting more. 

# Code Description

## Code Quality
Main project [package.json](https://github.com/emrahday/mck/blob/master/package.json) contains eslint linter tool in order to analyze code style according to common conventions. [eslint configuration file](https://github.com/emrahday/mck/blob/master/.eslintrc.json) contains that conventions setttings. I have used one of three most populer convention `airbnb` which some additional settings enables es6 features.

## Unit tests
Unit tests, (actually also integration tests because it manupulates stateful report.json), is available [report-handler.test.js](https://github.com/emrahday/mck/blob/master/mck-api/report-handler.test.js). tests are applied with one of most populer testing tools [jest](https://jestjs.io/). In order to run tests in **mck-api** api folder run `jest` command and it will run all tests in that folder. 

## Api
API **mck-api** contains report.json which is having all data. in that package most important file is [report-handler.js](https://github.com/emrahday/mck/blob/master/mck-api/report-handler.js) which has main function for get report element complete list and set state of individual element, and file reading and writing functions. 

## Client Application
Client application **mck-client** is a react application created by `create react app`. There most important places are [List React Component](https://github.com/emrahday/mck/blob/master/mck-client/src/List.js) and [Item React Component](
https://github.com/emrahday/mck/blob/master/mck-client/src/Item.js). List react component contains all the report table, and includes multipe item component in it. It is retrieving data from api and for each data elements it sends data to Item React component. Item React component creates ui for each elements. As usual in every react applications JSX is exist in each component, it has similar syntax with HTML but slightly different properties, such as instad of html class, in jsx className should be used. I have used straight [css](https://github.com/emrahday/mck/blob/master/mck-client/src/Item.css) in order to make it simple, but it is also possible to use sass or less preprocessors too. In additon like every react source application application size is excessive because of node_modules, especially handling react jsx has huge dependency tree. but it can be elemninate by building and compressing the react application.

## Build Package
Server **mck-server** is simple web server based on node.js and express. I have created this application because of deliver builded version of react app. Building react application is creating a compressed and perfomance optimized version of react app under **mck-client** /build folder. If you copy this folder to this **mck-server** it will be available for browser optimized version. In order to copy I have created a script `npm run deploy` it copies build package under react app **mck-client** to **mck-server**

# Dependencies
 all dependencies available in package.json of each packages. But in order to make this application development available, used computer should have node, and npm installed. 

# Browser support
The only browser specific code is **mck-client**. I have sticked to browser support of [react app](https://facebook.github.io/create-react-app/docs/supported-browsers-features) but it is possible to extend browser list with using polyfills. But some language features es2017, and es2018 and jsx makes this browser list restricted, but still it is supported bu most popular browsers. 

# Typical development steps, build, deploy and start lsthe application

After you make edit in your react client code base **mck-client** or express api **mck-api** you can run all tests under each package with `npm run test` command. it will trigger all jest test under `mck-api` and enzyme/jest test under `mck-client`

if testing is successful you can build react app in **mck-client** with `npm run build:client` command. that will create a build version of react app under **/build** folder of **mck-client**

if you want to serve this builded version of react app in express server you can deploy with `npm run deploy`. actually this command copies **/build** folder from **mck-client** devempment base to **mck-server** express server. 

after the deployment you can start your api seperately with `npm run start:api` and your server with `npm run start:server`. that will start listen api over [http://localhost:9000](http://localhost:9000) and client server over [http://localhost:8080](http://localhost:8080) 

# Commands

this command configurations available at main package [package.json](https://github.com/emrahday/mck/blob/master/package.json) it is possible to run under /mck folder. 

### `npm run test`

it runs all test packages under mck-api and mck-client

### `npm run build:client`

it create build packge for react app under mck-client. actually it runs `build` command of mck-client which builds the app for production to the `build` folder.

### `npm run deploy`

it copies `/build` folder under the **mck-client** to **mck-server** which contains seperate express server in order to deliver client app. 

### `npm run start:api`

it start express server under **mck-api** and server starts listening [http://localhost:9000](http://localhost:9000) in order to deliver api

### `npm run start:client`

it start react under **mck-client** and server starts listening [http://localhost:3000](http://localhost:3000) in order to deliver react application for development purpose

### `npm run start:server`

it start express server under **mck-server** and server starts listening [http://localhost:8080](http://localhost:8080) in order to deliver client application. some commands refers to sub packages scripts. 

# What can be better

it could be better with full covarage of unit, integration test. Also code covarage can be visualized with test covarage tools. Also api is storing data to json file, instad of json file it could be use database such as mongodb. By this way we can get better performanc with large data set, and we can avoid of full report json reading and writing in any change. 