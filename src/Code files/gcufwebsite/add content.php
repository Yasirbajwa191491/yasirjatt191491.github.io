<?php

	

if(isset($_FILES['image'])) {
	$conn=mysqli_connect("localhost","root","","gcufwebsite") or die("connection error:". mysqli_connect_error());
    $errors = array();

     $file_name = $_FILES['image']['name'];
     $file_size = $_FILES['image']['size'];
     $file_tmp = $_FILES['image']['tmp_name'];
     $file_type = $_FILES['image']['type'];
     $file_ext = (explode('.',$file_name));

    
      move_uploaded_file($file_tmp,"images/".$file_name);
	  echo "image uploaded successfully" ."<br";
    
  


$role=mysqli_real_escape_string($conn,$_POST['role']);
$name=mysqli_real_escape_string($conn,$_POST['name']);
$discription=mysqli_real_escape_string($conn,$_POST['discription']);

$sql="SELECT name FROM staffdetails where name='{$name}'";
$result=mysqli_query($conn,$sql) or die("Querry Failed:". mysqli_error($conn));

if($row=mysqli_num_rows($result)>0){
	echo "Person already Exists.";
    //include "contents.php";	
}else
{
	$sql1="INSERT INTO staffdetails(role,name,image,discription)
	VALUES('{$role}','{$name}','{$file_name}','{$discription}')";
	$result1=mysqli_query($conn,$sql1) or die("Sec query failed:". mysqli_error($conn));
	echo "Account Created Successfully";
	 //include "contents.php";
    die();
}

}
?>
<html>
<head>
<style>
body{
    
	height:100%;
	margin:0;
	padding:0;
}
#content{
	border:1px solid lightgray;
	width:900px;
	background-color:white;
	margin:0 auto;
	height:100%;
}

</style>
</head>

<body>
<div id="content">
<h2 style="color:gray;"> Add Post: </h2>
<form action="<?php $_SERVER['PHP_SELF']; ?>" method="POST" enctype="multipart/form-data" style="padding-left:20px;" >
<label>Enter role:</label><br>
<h3><select name="role" style="width:200px;height:30px;"></h3>
<option value="0" selected disabled >Select</option><br>
<option value="Vice Chancellor">Vice Chancellor</option><br>
<option value="Dean">Dean</option><br>
<option value="Chairperson">Chairperson</option><br>
<option value="Faculty Member">Faculty Member</option><br>
<option value="Teacher">Teacher</option><br>
</select><br><br>
<label>Enter Name:</label><br>
<input type="text" name="name" placeholder=" " style="width:250px;height:30px;"><br><br>

<label>Enter Description:</label><br>
<textarea type="text" name="discription" placeholder=" " rows="20" cols="20" style="width:500px;height:300px;"></textarea>
<br>
<label>Enter profile picture:</label><br>
<input type="file" name="image" required><br><br>
  <input type="submit" name="save" class="btn btn-primary" value="Save" required />
      

</form>

</div>
</body>

</html>