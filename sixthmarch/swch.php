<?php

$name = 'John';

switch ($name){
    case 'David':
        echo "You are authorized to perform this operation\n";
        echo 'Operation completed successfully!';
        break;
    
    case 'Ukpong':
    case 'Peter':
        echo 'You are not authorized to perform this operation';
        break;

    default:
        echo 'Not a valid user.';
}