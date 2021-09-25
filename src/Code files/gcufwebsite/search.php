
    <div id="main-content" class="col-md-4">
                  
                  <?php
                  $conn=mysqli_connect("localhost","root","","gcufwebsite") or die("connection error:". mysqli_connect_error());
                  if(isset($_GET['search_term'])){
                    $search = mysqli_real_escape_string($conn, $_GET['search_term']);
                  ?>
                  <h2 class="page-heading">Search : <?php echo $search; ?></h2>
                  <?php

                    /* Calculate Offset Code */
                    $limit = 3;
                    

                     $sql = "SELECT id,role,name,image FROM staffdetails 
					 WHERE name LIKE '%{$search}%' OR description LIKE '%{$search}%'
					 ORDER BY name DESC LIMIT {$limit}
					 ";

                    $result = mysqli_query($conn, $sql) or die("Query Failed.");
                    if(mysqli_num_rows($result) > 0){
                      while($row = mysqli_fetch_assoc($result)) {
                  ?>
                    
                           <div class="searchterm">
                        <div class="post-content">
                <h5><a href="view content.php?id=<?php echo $row['id']; ?>"><?php echo $row['role']; ?></a></h5>
                <span>
                    <i class="fa fa-tags" aria-hidden="true"></i>
                    <a href='view content.php?cid=<?php echo $row['id']; ?>'><?php echo $row['name']; ?></a>
                </span><br>
				<a class="post-img" href=".php?id=<?php echo $row['id']; ?>">
                <img src="images/<?php echo $row['image']; ?>" alt="" style="height:100;width:100;margin-left:40px;"/>
            </a>

                <a class="read-more" href="view content.php?id=<?php echo $row['post_id']; ?>">read more</a>
            </div>
        </div>                              
                    <?php
                      }
                    }else{
                      echo "<h2>No Record Found.</h2>";
                    }
					?>
					</div>