A sample blueprint for client/server application with react and express rest api

# Architecture

Solution contains one main package **mck** 
and under this main package there are 3 sub packages:

1. API **mck-api** is simple rest api
2. Client application **mck-client** is react application
3. Server **mck-server** contains build of client application as minified and performance optimized version of react. 

# Starting application

Application is developed with node.js and npm, so your device should contain these programs installed.  After you pull the application from github you should install **npm** packages and start API and client with following steps:

1. Clone aplication from github with `git clone https://github.com/emrahday/mck.git` and go to **/mck** folder
2. Go to /mck folder, it contains package.json file. Run `npm install` command. It will install all necessary packages to **node_modules** folder in the same folder. 
3. Go to /mck-api folder, it contains package.json file. run `npm install` command. it will install all necessary packages to **node_modules** folder in the same folder. 
4. Go to /mck-server folder, it contains package.json file. run `npm install` command. it will install all necessary packages to **node_modules** folder in the same folder, also it contains /build folder which is the built version of react app. 
5. Inside /mck folder run command `npm run start:api` which is responsible to start API package. It will start listening localhost:9000 port with message "Server listening port:9000". If it is not started, be sure npm packages installed correctly and these port is not occupied by another application.
6. Again inside /mck folder run start command `npm run start:server` which is responsible to start react application build package. It will start listening localhost:8080 port with message "Server listening port:8080" in order to deliver client application. If it is not started, be sure npm packages installed correctly and these port is not occupied by another application.

# Used Technologies

1. API **mck-api** is developed with javascript, node.js. This node.js application contains express server which provides api access over http. In order to allow user access from `cross origin` it additionaly contains cors library. Otherwise browsers do not allow to fetch data from another origin. 

2. Client application **mck-client** contains react app. That react app is created with [create react app](https://facebook.github.io/create-react-app/) as suggested by facebook. That installs all necessary packages to application and auto generated readme.md file. But to run application, it is not mendatory to install react, or compile react app, because build packages are already provided in source code. 

3. Server **mck-server** is actually a simple node.js express server which delivers builded version of react client application. It contains build package compressed and optimized version of react app. It is not responsible more than this. 

# Code Description

## Code Quality
Main project [package.json](https://github.com/emrahday/mck/blob/master/package.json) contains **eslint** linter tool in order to analyze code style according to common conventions. [eslint configuration file](https://github.com/emrahday/mck/blob/master/.eslintrc.json) contains that conventions settings. I have used one of three most populer convention `airbnb` which has also some additional settings enabling es6 features.

## Unit tests

### Test for API

In order to run automized tests go to api folder **/mck-api** and run `jest` command. 

Unit tests, (actually also integration tests because it manupulates stateful report.json), is available [report-handler.test.js](https://github.com/emrahday/mck/blob/master/mck-api/report-handler.test.js). Tests are applied with one of most populer testing tools [jest](https://jestjs.io/). `jest` command should be run under **/mck-api** folder, because jest is running with relative path. 

### Test for React Components

In order to run tests client react application, go to React component folder **/mck-client** and run `npm run test:noWatch`. Normally default commant is `npm run test` but it will have also additional watcher function. I have extended this command with **noWatch** mode. 

There are 3 important react components which are covered by test:

Most important one is [Item.js](https://github.com/emrahday/mck/blob/master/mck-client/src/Item.js) and it tested with [Item.test.js](https://github.com/emrahday/mck/blob/master/mck-client/src/Item.test.js) Item.js builds each row in report table UI.

Other tests are really simple, just checking components are rendered correctly, because these components do not take any additional parameter.
[List.js](https://github.com/emrahday/mck/blob/master/mck-client/src/List.js) is covered with [List.test.js](https://github.com/emrahday/mck/blob/master/mck-client/src/List.test.js)
[App.js](https://github.com/emrahday/mck/blob/master/mck-client/src/App.js) is covered with [App.test.js](https://github.com/emrahday/mck/blob/master/mck-client/src/App.test.js)


## Api

API **mck-api** contains report.json which has all data. In that package most important file is [report-handler.js](https://github.com/emrahday/mck/blob/master/mck-api/report-handler.js) which has main business logic for getting report element with complete list, and set state of individual element, and file reading and writing functions. 

## Client Application

Client application **mck-client** is a react application created by using `create react app`. There, most important places are [List React Component](https://github.com/emrahday/mck/blob/master/mck-client/src/List.js) and [Item React Component](
https://github.com/emrahday/mck/blob/master/mck-client/src/Item.js). List react component contains whole of report table, and includes multiple items component in it. It is retrieving data from api and for each data element, it sends data to Item React component as props. Item React component creates UI for each elements. As usual in every react application, JSX exists in each component, it has similar syntax with HTML but slightly different properties, such as instead of html class, in jsx, `className` should be used. I have used straight [css](https://github.com/emrahday/mck/blob/master/mck-client/src/Item.css) in order to make it simple, but it is also possible to use sass or less preprocessors too. Like every react source, application size is excessive because of node_modules, especially rendering react jsx has huge dependency tree. but it can be eliminated by building and compressing the react application before deployment.

## Build Package

Server **mck-server** is simple web server based on node.js and express. I have created this application in order to deliver built version of react app. Building react application creates a compressed and perfomance optimized version of react app under **mck-client** /build folder. If you copy this folder to **mck-server** it will be available for browser optimized version. In order to make this copy action, I have created a script `npm run deploy` it copies build package under react app **mck-client** to **mck-server**

# Dependencies

All dependencies available in package.json of each packages. But in order to make this application to put into further development, development computer should have node, and npm installed. 

# Browser support

The only browser specific code is **mck-client**. I have sticked to browser support list of [react app](https://facebook.github.io/create-react-app/docs/supported-browsers-features) but it is possible to extend browser list with using polyfills. But some language features es2017, and es2018 and jsx makes this browser list restricted. On the other hand, still it is supported by most popular browsers. 

# Typical development steps, build, deploy and start lsthe application

If tests are successful, you can build react app in **mck-client** with `npm run build:client` command. That will create a build version of react app under **/build** folder of **mck-client**

If you want to serve this builded version of react app in express server you can deploy with `npm run deploy`. Actually this command copies **/build** folder from **mck-client** development base to **mck-server** express server. 

After the deployment, you can start your api seperately with `npm run start:api` and your server with `npm run start:server`. That allow listening of api over [http://localhost:9000](http://localhost:9000) and client server over [http://localhost:8080](http://localhost:8080) 

# Commands

This command configurations are available at main package [package.json](https://github.com/emrahday/mck/blob/master/package.json) . It is possible to run under /mck folder. 

### `npm run build:client`

It creates build packages for react app under mck-client. Actually it runs `build` command of mck-client which builds the app for production to the `build` folder.

### `npm run deploy`

It copies `/build` folder under the **mck-client** to **mck-server** which contains seperate express server in order to deliver client app. 

### `npm run start:api`

It starts express server under **mck-api** and server starts listening [http://localhost:9000](http://localhost:9000) in order to deliver api

### `npm run start:server`

It starts express server under **mck-server** and server starts listening [http://localhost:8080](http://localhost:8080) in order to deliver client application. It serves /build folder to clients. 

### `npm run start:client`

It starts react under **mck-client** and server starts listening [http://localhost:3000](http://localhost:3000) in order to deliver react application for development purpose.

# Further development 

It can be further developed with full covarage of unit test and integration test. Code coverage can be visualized with test covarage tools. Also, api stores data to json file. instead of json file, it could use database such as mongodb. By this way, we can get better performance with large data sets by avoiding full `report.json` reading and writing in any single property change. 
