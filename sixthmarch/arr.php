<?php

// Array items can be of any data type.

// Arrays can hold any value, but the most common values are strings, integers, they can also hold other arrays, objects or even functions

$myArr = array("Volvo", 15, ["apples", "bananas"]);
// var_dump($myArr);

// count returns the number of items in an array

// Indexed Arrays

// In indexed array, each element has an Index number

//foreach($myArr as $x){
 //   echo $x . "\n";
//}

$testArr = array();

$testArr[0] = 1;
$testArr[19] = 'testing';

array_push($testArr, "welcome");

// var_dump($testArr);

// foreach($testArr as $x){
//     echo $x . "\n";
// }

// Associative Arrays

$human = array("Name"=>"David", "Age"=>18, "Hobby"=>"Mathematics", "Skill"=>"Python Programming");

echo $human['Name'];
$human['FavColour'] = "Black";

var_dump($human);


// arrays can also be declared using brackets

$cars = ['Tesla', 'Porche', 'Ferrari'];

// you can also specify their index.

$indexedCars = [0 => 'Porche', 1 => 'Tesla', 2 => 'Ferrari', 4 => 'Bugatti', 3 => 'Mercedes Benz'];

echo $indexedCars[4];

// the order in which the indexing is done does not matter


// Accessing Array Elements
