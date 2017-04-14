<?php 
	
	// Dolączenie pliku connect.php
	include_once 'connect.php';

	// wybór tabeli
	$sql = "SELECT * FROM comments";

	// zapytanie
	$result = mysqli_query($connect, $sql);

	// tworzenie tablicy
	$json_array = array();

	// wypełnienie tablicy wartościami z bazy
	while($row = mysqli_fetch_assoc($result))
	{
			$json_array[] = $row;
	}
	// wyświetlenie danych
	echo json_encode($json_array);

 ?>