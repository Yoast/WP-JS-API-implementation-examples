# Chapter 0 - Setup

## Prerequisites
At Yoast, we make use a specific toolset to develop our code. Please ensure you have the following tools installed before beginning. 

* [Git](https://git-scm.com/)
* [Node](https://nodejs.org/en/) (we use the 8.* version)
* [Yarn](https://yarnpkg.com/en/)

## Getting started

After installing the above tools, you have two options:

* Create a new plugin folder somewhere in your `/wp-plugins/` directory with its own unique name and copy over the files in this folder (Recommended). 
* Checkout this repository via `git clone https://github.com/Yoast/WP-JS-API-implementation-examples`, which will give you all the files from the tutorials.

## Install the necessary dependencies

After you've copied over the necessary files, run `yarn` to install the dependencies configured in the `package.json` file.

The dependencies that will be installed, include:

* [React](https://reactjs.org) and React DOM
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
