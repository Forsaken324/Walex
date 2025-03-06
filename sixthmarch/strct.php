<?php declare(strict_types=1);
// php supports strict mode or strict typing, by using the declare(strict_types=1); command

// you can specify the return type of a function by using the colon when using strict typing

// strict types prevent type convertion, speeding up programs.

function addNumbers(float $a, float $b) : int {
    return (int)($a + $b);
}

echo addNumbers(3/2, 6.0);