<?php

// $user = 'User 32';

// echo "The name of the current user is $user \n"; // in order to use this, the string must be with double quotes not single quotes.
// to get the data type of a variable, use the vardump function

// var_dump($user);

// $x = $y = $z = 'Fruit';

// echo $x, $

$x = 5;

// function myTest(){
//     echo "The value of the variable x is $x";
// }

// myTest();

echo $x;
echo "\n";
$y = 7;
// a variable declared within a function has a local scope and can only be accessed within that function
echo $y;
// the global keyword is used to access a global variable from within a function

function myTest2(){
    global $x;
    $x = 59;
    $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
    echo "\nThis is the new value of $x\n";
}

myTest2();

echo $x;
echo "\n";
echo $y;



// php stores all global variables in an array called $GLOBALS


// Variables declared within a local scope, will be deleted after that function or method has finished running
// in order for us to hold the value of a variable across method calls, we use the static keyword


function staticFuntion(){
    static $y = 1; // this value will be held across method calls
    echo $y;
    $y ++;
}

staticFuntion();
staticFuntion();
staticFuntion();

// this is an array in php

$cars = array('Volvo', 'BMW', 'Toyota', 6);
var_dump($cars);

// working with classes
// the __construct is used to declare a constructor

class Human {
    public $name;
    public $age;
    public $skill;
    public $hobby;

    public function __construct($name, $age, $skill, $hobby)
    {
        $this->name = $name;
        $this->age = $age;
        $this->skill = $skill;
        $this->hobby = $hobby;
    }

    public function introduceYourself(){
        echo "My name is " . $this->name;
    }
}

$peter = new Human('Peter', 56, 'coding', 'reading');
echo $peter->introduceYourself();
echo "\n";

var_dump($peter);

// casting allows you to change variables from one type to another

$z = '11';
var_dump($z);

$z = (int) $z;

var_dump($z);


// strings in php

// inorder to get the length of a string, use the strlen function

// strlen -> length of the string
// str_word_count -> count the number of words in a string
// strpos -> searches for a specific text within a string



$word = 'This is a very very very very very very lengthy string, infact it is unecessary';

echo strpos($word, 'very'); // this searches the characters in the string, and returns the position of the first occurence of that string
// it goes T then h then i till it finds v and then matches it to see if it has very as a word, then it returns the location where it first 
// found v
echo str_word_count($word);

// modifying a string
// you can modify a string using various built-in functions

// the builtin functions for modifying a string includes
// strtoupper
// strtolower
// str_replace
// strrev -> reverse a string
// trim
// in order to convert a string into an array, you have to use the explode method.

$x = "Hello World!";
echo "\n";
echo strtoupper($x);
echo "\n";
echo strtolower($x);

echo $x.str_replace('World', 'Joshua', $x);

$y = explode(" ", $x);
print_r($y); // inorder to print an array, you have to use the print_r function


// string concatenation

$x = 'Hello';
$y = 'World';

echo $x . $y;
echo $x . ', What is going on ' . $y;
echo "$x $y";

// slicing strings

// you can return a range of characters by using a substr function

$x = "Hello World!";
echo substr($x, 6, 5);
