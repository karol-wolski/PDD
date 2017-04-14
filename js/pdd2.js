// funkcja dodaje .00 
function addZeros() 
{
	var nettoPrice = document.getElementById("productNettoPrice");
	nettoPrice.value = parseFloat(nettoPrice.value).toFixed(2);
}

// funkcja oblicza kwotę brutto
function bruttoPrice() 
{
var productNettoPrice = parseFloat(document.getElementById("productNettoPrice").value);
var productVat = parseFloat(document.getElementById("productVat").value);
var bruttoPrice = document.getElementById("productBruttoPrice").value;
	if (productNettoPrice != "" && productVat != "") 
	{
		bruttoPrice = 0;
		bruttoPrice += (productNettoPrice + (productNettoPrice * productVat * 0.01));
	} 
	document.getElementById("productBruttoPrice").value = bruttoPrice.toFixed(2);
}

// Funkcja pomocnicza do bledów
function errorFunction(getInput, getContent)
{
	var input = getInput;
	var content = getContent;
	var paragraph = document.createElement("div");
	paragraph.setAttribute("class", "alert alert-danger");
	paragraph.setAttribute("id", "error");
	error = document.getElementById("error");
	if (input.lastChild == error) 
	{
		input.removeChild(error)
	}
	paragraph.appendChild(content);
	input.appendChild(paragraph);
}

function successFunction(getInput)
{
	var input = getInput;
	error = document.getElementById("error");
	input.setAttribute("class", "form-group has-success");
	if (input.lastChild == error) 
	{
		input.removeChild(error)
	}
}

// Walidacja nazwy
function ValidationName()
{
	var productName = document.getElementById("productName").value;
	// var a = 0;
	var $rows = $('#table2 tbody tr'); //pobranie wierszy z tabeli
	b = $('#productName').keyup(function() { 
		var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
			reg = RegExp(val, 'i'),
			text; // uzycie wyrazenia regularnego do sprawdzenia elementu

			a = $rows.filter(function() {
			text = $(this).text().replace(/\s+/g, ' ');
			if( !reg.test(text))
			{
				return true;
			}
			else
			{
				return false;
			}
		});
		return a;
	});

	// sprawdzanie czy nazwa jest pusta
	if( productName == "")
	{
		var input = document.getElementById("productNameGroup");
		var content = document.createTextNode("To pole nie może zostać puste.");
		errorFunction(input, content);
		return false;
	}
	// sprawdzenie czy nazwa ma więcej niż 10 znaków
	else if( productName.length > 10)
	{
		var input = document.getElementById("productNameGroup");
		var content = document.createTextNode("Nazwa nie może mieć więcej niż 10 znaków.");
		errorFunction(input, content);
		return false;
	}
	// sprawdzenie czy nazwa zawiera inne znaki niż litery
	else if(productName.search(/[^a-zA-Z]+/) !== -1)
	{
		var input = document.getElementById("productNameGroup");
		var content = document.createTextNode("Nazwa powinna zawierać tylko litery.");
		errorFunction(input, content);
		return false;
	}
	// sprawdzenie czy produkt już istnieje
	else if (b == true)
	{
		var input = document.getElementById("productNameGroup");
		var content = document.createTextNode("Produkt o takiej nazwie już istnieje.");
		errorFunction(input, content);

		return false;
	}
	else 
	{
		var input = document.getElementById("productNameGroup");
		error = document.getElementById("error");
		if (input.lastChild == error) 
		{
			input.removeChild(error);
		}
		return true;
	}
}

function ValidationCode()
{
	var productCode = document.getElementById("productCode").value;
	// Walidacja Kodu towaru
	// sprawdzenie czy kod towaru jest pusty
	if( productCode == "")
	{
		var input = document.getElementById("productCodeGroup");
		var content = document.createTextNode("To pole nie może zostać puste.");
		errorFunction(input, content);
		return false;
	}
	// sprawdzenie czy kod ma inny format niż xx-xx 
	// else if( (/(\d{2}-\d{2}$)/.test(productCode)))
	else if( productCode.search(/(\d{2}-\d{2}$)/) === -1)	
	{
		var input = document.getElementById("productCodeGroup");
		var content = document.createTextNode("Kod towru nie może mieć innego formatu niż xx-xx.");
		errorFunction(input, content);
		return false;
	}
	// else if( productCode.search(/(\d{2}[^a-zA-Z0-9]-\d{2}[^a-zA-Z0-9]$)/) !== -1)
	// {
	// 	var input = document.getElementById("productCodeGroup");
	// 	var content = document.createTextNode("Kod towru nie może mieć innych znaków niż A-Z, a-z, 0-9.");
	// 	errorFunction(input, content);
	// return false;
	// }
	else 
	{
		var input = document.getElementById("productCodeGroup");
		error = document.getElementById("error");
		if (input.lastChild == error) 
		{
			input.removeChild(error);
		}
		return true;
	}

}

