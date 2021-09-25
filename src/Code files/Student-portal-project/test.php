       

<html>
<head>
<style>
.post-container{
	background-color:white;
	height:100%;
	width:1000px;
	margin-left:20px;
}

</style>
</head>


<body>
	   <div class="post-container">
                      <?php
                        $conn=mysqli_connect("localhost","root","","gcufwebsite") or die("connection error:". mysqli_connect_error());
                        $sql = "SELECT role,name,image,discription FROM staffdetails ORDER BY name";

                        $result = mysqli_query($conn, $sql) or die("Query Failed.");
                        if(mysqli_num_rows($result) > 0){
                          while($row = mysqli_fetch_assoc($result)) {
                      ?>
                        <div class="post-content">
                            <h3><?php echo $row['role']; ?></h3>
							<h5><?php echo $row['name']; ?></h5>
                            <img src="images/<?php echo $row['image']; ?>" alt=""/>
                            <p class="description">
                                <?php 
								
								echo substr($row['discription'],0,100)."....";
								?>
								<a class='read-more pull-right' href='viewcontent.php?id=<?php echo $row['id'];?>read more</a>
                            </p>
							
                        </div>
                        <?php
                          }
                        }else{
                          echo "<h2>No Record Found.</h2>";
                        }

                        ?>
                    <!-- /post-container -->
                </div></body>
           </html>