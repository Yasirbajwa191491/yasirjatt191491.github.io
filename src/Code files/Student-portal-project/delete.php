
<?php
if(isset($_POST['save'])){
$conn=mysqli_connect("localhost","root","","student-portal-project");	
$username=mysqli_real_escape_string($conn,$_POST['username']);
$sql="SELECT * FROM student_account WHERE username='{$username}'";
$result=mysqli_query($conn,$sql) or die("Querry Failed.");
if(mysqli_num_rows($result)>0){
$sql1="DELETE FROM student_account WHERE username='{$username}'";
mysqli_query($conn,$sql1) or die("Sec Querry Failed.");
echo "Account Deleted successfully";
die();
}
else{
	echo "Your username and password are incorrect";
	//die();

}

}
?>
<html>
<head>
<style>
#header{
background-color:lightblue;
color:darkred;
height:250px;
text-shadow:7px 10px 7px gray;
}
</head>

</style>
<body style=background-color:red;>
<div id="header">
<img src="C:\xampp\htdocs\Student-portal-project\Picture1.png" alt="There was a image" style="float:left;"/><br>
<h1><pre> GC University, Faisalabad
     Campus Management Solution </pre><h1>
</div>

<form actin="$_SERVER['$_SELF']" method="post">
<label>Enter your username:</label><br>
<input type="username" name="username" placeholder="i.e yasir1914"><br><br>

<input type="submit" name="save" value="Save"><br><br>
