allthemaths - 0.1.1
====================

a collection of math utilities for use vith the val-bot ecosystem

`npm i val-bot'


Installation
============

As this is a module for _val, it will not do much without it

Copy the attached config data into val's `_val.modules.js` and enable it

Ubuntu Server (or and linux environment without a grphical enviromnent)
=======================================================================

I had some trouble getting this running on the server, but [this](http://stackoverflow.com/a/34798424) post helped tons.  This outlines a fresh install to nightmare.  It should give you some missing pieces.


Available Commands
==================

latex generator

+ Uses nightmare and codecogs latex generator to return a url of the rendered
latex

```
+tex \sum_{0}^{\infty} \frac{f(x+\Delta x)-f(x)-A\begin{bmatrix}\Delta x\\\Delta y \end{bmatrix}}{\Delta x}

// returns http://latex.codecogs.com/png.61417.latex?%5C200dpi%20%5Csum_%7B0%7D%5E%7B%5C%7D%7D

+tex \oint_a^b x

// returns http://latex.codecogs.com/png.99036.latex?%5C200dpi%20%5Coint_a%5Eb%20x

```


Contributing
============

We gladly accept and review any pull-requests. Feel free! :heart:


This project adheres to the [Contributor Covenant](http://contributor-covenant.org/). By participating, you are expected to honor this code.

[allthemaths - Code of Conduct](./CODE_OF_CONDUCT.md)

