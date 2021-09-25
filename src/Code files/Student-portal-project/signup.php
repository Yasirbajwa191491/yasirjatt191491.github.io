<?php

if(isset($_REQUEST['save'])){
$conn=mysqli_connect("localhost","root","","student-portal-project");	
$name=mysqli_real_escape_string($conn,$_POST['name']);

$fname=mysqli_real_escape_string($conn,$_POST['fname']);
$rollno=mysqli_real_escape_string($conn,$_POST['rollno']);
$registration_no=mysqli_real_escape_string($conn,$_POST['registration']);
$session=mysqli_real_escape_string($conn,$_POST['session']);
$session_type=mysqli_real_escape_string($conn,$_POST['session_type']);
$semester=mysqli_real_escape_string($conn,$_POST['semester']);
$dateofbirth=mysqli_real_escape_string($conn,$_POST['dateofbirth']);
$admission_year=mysqli_real_escape_string($conn,$_POST['admission_year']);
$username=mysqli_real_escape_string($conn,$_POST['username']);
$password=mysqli_real_escape_string($conn,md5($_POST['password'])) ;

$sql="SELECT username FROM student_account where username='{$username}'";
$result=mysqli_query($conn,$sql) or die("Querry Failed");

if($row=mysqli_num_rows($result)>0){
	echo "Username already Exists.";	
}else
{
	$sql1="INSERT INTO student_account(name,fname,rollno,registration_no,session,session_type,semester,dateofbirth,admission_year,username,password)
	VALUES('{$name}','{$fname}','{$rollno}','{$registration_no}','{$session}','{$session_type}','{$semester}','{$dateofbirth}','{$admission_year}','{$username}','{$password}')";
	$result1=mysqli_query($conn,$sql1);
	echo $result1;
	echo "Account Created Successfully";
	die();
}

}

?>
<html>
<form action="<?php $_SERVER['PHP_SELF']; ?>" method="POST" >
<label>Enter your Name:</label><br>
<input type="text" name="name" placeholder="i.e Yasir Sohail"><br><br>
<label>Enter your Father Name:</label><br>
<input type="text" name="fname" placeholder="i.e Nazir Hussain"><br><br>
<label>Enter your username:</label><br>
<input type="username" name="username" placeholder="i.e yasir191491"><br><br>
<label>Enter Password:</label><br>
<input type="password" name="password" placeholder="i.e 11942"><br><br>
<label>Enter your Roll No:</label><br>
<input type="number" name="rollno" placeholder="i.e 11942"><br><br>
<label>Enter Registration No:</label><br>
<input type="registration" name="registration" placeholder="i.e 2018-GCUF-06524"><br><br>
<label>Enter Starting and Ending Year Session :</label><br>
<input type="start session" name="session" placeholder="i.e 2018-2022"><br><br>
<label>Enter Session Type:</label><br>
<select name="session_type">
<option value="0" selected disabled>Select</option><br>
<option value="Morning">Morning</option><br>
<option value="Evening">Evening</option><br>
</select><br><br>
<label>Enter Semester Type:</label><br>
<select name="semester">
<option value="0" selected disabled>Select</option><br>
<option value="Fall">Fall</option><br>
<option value="Spring">Spring</option><br>
</select><br><br>
<label>Enter Date of Birth:</label><br>
<input type="date of birth" name="dateofbirth" placeholder="i.e 18/02/1999"><br><br>
<label>Enter Admission Year:</label><br>
<input type="number" name="admission_year" placeholder="i.e 2018"><br><br>
<input type="submit" name="save" placeholder="i.e save"><br><br>

</form>


</html>