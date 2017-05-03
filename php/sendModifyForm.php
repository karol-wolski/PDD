<?php 
	// Dolączenie pliku connect.php
	include_once 'connect.php';

	if(isset($_POST['productID']))
	{
		// Przypisanie do zmiennych danych przesłanych z formularza
		$id = $_POST['productID'];
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
		// $zdjecie = "";

		$sql = "UPDATE js SET nazwa = '$name', kod = '$code', netto = '$netto', vat = '$vat', brutto = '$brutto', kategoria = '$kategoria', opcja = '$opcja', ocena = '$ocena' WHERE id = '$id'";
			
		$result = @$connect->query($sql);
	}
	$connect->close();
 ?>