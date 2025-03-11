<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>PHP Form Validation Example</h1>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <!-- the htmlspecialchars prevents cross site scripting attacks  -->
        <label for="name">Name: </label>
        <input type="text" maxlength="50" minlength="2" id="name" name="name" required><br>

        <label for="email">Email: </label>
        <input type="email" id="email" name="email" required><br>

        <label for="website">Website: </label>
        <input type="text" id="website" name="website" maxlength="100" minlength="3"><br>

        <label for="comment">Comment: </label>
        <textarea name="comment" id="comment" placeholder="make a comment"></textarea><br>

        <label for="gender">Gender: </label>
        <input type="radio" name="gender" value="male" >Male
        <input type="radio" name="gender" value="female">Female <br>

        <button type="submit">Submit</button>
    </form>
    <?php

    // now we want to process all our data that has been passed into the form

    $name = $email = $gender = $comment = $website = "";

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = TestInput($_POST['name']);
        $email = TestInput($_POST['email']);
        $website = TestInput($_POST['website']);
        $comment = TestInput($_POST['comment']);
    }

    function TestInput($data){
        // we want to clean our data
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // the get and post methods create an associative array.

    // get is useful for sending non-sensitive data, this is because it shows the data sent in the url
    // it is not possible to bookmark a page when using get and post methods

    echo "Welcome " . $name;

    ?>
</body>

</html>