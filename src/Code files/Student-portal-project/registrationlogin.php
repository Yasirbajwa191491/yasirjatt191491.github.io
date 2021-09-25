<?php  
if(isset($_POST['save'])){
$conn=mysqli_connect("localhost","root","","student-portal-project");	
$dateofbirth=mysqli_real_escape_string($conn,$_POST['dateofbirth']);
$cnic=mysqli_real_escape_string($conn,$_POST['cnic']);

$sql="SELECT cnic FROM gcufregistration where cnic='{$cnic}'";
$result=mysqli_query($conn,$sql) or die("Querry Failed");

if($row=mysqli_num_rows($result)>0){
	echo "Username already Exists.";	
}else
{
$sql1="INSERT INTO gcufregistration(cnic,dateofbirth)
       VALUES('{$cnic}','{$dateofbirth}')";
$result1=mysqli_query($conn,$sql1) or die("INSERT: Querry Failed");
	//echo "Account Created Successfully";
	include "registrationform.php";
	die();
}




}

?>
<html>


<head>
<style>
bold{
	
	font-family:arial helvetica;

	
}
#regs{
	background-color:lightblue;
		border: 1px solid black;
width:300px;
margin:200px auto;
height:200px;

	
}

</style>

</head>
<body>

<div   id="regs">

<span style="color:red; font-weight: bold;"> Enter Applicant CNIC/ B -From# </span><br><br><br>
<form action="<?php $_SERVER['PHP_SELF']; ?>" method="POST" >
<strong>Date of Birth</strong><span style="color:red; font-weight: bold;"> * </span><br>
<input type="date" name="dateofbirth"  ><br>
 <strong>CNIC Number</strong><span style="color:red; font-weight: bold;"> * </span><br>
<input type="cnic" name="cnic" ><br><br>
<input type="submit" name="save" placeholder="i.e Login" style="float:right;">
</form>
</div>
</body>
</html>