<?php

$i = 1;
while($i < 6){
    if($i == 4) break;
    //echo $i;
    $i++;
}

$colors = array("red", "yellow", "blue");

foreach($colors as $x){
    //echo $x . "\n";
}

// associative arrays

$members = array("Peter"=> 35, "John" => 30, "Paul" => 49, "Nsikak" => 19);

foreach($members as $x => $y){
    echo "This is the key " . $x . " and this is the value " . $y . "\n"; 
}

// you can also use a loop to loop through objects

class Car {
    public $model;
    public $color;
    public $topspeed;

    public function __construct($model, $color, $topspeed)
    {
        $this->model = $model;
        $this->color = $color;
        $this->topspeed = $topspeed;
    }
}

$Tesla = new Car('X Plaid', 'Solid Black', 163);

// echo $Tesla; check on how to print an object in php

foreach($Tesla as $x => $y){
    if($x == 'topspeed'){
        echo "$x: $y mph \n ";
        continue;
    }
    echo "$x: $y \n";
}

// any changes done to an array, any changes done to the array will not affect the original array.
// by using the & character, any changes done to the array item will also be done to the original array.

var_dump($colors);

foreach($colors as &$x){
    if($x === "blue") $x = "navy";
}

var_dump($colors);
