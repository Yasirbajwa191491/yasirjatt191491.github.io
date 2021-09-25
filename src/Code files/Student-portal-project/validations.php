nnnnn<?php
$arr = Array(
"name" => "Ya$&%##sir Sohail",
"age" => "100",
"email" => "yasirsohail912@gmail.com",
"url" => "https://www.google.com"


);	
	
$filters = Array(
"name" => FILTER_SANITIZE_STRING,
"age" => array(
"filter" => FILTER_VALIDATE_INT,
"options" => array(
"min_range" => 1,
"max_range" => 100
)
),
"email" => FILTER_VALIDATE_EMAIL,
"url" => FILTER_VALIDATE_URL,

);	
	echo "<pre>";
	print_r(filter_var_array($arr,$filters));
	echo "</pre>";
	




?>