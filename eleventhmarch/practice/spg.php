<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="spg.php" , method="post">
        <label for="name">Enter your name</label>
        <input type="text" id="name" name="name" maxlength="128" , minlength="2">
        <button type="submit">Submit</button>
    </form>
    <!-- Testing get operations in php -->
    <a href="spg.php?subject=random+get+test+string&org=potato+org">Test the get link</a>
    <?php

    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $username = htmlspecialchars($_REQUEST['name']);
        if (empty($username)) {
            echo "Name is empty";
        } else {
            echo "Welcome " .  $username;
        }
    }

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $subject = $REQUEST['subject'];
        $organization = $_REQUEST['org'];
        echo 'This is the string that was passed into the query: ' .  $subject . "\nThis is the organization: " . $organization;
    }

    ?>
</body>

</html>



<!-- // echo $_SERVER['SCRIPT_NAME'];

// The $_REQUEST is a PHP super global that contains submitted form data, and all cookie data.

// it contains data from $_GET, $_POST, and $_COOKIE -->