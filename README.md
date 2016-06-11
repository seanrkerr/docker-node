Express & ES6 REST API Boilerplate
==================================


This is a straightforward boilerplate for building REST APIs with ES6 and Express.


- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

> Tip: If you are using [Mongoose](https://github.com/Automattic/mongoose), you can automatically expose your Models as REST resources using [restful-mongoose](https://git.io/restful-mongoose).

Getting Started
---------------

##pre requisites

docker toolbox,
virtual box

##create the container

```
docker-machine create --driver virtualbox node-test
```

##get the environment settings

```
docker-machine env node-test

```

##make sure the shell is available

```
eval "$(docker-machine env node-test)"

```

##mount the volume, add ssh keys and init with node 6

```
docker run --rm -ti -v /Users/you/.ssh/mykey_rsa:/root/.ssh/id_rsa -v /Users/you/myfolder/node-test:/code -p 8080:8080 node:6.2 bash
```


```sh
# clone it
git clone git@github.com:seanrkerr/docker-node.git
cd express-es6-rest-api

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Run it
PORT=8080 npm start

# With nodemon:
PORT=8080 nodemon
```






License
-------

MIT
