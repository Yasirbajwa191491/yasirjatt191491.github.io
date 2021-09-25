<?php 
if(isset($_POST['save'])){
$conn=mysqli_connect("localhost","root","","student-portal-project");
session_start();
session_unset();
session_destroy();

}
?>
<html>
<head>
</head>
<body>
<form action="$_SERVER['$_SELF']" method="post">

Logout:<input type="submit" name="logout" value="log out"><br><br>

<a href='C:\xampp\htdocs\Student-portal-project\login.php'>login</a>

</form>
</body>

</html>