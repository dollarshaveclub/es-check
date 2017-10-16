<p align="center">
  <img src="https://yowainwright.imgix.net/gh/es-check.svg" alt="ES Check ✔️" width="120" />
</p>

----

<p align="center">Check JavaScript files ES version against a specified ES version 🏆</p>

----

<p align="center">
  <a href="https://circleci.com/gh/dollarshaveclub/es-check/tree/master">
    <img alt="Build Status" src="https://circleci.com/gh/dollarshaveclub/es-check/tree/master.svg?style=svg" />
  </a>
  <a href="https://www.npmjs.com/package/es-check">
    <img alt="npm version" src="https://badge.fury.io/js/es-check.svg" />
  </a>
  <a href="https://greenkeeper.io/">
    <img alt="Greenkeeper" src="https://badges.greenkeeper.io/dollarshaveclub/es-check.svg" />
  </a>
  <a href="https://codecov.io/gh/dollarshaveclub/es-check">
    <img src="https://codecov.io/gh/dollarshaveclub/es-check/branch/master/graph/badge.svg" alt="Codecov" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=ES%20Check%E2%80%94Checks%20the%20version%20of%20ES%20in%20JavaScript%20files%20with%20simple%20shell%20commands%20%40dollarshaveclub%20https%3A%2F%2Fgithub.com%2Fdollarshaveclub%2Fes-check">
    <img alt="Share on Twitter" src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social&maxAge=2592000" />
  </a>
</p>

----

<h1 align="center">ES Check ✔️</h1>

**ES Check** checks JavaScript files against a specified version of ECMAScript (ES) with a shell command. If a specified file's ES version doesn't match the ES version argument passed in the ES Check command, ES Check will throw an error and log the files that didn't match the check.  

Ensuring that JavaScript files can pass ES Check is important in a [modular and bundled](https://www.sitepoint.com/javascript-modules-bundling-transpiling/) world. Read more about [why](#why).

----

<p align="center">
  <a href="#get-started">Get Started</a>&nbsp;&nbsp;
  <a href="#why">Why ES Check?</a>&nbsp;&nbsp;
  <a href="#usage">Usage</a>&nbsp;&nbsp;
  <a href="#walkthrough">Walk Through</a>&nbsp;&nbsp;
  <a href="#api">API</a>&nbsp;&nbsp;
  <a href="#contributing">Contributing</a>&nbsp;&nbsp;
  <a href="/issues">Issues</a>  
</p>

----

## Get Started

Install

```sh
npm i es-check --save-dev
```

Check if an array or glob of files matches a specified ES version

```sh
node_modules/es-check/index.js check es5 ./vendor/js/*.js ./dist/**/*.js
```

- The ES Check script (above) checks `/dist/*.js` files to see if they're ES5. It throws an error and logs files are that do not pass the check. 

----

<h2 id="why">Why ES Check?</h2>

In modern JavaScript builds, files are bundled up so they can be served in an optimized manner in the browsers. It is assumed by developers that future JavaScript—like ES8 will be transpiled (changed from future JavaScript to current JavaScript) appropriately by a tool like Babel. Sometimes there is an issue where files are not transpiled. There was no efficient way to test for files that weren't transpiled—until now. That's what ES Check does.

----

<h2 id="walkthrough">Walk through</h2>

The images below demonstrate command line scripts and their corresponding logged results. 

Pass
![pass](https://user-images.githubusercontent.com/1074042/31471487-d7be22ee-ae9d-11e7-86e2-2c0f71cfffe6.jpg)

Fail
![fail](https://user-images.githubusercontent.com/1074042/31471486-d65c3a80-ae9d-11e7-94fd-68b7acdb2d89.jpg)

**ES Check** is run above with node commands. It can also be run within npm scripts, ci tools, or testing suites.

----

## API

**ES Check** provides the necessities. It accepts its place as a JavaScript matcher/tester.

### General Information

```sh
USAGE

index.js es-check <es-checkersion> [files...]
```

### Arguments

```sh
<ecmaVersion> 'define the ECMAScript version to check for against a glob of JavaScript files' required
[files...] 'a glob of files to test the ECMAScript version against' required
```

### Global Options

```sh
-h, --help         Display help
-V, --version      Display version
--no-color         Disable colors
--quiet            Quiet mode - only displays warn and error messages
-v, --verbose      Verbose mode - will also output debug messages
```

----

## Usage

ES Check is a shell command CLI. It is run in [shell tool](http://linuxcommand.org/lc3_learning_the_shell.php) like Terminal, ITerm, or Hyper. It takes in two arguments: an [ECMAScript version](https://www.w3schools.com/js/js_versions.asp) (`<ECMAScript version>`) and files (`[files]`) in [globs](http://searchsecurity.techtarget.com/definition/globbing).

Here are some example of **es check** scripts that could be run:

```sh
# globs
node_modules/es-check/index.js check es5 ./js/*.js

# array of arguments
node_modules/es-check/index.js check es5 ./js/*.js ./dist/*.js
```

----

## Contributing

ES Check has 3 main dependencies: [acorn](https://github.com/ternjs/acorn/), [glob](https://www.npmjs.com/package/glob), and [caporal](https://github.com/mattallty/Caporal.js). To contribute, file an [issue](https://github.com/dollarshaveclub/es-check/issues) or submit a pull request.
