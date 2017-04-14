<?php 
	// Dolączenie pliku connect.php
	include_once 'connect.php';
	// Przypisanie do zmiennych danych przesłanych z formularza

	if(isset($_POST['id']))
	{
		$id_product = $_POST['id'];
		$name = $_POST['name'];
		$comment = $_POST['comment'];

		$sql = "INSERT INTO comments (id_product, name, comment) 
		VALUES ('$id_product', '$name', '$comment')";
			
		// $result = @$connect->query($sql);
		if(mysqli_query($connect, $sql))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	$connect->close();
 ?>