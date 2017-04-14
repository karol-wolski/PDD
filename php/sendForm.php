<?php 
	// Dolączenie pliku connect.php
	include_once 'connect.php';

	if(isset($_POST['productName']))
	{
		// Przypisanie do zmiennych danych przesłanych z formularza
		$name = $_POST['productName'];
		$code = $_POST['productCode'];
		$netto = $_POST['productNettoPrice'];
		$vat = $_POST['productVat'];
		$brutto = round(($netto + ($netto * $vat *0.01)),2);
		$kategoria = $_POST['productCategory'];
		$opcja = "";
		foreach ($_POST['productOption'] as $opcjaproduktu) 
		{
    		$opcja .= $opcjaproduktu . ' ';
		}
		$ocena = $_POST['productRateOptions'];
		$zdjecie = "";
		$sql = "INSERT INTO js (nazwa, kod, netto, vat, brutto, kategoria, opcja, ocena, zdjecie) 
		VALUES ('$name', '$code', '$netto', '$vat', '$brutto', '$kategoria', '$opcja', '$ocena', '$zdjecie')";
			
		$result = @$connect->query($sql);
	}
	$connect->close();
 ?>