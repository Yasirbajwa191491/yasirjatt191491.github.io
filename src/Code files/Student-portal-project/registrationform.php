<?php

echo "<h1 style='color:red; font-weight: bold;'> Registration Form: </h1><br><br><br> ";
if(isset($_POST['save'])){
$conn=mysqli_connect("localhost","root","","student-portal-project") or die("coonection failed: ".mysqli_connect_error());	
 //$name=mysqli_real_escape_string($conn,$_POST['name']);
 
 $name="yasir sohail.com";
	var_dump (filter_var($name,FILTER_VALIDATE_EMAIL));
	die();
	if(filter_var($rollno,FILTER_VALIDATE_FLOAT)){
		echo "format of name is incorrect";
	}
else{
	
	$sql = "INSERT INTO student_account(rollno)
	VALUES('{$rollno}')";
    $result = mysqli_query($conn,$sql) or die("Querry Failed");
}
}
?>
<html>


<body>
<div class="logopage">
                        <a href=""><img class="logo" src="C:\xampp\htdocs\Student-portal-project\image\gcuf.png" alt="There was a image"></a>
                    </div>
					<html>
<form action="<?php $_SERVER['PHP_SELF']; ?>" method="POST" >
<label>Enter your email:</label><br>
<input type="email" name="name" placeholder="i.e Yasir Sohail"><br><br>
<!--<label>Enter your Father Name:</label><br>
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
<input type="number" name="admission_year" placeholder="i.e 2018"><br><br>-->
<input type="submit" name="save" placeholder="i.e save"><br><br>

</form>


</html>

</body>


<?html>