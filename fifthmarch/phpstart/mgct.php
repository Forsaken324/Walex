<?php

// PHP has nine predefined constants that change value depending on where they are used, also called the 
// magic constants.

// __CLASS__ -> If used inside a class, the class name is returned.
// __DIR__ -> This returns the directory of the file.
// __FILE__ -> The file name including the full path.
// __FUNCTION__  -> If inside a function, the function name is returned.
// __LINE__  -> The current line number.
// __METHOD__  -> If used inside a method, both the class name and the method name is returned.
// __NAMESPACE__  -> If used inside a namespace, the name of the namespace is returned
// __TRAIT__  -> Returns the name of a trait if used inside a trait
// ClassName::class  -> Returns the name of the specified class and the name of the namespace, if any.


echo __DIR__;
echo __LINE__;
echo __FILE__;