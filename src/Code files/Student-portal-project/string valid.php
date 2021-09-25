<?php
$name="wwwgoogle & com";
	//var_dump (filter_var($name,FILTER_VALIDATE_URL));
	echo filter_var($name,FILTER_SANITIZE_STRING,FILTER_FLAG_ENCODE_AMP);
	echo filter_var($name,FILTER_SANITIZE_STRING,FILTER_FLAG_STRIP_HIGH)
	
	
	
	
	$name="wwwgoogle &%#%#%^ com";
	//var_dump (filter_var($name,FILTER_VALIDATE_URL));
	//echo filter_var($name,FILTER_SANITIZE_STRING,FILTER_FLAG_ENCODE_AMP);
	echo filter_var($name,FILTER_SANITIZE_ENCODED);
	echo filter_var($name,FILTER_SANITIZE_ENCODED,FILTER_FLAG_STRIP_HIGH);
	echo filter_var($name,FILTER_SANITIZE_SPECIAL_CHARS);

	
	




?>