// Walidacja ceny netto
function ValidationProductNettoPrice()
{
	var productNettoPrice = document.getElementById("productNettoPrice").value;
	// sprawdzenie czy pole z ceną jest puste
	if (productNettoPrice == "")
	{
		var input = document.getElementById("productNettoPriceGroup");
		var content = document.createTextNode("To pole nie może zostać puste.");
		errorFunction(input, content);
		return false;
	}
	// sprawdzenie czy znajdują się tylko cyfry
	else if(productNettoPrice.search(/[^0-9.,]+/) !== -1)
	{
		var input = document.getElementById("productNettoPriceGroup");
		var content = document.createTextNode("Cena powinna zawierać tylko cyfry.");
		errorFunction(input, content);
		return false;
	}
	else 
	{
		var input = document.getElementById("productNettoPriceGroup");
		error = document.getElementById("error");
		if (input.lastChild == error) 
		{
			input.removeChild(error);
		}
		return true;
	}
}

// Walidacja stawki VAT
function ValidationProductVat()
{
	var productVat = document.getElementById("productVat").value;
	// sprawdzenie czy pole VAT jest puste
	if (productVat == "") 
	{
		var input = document.getElementById("productVatGroup");
		var content = document.createTextNode("To pole nie może zostać puste.");
		errorFunction(input, content);
		return false;
	}
	else if (productVat.search(/[^0-9]+/) !== -1)
	{
		var input = document.getElementById("productVatGroup");
		var content = document.createTextNode("Pole to powinno zawierać tylko cyfry.");
		errorFunction(input, content);
		return false;
	}
	else 
	{
		var input = document.getElementById("productVatGroup");
		error = document.getElementById("error");
		if (input.lastChild == error) 
		{
			input.removeChild(error);
		}
		bruttoPrice();
		return true;
	}
}

// Walidacja oceny towaru
function ValidationProductRate()
{
	var rate1 = document.getElementById("productRate1").checked;
	var rate2 = document.getElementById("productRate2").checked;
	var rate3 = document.getElementById("productRate3").checked;
	var rate4 = document.getElementById("productRate4").checked;
	var rate5 = document.getElementById("productRate5").checked;
	var counter = 0;
	if (!rate1 == "" || !rate2 == "" || !rate3 == "" || !rate4 == ""|| !rate5 == "")
	{
		counter++;
	} 
	if (counter < 1)
	{
		var input = document.getElementById("productRateGroup");
		var content = document.createTextNode("Wybierz ocenę towaru.");
		errorFunction(input, content);
		return false;
	}
	else 
	{
		var input = document.getElementById("productRateGroup");
		error = document.getElementById("error");
		if (input.lastChild == error) 
		{
			input.removeChild(error);
		}
		return true;
	}
}

// Walidacja opcji towaru
function ValidationProductOption()
{
	var checkBox = document.getElementsByTagName("productOption[]");
	var counter = 0;

	for (var i = 0; i< 5; i++)
	{
		if(document.forms["form"]["productOption[]"][i].checked)
		{
			counter++;
		}
	}

	if ( counter < 2)
	{
		var input = document.getElementById("productOptionGroup");
		var content = document.createTextNode("Zaznacz minimum 2 opcje");
		errorFunction(input, content);
		return false;
	}
	else 
	{
		var input = document.getElementById("productOptionGroup");
		error = document.getElementById("error");
		if (input.lastChild == error) 
		{
			input.removeChild(error);
		}
		return true;
	}
}

