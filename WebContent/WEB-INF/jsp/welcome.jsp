<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Video Altering</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<style>
	.brightness{
		-web-kit-filter: brightness(2);
		filter: brightness(1.5);
	}
	.mirror{
		-web-kit-transform: rotateY(180deg);
		transform: rotateY(180deg);
	}
	body{
		background-color: black;
		color: white;
		text-align: center;
	}
</style>
</head>
<body>
<% java.util.Date d = new java.util.Date(); %>
<h2>Today's date is <%= d.toString() %></h2>

<br>
<div id='container'>
	<video autoplay></video> 
	<script src ="client.js">
	</script> 
	<br>
	
	<button id='mirror'>Mirror</button>
	<button id='brightness'>Brighter</button>
</div>

</body>
</html>