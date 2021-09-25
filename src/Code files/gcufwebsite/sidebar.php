<div id="sidebar" class="col-md-4" >
    <!-- search box -->
    <div class="search-box-container">
        <h4>Search</h4>
        <form class="search-post" action="search.php" method ="GET">
            <div class="input-group">
                <input type="text" name="search" class="form-control" placeholder="Search .....">
                <span class="input-group-btn">
                    <button type="submit" class="btn btn-danger">Search</button>
                </span>
            </div>
        </form>
    </div>
    <!-- /search box -->
    <!-- recent posts box -->
    <div class="recent-post-container" style="border:1px solid black;width:300px;height:650px;background-color:lightgray;float:right;">
	
        <h4 style="color:red;">Recent Posts</h4>
		<hr>
        <?php
        $conn=mysqli_connect("localhost","root","","gcufwebsite") or die("connection error:". mysqli_connect_error());

        /* Calculate Offset Code */
        $limit = 3;

        $sql = $sql = "SELECT id,role,name,image FROM staffdetails ORDER BY name DESC LIMIT {$limit}";
        

        $result = mysqli_query($conn, $sql) or die("Query Failed. : Recent Post");
        if(mysqli_num_rows($result) > 0){
          while($row = mysqli_fetch_assoc($result)) {
      ?>
        <div class="recent-post">
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
    }
    ?>
    </div>
    <!-- /recent posts box -->
</div>
