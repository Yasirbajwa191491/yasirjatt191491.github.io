<?php



?>

<html>
<head>
<style>
*{
	box-sizing:border-box;
}
html, body{
	overflow-x:hidden;
   height:100%;
}
body{
	margin:0;
	padding:0;
}
.headermenu{
	background-color:blue;
	width:100%;
	height:60px;
	position:fixed;
	z-index:10;
}
.mainm{
	height:100%;
	margin-top:60px;
	padding:10px 50px;
}
.menuicon{
	width:22px;
	height:22px;
	position:absolute;
	z-index:20;
	top:22px;
	right:35px;
	cursor:pointer;
}
.spinner{
	height:3px;
	background-color:white;
	transition:all 0.3s;
}

.spinner.middle,
.spinner.bottom{
margin-top:3px;
}
#sidebarmenu{
	position:fixed;
	background-color:lightblue;
	height:500px;
	width:250px;
	border:1px solid;
	right:0;
	top:0;
	margin-top:60px;
	transform: translateY(-500px);
	transition:transform 250ms ease-in-out;
}

#openmenu:checked ~ #sidebarmenu{
	transform:translateY(0px);
}
#sidebarmenu li{
	padding-left:10px;
	border-bottom:1px solid lightgray;
}

#sidebarmenu li a{
display:block;
color:white;
text-decoration:none;
}
#sidebarmenu li a:hover{
	color:blue;
	background-color:orange;
}
.menu{
	list-style:none;
	margin:0;
	padding:0;
}
#openmenu:checked ~ .menuicon > .spinner.middle{
	opacity:0;
}
#openmenu:checked ~ .menuicon > .spinner.top{
	transform: rotate(135deg);
	margin-top:8px;
}
#openmenu:checked ~ .menuicon > .spinner.bottom{
	transform: rotate(-135deg);
	margin-top:-9px;
}


</style>
</head>

<body>
<div class="headermenu"></div>
<input type="checkbox" id="openmenu">
<label for="openmenu" class="menuicon">

<div class="spinner top"></div>
<div class="spinner middle"></div>
<div class="spinner bottom"></div>


</label>
<div id="sidebarmenu">
<ul class="menu">
<li><a href="#" >ABOUT </a> </li> <br>
<li><a href="#" >OFFICES </a> </li><br>
<li><a href="#" >DIRECTORATES </a> </li><br>
<li><a href="#" >FACULTIES </a> </li><br>
<li><a href="#" >RULES </a> </li><br>
<li><a href="#" >EXAMINATIONS </a> </li><br>
<li><a href="#" >ADMISSION </a> </li><br>
<li><a href="#" >SCHOLARSHIPS </a></li> <br>
<li><a href="#" >ORIC </a></li><br>
<li><a href="#" >BIC </a></li><br>
<li><a href="#" >QEC </a></li><br>
<li><a href="#" >CCAA </a></li><br>
</ul>




</div>
</body>

</html>