function formValidation(form)
{
	var a = 123, b = 654;
	if (ValidationName() && ValidationCode() && ValidationProductNettoPrice() 
		&& ValidationProductVat() && ValidationProductOption() && ValidationProductRate()) 
	{
		var input = document.getElementById("form");
		var content = document.createTextNode("Dane poprawne.");;
		var paragraph = document.createElement("div");
		paragraph.setAttribute("class", "alert alert-success");
		paragraph.setAttribute("id", "success");
		success = document.getElementById("success");
		paragraph.appendChild(content);
		input.appendChild(paragraph);

		
		setInterval(function(){$("#success").remove();}, 5000);
		return true;
	}
	else
	{
		return b;	
		alert(" nie dziala");
	}
}

function dynamicTable()
{
	var content = '<div class="row">';
	
	content += '<div class="col-md-12 sortButton">';
	content += '<h2 style="text-align:center">Sortuj tabelę</h2>';
	content += '<div class="col-md-4">';
	content += '<button type="button" id="nameAZ" data-sort="[[1,0]]" class="btn btn-default">Nazwa A - Z</button>';
	content += '<button type="button" id="nameZA" data-sort="[[1,1]]" class="btn btn-default">Nazwa Z - A</button>';
	content += '</div>';
	content += '<div class="col-md-4">';
	content += '<button type="button" id="priceAZ" class="btn btn-default">cena od najniższej</button>';
	content += '<button type="button" id="priceZA" class="btn btn-default">cena od najwyższej</button>';
	content += '</div>';
	content += '<div class="col-md-4">';
	content += '<button type="button" id="markAZ" class="btn btn-default">Ocena od najniższej</button>';
	content += '<button type="button" id="markZA" class="btn btn-default">Ocena od najwyższej</button>';
	content += '</div>';
	content += '</div>';

	content += '<div class="col-md-12 sortButton">';
	content += '<h2 style="text-align:center">Wybierz widok produktów</h2>';
	content += '<div class="col-md-6">';
	content += '<button type="button" id="showTable" onclick="showTable()" class="btn btn-default">Lista</button>';
	content += '</div>';
	content += '<div class="col-md-6">';
	content += '<button type="button" id="showGallery" onclick="showGallery()" class="btn btn-default">Galeria</button>';
	content += '</div>';
	content += '</div>';
	
	content += '<div class="col-md-12">';
	content += '<div class="table-responsive">';
	content += '<table cellspacing="1" class="table table-hover" id="table2">';
	content += '<thead>';
	content += '<tr>';
	content += '<th>Opcje</th>';
	content += '<th>Nazwa</th>';
	content += '<th>Kod</th>';
	content += '<th>Cena netto</th>';
	content += '<th>Vat</th>';
	content += '<th>Cena brutto</th>';
	content += '<th>Kategoria</th>';
	content += '<th>Opcja</th>';
	content += '<th>Ocena</th>';
	content += '</tr>';
	content += '</thead>';
	

	$.getJSON("php/mysqlToJSON.php", function(data){
		
		var items = [];

		$.each(data, function(key, val){
			items.push('<tr role="row">');
			items.push('<td><input type="checkbox"></br>');
			items.push('<button type="button" class="btn btn-warning btn-table">Edytuj</button>');
			items.push('<button type="button" class="btn btn-danger btn-table">Usuń</button>');
			items.push('<button type="button" class="btn btn-info btn-table" data-toggle="modal" data-target="#myModal'+val.id+'" onclick="productDetails('+val.id+')">Szczególy</button></td>');
			items.push("<td>" + val.nazwa + "</td>");
			items.push("<td>" + val.kod + "</td>");
			items.push("<td>" + parseFloat(val.netto).toFixed(2) + "</td>");
			items.push("<td>" + val.vat + "</td>");
			items.push("<td>" + val.brutto + "</td>");
			items.push("<td>" + val.kategoria + "</td>");
			items.push("<td>" + val.opcja + "</td>");
			items.push("<td>" + val.ocena + "</td>");

			items.push("</tr>");
			// productDetails();
		});
		$("<tbody/>", {html: items.join("")}).appendTo("#table2");
	});

	content += '</table>';
	content += '</div>';
	content += '</div>';
	content += '</div>';
	var con = document.getElementById("container");
	var div = document.createElement("div");
	div.setAttribute("class", "col-md-12");
	div.setAttribute("id", "table");
	div.innerHTML = content;
	con.append(div);
}