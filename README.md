<h1 align="center">ES Check ✔️</h1>
<h5 align="center">Checks the JavaScript files version of ECMAScript (ES) with shell commands  🏆</h5>

----

<p align="center">
  <a href="#api">API</a>&nbsp;&nbsp;
  <a href="#usage">Usage</a>&nbsp;&nbsp;
  <a href="#why">Why ES Check?</a>&nbsp;&nbsp;
  <a href="#contributing">Contributing</a>&nbsp;&nbsp;
  <a href="/issues">Issues</a>  
</p>

----

**ES Check** checks JavaScript files against a specified version of ECMAScript with a shell command. If a specified file's ECMAScript version doesn't match the ECMAScript version argument passed in the es check shell script, es check will throw an error.  For example, `es-check check ecma5 ./dist/*.js` will check `/dist/*.js` files to see if they're ECMAScript 5 and throw errors for any files are that are not. This is important in a [modular and bundled](https://www.sitepoint.com/javascript-modules-bundling-transpiling/) world. 

----

## API

**ES Check** provides the necessities. It accepts its place as a JavaScript matcher/tester.

### General Information

```sh
es-check 0.0.1

USAGE

index.js es-check <es-checkersion> [files...]
```

### Arguments

```sh
ARGUMENTS

<es-checkersion> define the ECMAScript version to check for against a glob of JavaScript files      required
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

**ES Check** is a shell command CLI. It is run in [shell tool](http://linuxcommand.org/lc3_learning_the_shell.php) like Terminal, ITerm, or Hyper. It takes in two arguments: an [ECMAScript version](https://www.w3schools.com/js/js_versions.asp) (`<ECMAScript version>`) and files (`[files]`) in [globs](http://searchsecurity.techtarget.com/definition/globbing).

Here are some example of **es check** scripts that could be run:

```sh
# global
es-check check ecma5 ./js/*.js

# project
bin/es-check check ecma5 ./js/*.js

# with a files array
es-check check ecma5 ./js/*.js ./files/*.js
```

----


<h2 id="why">Why es check?</h2>

In modern JavaScript builds, files are bundled up so they can be served in an optimized manner in the browsers. It is assumed by developers that future JavaScript—like ES8 will be transpiled (changed from future JavaScript to current JavaScript) appropriately by a tool like Babel. Sometimes there is an issue where files are not transpiled. There was no efficient way to test for files that weren't transpiled—until now. That's what ES Check does.

----

## Contributing

**ES Check** is dependent on 3 tools: [acorn](https://github.com/ternjs/acorn/), [glob](https://www.npmjs.com/package/glob), and [caporal](https://github.com/mattallty/Caporal.js). To contribute, file an [issue](https://github.com/dollarshaveclub/es-check/issues) or submit a pull request.
