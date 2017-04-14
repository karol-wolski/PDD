<?php 
	// Dolączenie pliku connect.php
	include_once 'connect.php';

	if(isset($_POST['id']))
	{
		// Przypisanie do zmiennych danych przesłanych z formularza
		$id = $_POST['id'];

		$sql = "DELETE FROM js WHERE id = '$id'";
			
		// $result = @$connect->query($sql);
		if(mysqli_query($connect, $sql))  
		 {  
		      echo 'Data Deleted';  
		 }  
	}
	$connect->close();
 ?>