<?php

// In PHP, regexs are strings composed of delimiters, a pattern and optional modifiers

$exp = "/w3schools/i";

// i means that it is case insensitive

// PHP provides a variety of functions that allow you to use regular expressions.
// The most common functions are:

// preg_match => returns 1 if the pattern was found in the string and 0 if not
// preg_match_all => returns the number of times the pattern was found in the string, which may also be 0
// preg_replace => returns a new string where matched patterns have been replaced with another string

$str = 'Visit W3Schools W3Schools W3Schools W3Schools W3Schools W3Schools';
echo preg_match($exp, $str);
echo preg_replace($exp, "Datacamp", $str);
