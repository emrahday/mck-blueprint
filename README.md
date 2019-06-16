
# architecture

## what does mck-api package ?

## what does mck-client package ?

## what does mck-server package ?

# dependencies

# browser support

## typical development steps and starting the application

After you make edit in your react client code base **mck-client** or express api **mck-api** you can run all tests under each package with `npm run test` command. it will trigger all jest test under `mck-api` and enzyme/jest test under `mck-client`

if testing is successful you can build react app in **mck-client** with `npm run build:client` command. that will create a build version of react app under **/build** folder of **mck-client**

if you want to serve this builded version of react app in express server you can deploy with `npm run deploy`. actually this command copies **/build** folder from **mck-client** devempment base to **mck-server** express server. 

after the deployment you can start your api seperately with `npm run start:api` and your server with `npm run start:server`. that will start listen api over [http://localhost:9000](http://localhost:9000) and client server over [http://localhost:8080](http://localhost:8080) 

### `npm run test`

it runs all test packages under mck-api and mck-client

### `npm run build:client'

it create build packge for react app under mck-client. actually it runs `build` command of mck-client which builds the app for production to the `build` folder.

### `npm run deploy'

it copies `/build` folder under the **mck-client** to **mck-server** which contains seperate express server in order to deliver client app. 

### `npm run start:api'

it start express server under **mck-api** and server starts listening [http://localhost:9000](http://localhost:9000) in order to deliver api

### `npm run start:api'

it start react under **mck-client** and server starts listening [http://localhost:3000](http://localhost:3000) in order to deliver react application for development purpose

### `npm run start:server'

it start express server under **mck-server** and server starts listening [http://localhost:8080](http://localhost:8080) in order to deliver client application

# what can be better
//TODO  such as write to database instead of json

//TODO test covarage tool?