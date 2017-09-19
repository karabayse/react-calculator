REACT CALCULATOR
================

Application Overview
--------------------

The CLIENT SIDE will bundle up the inputs and mathematical operator into an object and then send it to the server via a POST request. When the object leaves the Client, it should look something like this: { x: 3, y: 4, type: "add" }

Once the SERVER receives the request, it will compute the numbers in one of four different ways:

- [] Addition
- [] Subtraction
- [] Multiplication
- [] Division
