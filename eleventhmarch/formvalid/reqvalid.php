<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php
    $nameErr = $emailErr = $genderErr = $websiteErr = "";
    $name = $email = $gender = $comment = $website = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST['name'])) {
            $nameErr = "Name is required";
        } else {
            $name = TestInput($_POST['name']);
        }
        if (empty($_POST['email'])) {
            $emailErr = "Email is required";
        } else {
            $email = TestInput($_POST["email"]);
        }
        if (empty($_POST["website"])) {
            $website = "";
        } else {
            $website = TestInput($_POST["website"]);
        }

        if (empty($_POST["comment"])) {
            $comment = "";
        } else {
            $comment = TestInput($_POST["comment"]);
        }

        if (empty($_POST["gender"])) {
            $genderErr = "Gender is required";
        } else {
            $gender = TestInput($_POST["gender"]);
        }
    }


    function TestInput($data)
    {
        // we want to clean our data
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }


    ?>
    <h1>Form Validation In PHP</h1>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">

        Name: <input type="text" name="name">
        <span style="color: red;">* <?php echo $nameErr; ?></span>
        <br><br>
        E-mail:
        <input type="text" name="email">
        <span style="color: red;">* <?php echo $emailErr; ?></span>
        <br><br>
        Website:
        <input type="text" name="website">
        <span style="color: red;"><?php echo $websiteErr; ?></span>
        <br><br>
        Comment: <textarea name="comment" rows="5" cols="40"></textarea>
        <br><br>
        Gender:
        <input type="radio" name="gender" value="female">Female
        <input type="radio" name="gender" value="male">Male
        <span style="color: red;">* <?php echo $genderErr; ?></span>
        <br><br>
        <input type="submit" name="submit" value="Submit">

    </form>

    <h1>Your Input: </h1>

    <?php
    echo $name;
    echo "<br>";
    echo $email;
    echo "<br>";
    echo $website;
    echo "<br>";
    echo $comment;
    echo "<br>";
    echo $gender;
    ?>   
</body>

</html>