<?php
	header('content-type:text/html;charset=utf-8');
	$url="https://raw.githubusercontent.com/xiaofeide/gitcon/master/data/homeData.json";
	$sql=file_get_contents($url);//把整个文件读取到字符串中
	// echo json_encode($sql);
	echo $sql;

?>