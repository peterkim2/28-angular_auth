![cf](https://i.imgur.com/7v5ASc8.png) Lab 28 - Client Side Auth
======

## To Submit this Assignment
  * create a fork of this repository
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Include
  * `.eslintrc`
  * `.babelrc`
  * `.gitignore`
  * `package.json`
    * create an npm `build` script for running `webpack`
    * create an npm `build-watch` script for running `webpack-dev-server --inline --hot`
    * create an npm `test` script for running karma and all associated tests
    * create an npm `test-watch` script for running karma on file system changes
    * create an npm `lint` script for linting your JS with `eslint`
  * **ignore the build directory**
  * `webpack.config.js`
    * this should include all of the production environment configurations used in lecture code
  * `karma.config.js`

## Description
  * Create these directories to organize your code:
    * app
    * app/config
    * app/view
    * app/view/home
    * app/view/landing
    * app/scss
    * app/scss/lib
    * app/scss/lib/base
    * app/scss/lib/layout
    * app/scss/lib/theme
    * app/service
    * app/component
    * app/component/landing
  * include a **main.scss**
  * include an `.scss` partial for each component you create
  * style the application to meet the **sign in** & **sign up** mockups provided in the `wireframes` directory of this repo
  * use `require.context` to add all of your angular construct definitions

## Clone
  * Clone, setup, and run the `slugram-backend` application in order for your angular app to communicate with the server
  * [slugram-backend](https://github.com/slugbyte/slugram-backend)
    * **note** - this application should be running on the `staging` branch
    * **note** - **DO NOT** include this application with your assignment submission

## Functional Requirements
  * Create 2 views: `/#/`, `/#/home/`
    * each view should have its own controller
    * the `/#/` view should be the default landing page
    * the landing page markup should contain `<signup>` and `<login>` components
  * Create an auth service with for making `http` requests to the `slugram-backend` application
    * this should have contain methods for sign up and sign in routes
    * this should have methods to `get` and `delete` a token from local storage
  * Create a sign up component
    * this should have its own controller and use the `controllerAs` syntax
    * this should have a form with username, email, and password fields
    * this should use the auth service to signup and store a token
    * this should redirect the page to `/#/home` on a successful form submit
  * Create a login component
    * this should have its own controller and use the `controllerAs` syntax
    * this should have a form with username and password fields
    * this should use the auth service to login and store a token
    * this should redirect the page to `/#/home` on success
