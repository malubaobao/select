<?php
	header("Content-Type:application/json");
	$conn=mysqli_connect("127.0.0.1","root","","boring","3306");
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	@$pageNo=$_REQUEST["pageNo"];
	if($pageNo==null) $pageNo=1;
	@$pageSize=$_REQUEST["pageSize"];
	if($pageSize==null) $pageSize=4;
	$sql="SELECT uid,uname,uintroduce,uimg FROM borings";
	$result=mysqli_query($conn,$sql);
	$count=count(mysqli_fetch_all($result,1));
	$sql.=" limit ".($pageNo-1)*$pageSize.",$pageSize ";
	$result=mysqli_query($conn,$sql);
	$data=mysqli_fetch_all($result,1);
	$pageCount=ceil(($count/$pageSize));
	$output=[
	"pageNo"=>$pageNo,
	"pageSize"=>$pageSize,
	"count"=>$count,
	"pageCount"=>$pageCount,
	"data"=>$data
	];
	echo json_encode($output);
?>