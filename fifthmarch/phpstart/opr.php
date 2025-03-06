<?php

// <> not equal to
// === identical
// \!== not identical
// == equal
// <=/> this is also called spaceship, this returns an integer less than, equal to, or greater than zero, depending on if 
// the value is less than, equal to, or greater than the other value. it works on php 7 or greater


// the php conditional assignment operators are used to set a value depending on conditions

// \?:  Ternary operator.
// \??  Null coalescing operator.

$x = 1;
$y = 2;

echo $x === $y ?  "yes" :  "no";

// $x === $y ? echo 'yes' : echo 'no'
$colour; // this variable is defined, but it is not assigned a variable.
echo $colour = $colour ?? 'red';