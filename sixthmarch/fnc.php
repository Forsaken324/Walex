<?php

myMessage();

function myMessage() {
    echo "Hello world";
}

// php allows for hoisting
function add_five(&$value) {
    $value += 5;
}

$num = 2;
add_five($num);
echo $num;

// variable number of arguments, by using the ... operator in front of the function parameter, the
// function accepts an unknown number of arguments. This is also called a variadic function.

function sumMyNumbers(...$x){
    $n = 0;
    $len = count($x);
    for($i = 0; $i < $len; $i++){
        $n += $x[$i];
    }
    return $n;
}

$a = sumMyNumbers(5, 2, 6, 2, 7, 7);
echo $a;


// first name and lastname

function myFamily($lastname, ...$firstname){
    $txt = "";
    $len = count($firstname);
    for ($i = 0; $i < $len; $i++){
        $txt = $txt."\nHi, $firstname[$i] $lastname. \n";
    }
    return $txt;
}

$sayHi = myFamily("Nduonofit", "Mary", "David");
echo $sayHi;

