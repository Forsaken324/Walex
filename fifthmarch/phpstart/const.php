<?php

// define(name, value) this is the format
// inorder for a constant to be case sensitive, you can pass in a value of true after the other parameters.
// constants that are defined with the const keyword are automatically negative.
define('newline', "\n");
define ('g', 10.0, true); // this is case sensitive

echo g;

echo newline;
// you can also create a constant using the const keyword
const WaterFormula = 'H2O';

echo WaterFormula;

// constant arrays
echo newline;

define("cars", [
    "Alfa Romeo",
    "BMW",
    "Toyota"
]);

echo cars[0];