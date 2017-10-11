<p align="center">
  <img alt="ECMA-V banner" src="https://yowainwright.imgix.net/gh/ecma-v.svg" width="150" />
</p>

<h1 align="center">ECMA-V is now called ES-Check. Chekout out <a href="https://github.com/dollarshaveclub/es-check">ES-Check</a>!<h1>

----

<h5 align="center">Checks the version of ECMAScript used in JavaScript with shell commands  🏆</h5>

----

<p align="center">
  <a href="#api">API</a>&nbsp;&nbsp;
  <a href="#usage">Usage</a>&nbsp;&nbsp;
  <a href="#why">Why ECMA V?</a>&nbsp;&nbsp;
  <a href="#contributing">Contributing</a>&nbsp;&nbsp;
  <a href="/issues">Issues</a>  
</p>

----

**ECMA V**, short for `ECMA Version`, checks JavaScript files against a specified version of ECMAScript with a shell command. If a specified file's ECMAScript version doesn't match the ECMAScript version argument passed in the Ecma V shell script, Ecma V will throw an error.  In example, by running the command `ecma-v check ecma6 ./dist/*.js` will check `/dist/*.js` files to see if they're ECMAScript 5 and throw errors for any files are that are not. This is important in a [modular and bundled](https://www.sitepoint.com/javascript-modules-bundling-transpiling/) world. 

----

## API

ECMA V provides the necessities. It accepts its place as a JavaScript matcher/tester.

### General Information

```sh
ECMA V 0.0.1

USAGE

  index.js ecma-v <ecma-version> [files...]
```

### Arguments

```sh
ARGUMENTS

  <ecma-version> define the ECMAScript version to check for against a glob of JavaScript files      required
  [files...] a glob of files to test the ECMAScript version against                          optional
```

### Global Options

```sh
GLOBAL OPTIONS

  -h, --help         Display help
  -V, --version      Display version
  --no-color         Disable colors
  --quiet            Quiet mode - only displays warn and error messages
  -v, --verbose      Verbose mode - will also output debug messages
```

----

## Usage

ECMA V is a shell command CLI. It is run in [shell tool](http://linuxcommand.org/lc3_learning_the_shell.php) like Terminal, ITerm, or Hyper. It takes in two arguments: an [Ecmascript version](https://www.w3schools.com/js/js_versions.asp) (`<ecma-version>`) and files (`[files]`) in [globs](http://searchsecurity.techtarget.com/definition/globbing).

Here are some example of **ECMA V** scripts that could be run:

```sh
# global
ecma-v check ecma5 ./js/*.js

# project
bin/ecma-v check ecma5 ./js/*.js

# with a files array
ecma-v check ecma5 ./js/*.js ./files/*.js
```

----


<h2 id="why">Why ECMA V?</h2>

In modern Front End Software builds, files are bundled up so they can be served in an optimized manner in the browsers. It is assumed by developers that Future JavaScript—like ES8 will be transpiled (changed from future JavaScript to current JavaScript) appropriately by a tool like Babel. Sometimes there is an issue where files are not transpiled. There was no efficient way to test for files that weren't transpiled—until now. That's what ECMA V does.

----

## Contributing

ECMA V is dependent on 3 tools: [acorn](https://github.com/ternjs/acorn/), [glob](https://www.npmjs.com/package/glob), and [caporal](https://github.com/mattallty/Caporal.js). To contribute, file an [issue](https://github.com/dollarshaveclub/ecma-v/issues) or submit a pull request
