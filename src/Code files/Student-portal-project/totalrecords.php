
<?php
$conn=mysqli_connect("localhost","root","","student-portal-project");
$limit=3;
if(isset($_GET['page'])){
	$page=$_GET['page'];
}
else{
	$page=1;
}
$offset = ($page - 1)*$limit;


$sql="SELECT * FROM student_account";
$result=mysqli_query($conn,$sql) or die("Sec Querry Failed.");
if(mysqli_num_rows($result)>0)
$totalrecords=mysqli_num_rows($result);
echo '<ul class="pagination admin-pagination">';
$totalpages=ceil($totalrecords/$limit);
  if($page > 1){
                    echo '<li><a href="totalrecords.php?page='.($page - 1).'">Prev</a></li>';
                  }
for($i=1;$i<=$totalpages;$i++)
{
	if($i == $page){
                      $active = "active";
                    }else{
                      $active = "";
                    }
                    echo '<li class="'.$active.'"><a href="totalrecords.php?page='.$i.'">'.$i.'</a></li>';
                  }
                  if($totalpages > $page){
                    echo '<li><a href="totalrecords.php?page='.($page + 1).'">Next</a></li>';
                  }

echo '<ul';
?>
<div id="main-content" >
    <h2>All Records</h2>
    <?php

   $sql1 = "SELECT * FROM student_account ORDER BY username DESC LIMIT {$offset},{$limit}";
          $result1 = mysqli_query($conn, $sql1) or die("Query Failed.");
             if(mysqli_num_rows($result1) > 0)  {?>
				 <table cellpadding="7px">
        <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Father Name</th>
        <th>username</th>
        <th>session</th>
		<th>session type</th>
		<th>Registration No</th>
		<th>Roll No</th>
		<th>Semester</th>
		<th>Date of Birth</th>
		<th>Admission Year</th>
        <th>password</th>
		<th>Action</th>
        </thead>
        <tbody>
          <?php
            while($row = mysqli_fetch_assoc($result1)){
          ?>
            <tr>
                <td><?php echo $row['sid']; ?></td>
                <td><?php echo $row['name']; ?></td>
                <td><?php echo $row['fname']; ?></td>
                <td><?php echo $row['rollno']; ?></td>
                <td><?php echo $row['registration_no']; ?></td>
				<td><?php echo $row['session']; ?></td>
				<td><?php echo $row['session_type']; ?></td>
			    <td><?php echo $row['semester']; ?></td>
				<td><?php echo $row['dateofbirth']; ?></td>
				<td><?php echo $row['admission_year']; ?></td>
				<td><?php echo $row['username']; ?></td>
				<td><?php echo $row['password']; ?></td>
                <td>
                    <a href='edit.php?id=<?php echo $row['sid']; ?>'>Edit</a>
                    <a href='delete-inline.php?id=<?php echo $row['sid']; ?>'>Delete</a>
                </td>
            </tr>
          <?php } ?>
        </tbody>
			 </table>
  <?php }else{
    echo "<h2>No Record Found</h2>";
  }
  mysqli_close($conn);
?>