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

// Funkcja pomocnicza do suksesu
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

	// sprawdzenie czy produkt już istnieje
	$.getJSON("php/mysqlToJSON.php", function(data)
	{
		var items = [];

		$.each(data, function(key, val)
		{
			if (productName === val.nazwa) 
			{
				var input = document.getElementById("productNameGroup");
				var content = document.createTextNode("Produkt o takiej nazwie już istnieje.");
				errorFunction(input, content);
			}
		});
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

// Walidacja kodu 
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

// Walidacja formularza 
function formValidation(form)
{
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
}

// Tworzenie tabeli 
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
	
	// content += '<button type="button" id="" onclick="" class="btn btn-default">Dodaj do koszyka</button>';

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
	content += '<th>Zdjęcie</th>';
	content += '</tr>';
	content += '</thead>';
	

	$.getJSON("php/mysqlToJSON.php", function(data){
		
		var items = [];

		$.each(data, function(key, val){
			items.push('<tr role="row">');
			items.push('<td><input type="checkbox"></br>');
			items.push('<button type="button" class="btn btn-warning btn-table">Edytuj</button>');
			items.push('<button type="button" id="deleteProduct" data-idp="'+ val.id +'" class="btn btn-danger btn-table">Usuń</button>');
			items.push('<button type="button" class="btn btn-info btn-table" data-toggle="modal" data-target="#myModal'+val.id+'" onclick="productDetails('+val.id+')">Szczególy</button></td>');
			items.push("<td>" + val.nazwa + "</td>");
			items.push("<td>" + val.kod + "</td>");
			items.push("<td>" + parseFloat(val.netto).toFixed(2) + "</td>");
			items.push("<td>" + val.vat + "</td>");
			items.push("<td>" + parseFloat(val.brutto).toFixed(2) + "</td>");
			items.push("<td>" + val.kategoria + "</td>");
			items.push("<td>" + val.opcja + "</td>");
			items.push("<td>" + val.ocena + "</td>");
			if(val.zdjecie != "")
			{
				items.push("<td><img src='" + val.zdjecie + "' height='200' width='200' alt='Produkt'></td>");
			}
			else
			{
				items.push('<td><img src="img/img.png" height="200" width="200" alt="Produkt"></td>');
			}

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

// Usuwanie tabeli
function removeTable()
{
	var con = $("#container");
	con.find("table").remove();
	con.find(".sortButton").remove();
	
}

// Tworzenie galerii
function dynamicGallery()
{
	var content = '<div class="row">';
	
	content += '<div class="col-md-12 sortButton">';
	content += '<h2 style="text-align:center">Wybierz widok produktów</h2>';
	content += '<div class="col-md-6">';
	content += '<button type="button" id="showTable" onclick="showTable()" class="btn btn-default">Lista</button>';
	content += '</div>';
	content += '<div class="col-md-6">';
	content += '<button type="button" id="showGallery" onclick="showGallery()" class="btn btn-default">Galeria</button>';
	content += '</div>';
	content += '</div>';

	content += '<div id="gallery" class="col-md-12">';
	
	$.getJSON("php/mysqlToJSON.php", function(data){
		
		var items = [];

		$.each(data, function(key, val){
			items.push('<div class="col-md-3 thumbnail">');
			if(val.zdjecie != "")
				{
					items.push("<td><img src='" + val.zdjecie + "' height='200' width='200' alt='Produkt'></td>");
				}
				else
				{
					items.push('<td><img src="img/img.png" height="300" width="200" alt="Produkt"></td>');
				}
			items.push(val.nazwa);
			items.push('<br>');
			items.push('Cena netto: ' + parseFloat(val.netto).toFixed(2));
			items.push('<br>');
			items.push('Cena brutto: ' + parseFloat(val.brutto).toFixed(2));

			items.push("</div>");

		});
		$('<div />', {'class':'col-md-12', 'html': items.join('')}).appendTo("#gallery");
	});

	content += '</div>';
	content += '</div>';

	var con = document.getElementById("container");
	var div = document.createElement("div");
	div.setAttribute("class", "col-md-12");
	div.setAttribute("id", "gallery");
	div.innerHTML = content;
	con.append(div);
}

// Usuwanie galerii
function removeGallery()
{
	var con = $("#container");
	con.find("#gallery").remove();
	
}

// Wyświetlanie tabeli
function showTable()
{
	removeGallery();
	removeTable();
	dynamicTable();
}

// Wyświetalnie galerii
function showGallery()
{
	removeTable();
	removeGallery();
	dynamicGallery();
}


function createTable(a)
{
	var table = $("table");
	if (table != "") 
	{
		removeTable();
		removeGallery();
	}
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
	
	// content += '<button type="button" id="" onclick="" class="btn btn-default">Dodaj do koszyka</button>';

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
	content += '<th>Zdjęcie</th>';
	content += '</tr>';
	content += '</thead>';

	var ab = a;

	switch (ab) {
			// database
			case "1":
				dbTable();
				break;

			// XML
			case "2":
				xmlTable();
				break;

			default:
				// statements_def
				break;
		}	

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

// pobieranie danych z bazy danych
function dbTable()
{
	$.getJSON("php/mysqlToJSON.php", function(data)
	{
		
		var items = [];

		$.each(data, function(key, val)
		{
			items.push('<tr role="row">');
			items.push('<td><input type="checkbox"></br>');
			items.push('<button type="button" class="btn btn-warning btn-table">Edytuj</button>');
			items.push('<button type="button" id="deleteProduct" data-idp="'+ val.id +'" class="btn btn-danger btn-table">Usuń</button>');
			items.push('<button type="button" class="btn btn-info btn-table" data-toggle="modal" data-target="#myModal'+val.id+'" onclick="productDetails('+val.id+')">Szczególy</button></td>');
			items.push("<td>" + val.nazwa + "</td>");
			items.push("<td>" + val.kod + "</td>");
			items.push("<td>" + parseFloat(val.netto).toFixed(2) + "</td>");
			items.push("<td>" + val.vat + "</td>");
			items.push("<td>" + parseFloat(val.brutto).toFixed(2) + "</td>");
			items.push("<td>" + val.kategoria + "</td>");
			items.push("<td>" + val.opcja + "</td>");
			items.push("<td>" + val.ocena + "</td>");
			if(val.zdjecie != "")
			{
				items.push("<td><img src='" + val.zdjecie + "' height='200' width='200' alt='Produkt'></td>");
			}
			else
			{
				items.push('<td><img src="img/img.png" height="200" width="200" alt="Produkt"></td>');
			}

			items.push("</tr>");
		});
		$("<tbody/>", {html: items.join("")}).appendTo("#table2");
	});
}

// pobieranie danych z XML - DOPRACOWAĆ
function xmlTable()
{
	var list = $('#table2');
	list.append('<tbody>');
   $.ajax({
    type: "GET" ,
    url: "convertjson.xml" ,
    dataType: "xml" ,
    success: function(xml) {

    //var xmlDoc = $.parseXML( xml );   <------------------this line
    //if single item
    // var xmlfile = $(xml).find('row').text();  

    //but if it's multible items then loop
    $(xml).find('row').each(function(index, element){
     var field = $(element)
    // get the values we want
    var id = field.find('id').text()
    var name = field.find('nazwa').text()
    var netto = field.find('netto').text()
    var vat = field.find('vat').text()
    var brutto = field.find('brutto').text()
    var kategoria = field.find('kategoria').text()
    var opcja = field.find('opcja').text()
    var ocena = field.find('ocena').text()
    var kod = field.find('kod').text()
    var zdjecie = field.find('zdjecie').text()
    // and append some html in the <dl> element we stored previously
    list
      .append('<tr>')
      .append('<td><input type="checkbox"></br>')
	  .append('<button type="button" class="btn btn-warning btn-table">Edytuj</button>')
      .append('<button type="button" id="deleteProduct" data-idp="'+ id +'" class="btn btn-danger btn-table">Usuń</button>')
	  .append('<button type="button" class="btn btn-info btn-table" data-toggle="modal" data-target="#myModal'+id+'" onclick="productDetails('+id+')">Szczególy</button></td>')
      .append('<td>'+name+'</td>')
      .append('<td>'+netto+'</td>')
      .append('<td>'+vat+'</td>')
      .append('<td>'+brutto+'</td>')
      .append('<td>'+kategoria+'</td>')
      .append('<td>'+opcja+'</td>')
      .append('<td>'+ocena+'</td>')
      .append('<td>'+kod+'</td>')
      .append('<td>'+zdjecie+'</td>')
      .append('</tr>');
    }); 
    }       
});
   list.append('</tbody>');
}

// Wyświetlanie szczególów produktu
function productDetails(id)
{
	var id = id;

	$.getJSON("php/mysqlToJSON.php", function(data){
		
		var items = [];

		$.each(data, function(key, val){
			if(id == val.id)
			{
				items.push('<div class="modal fade" id="myModal'+id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel'+id+'" style="display: none;">');
  				items.push('<div class="modal-dialog" role="document">');
  				items.push('<div class="modal-content">');
				items.push('<div class="modal-header">');
				items.push('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
				items.push('<h4 class="modal-title" id="myModalLabel'+id+'">'+ val.nazwa +'</h4>');
				items.push('</div>');
				items.push('<div class="modal-body col-md-12">');
				items.push('<div class="col-md-6">');
				if(val.zdjecie != "")
				{
					items.push("<td><img src='" + val.zdjecie + "' height='200' width='200' alt='Produkt'></td>");
				}
				else
				{
					items.push('<td><img src="img/img.png" height="200" width="200" alt="Produkt"></td>');
				}
				items.push('</div>');
				items.push('<div class="col-md-6">');
				items.push('<b>Kod produktu:</b> ' + val.kod + '</br>');
				items.push('<b>Cena netto:</b> ' + parseFloat(val.netto).toFixed(2) + '</br>');
				items.push('<b>Stawka VAT:</b> ' + val.vat + '</br>');
				items.push('<b>Cena brutto:</b> ' + parseFloat(val.brutto).toFixed(2) + '</br>');
				items.push('<b>Kategoria:</b> ' + val.kategoria + '</br>');
				items.push('<b>Opcja:</b> ' + val.opcja + '</br>');
				items.push('<b>Ocena:</b> ' + val.ocena + '</br>');
				items.push('</div>');

				items.push('<div class="col-md-12" id="formCommentGroup">');
				items.push('<div class="form-group" id="authorCommentGroup">');
				items.push('<label for="authorComment">Imię</label>');
				items.push('<input type="text" class="form-control" id="authorComment" name="authorComment" maxlength="10" placeholder="" required>');
				items.push('</div>');
				items.push('<div class="form-group" id="textCommentGroup">');
				items.push('<label for="textComment">Treść:</label>');
				items.push('<textarea id="textComment" name="textComment" class="form-control" rows="3"></textarea>');
				items.push('</div>');
				items.push('<input type="hidden" id="ID_product" name="ID_product" value="'+ val.id +'" /> ');
				items.push('<button type="submit" class="btn btn-default" id="sendComment">Dodaj komentarz</button>');
				items.push('</div>');
				
				$.getJSON("php/commentToJSON.php", function(data)
				{			
					var comments = [];
					var commentproduct = $('.coment-product').value;
					$.each(data, function(key, val)
					{
						if(id == val.id_product)
						{
							if(!commentproduct)
							{
								comments.push("<p>Autor: " + val.name + "</p>");
								comments.push("<p>Komentarz: " + val.comment + "</p>");
							}
							else
							{
								var con = $("#textCommentGroup");
								con.find(commentproduct).remove();
								comments.push("<p>Autor: " + val.name + "</p>");
								comments.push("<p>Komentarz: " + val.comment + "</p>");
							}
						}

					});
					$("<div/>", {'class': 'col-md-12 coment-product', 'html': comments.join("")}).appendTo("#formCommentGroup");
				});

				items.push('</div>');
				items.push('<div class="modal-footer">');
				items.push('<button type="button" class="btn btn-default" data-dismiss="modal">Zamknij</button>');
				items.push('</div>');
				items.push('</div>');
				items.push('</div>');
				items.push('</div>');
			}
		});
		$('<div />', {'html': items.join('')}).appendTo("#container");
	});
}


// Sortowanie tabeli po naglówkach i przyciskach
function tabSort()
{
	$("#table2").tablesorter( {
		 headers: { 
			// assign the secound column (we start counting zero) 
			0: { 
				// disable it by setting the property sorter to false 
				sorter: false 
			}, 
			1: { 
				// disable it by setting the property sorter to false 
				sorter: true 
			}, 
			// assign the third column (we start counting zero) 
			2: { 
				// disable it by setting the property sorter to false 
				sorter: false 
			},
			3: { 
				// disable it by setting the property sorter to false 
				sorter: false 
			},
			4: { 
				// disable it by setting the property sorter to false 
				sorter: false 
			},
			5: { 
				// disable it by setting the property sorter to false 
				sorter: true 
			},
			6: { 
				// disable it by setting the property sorter to false 
				sorter: false 
			},
			7: { 
				// disable it by setting the property sorter to false 
				sorter: false 
			},
			8: { 
				// disable it by setting the property sorter to false 
				sorter: true 
			}
		} 
	} );
	
	// Sortowanie przyciskiem nazwy A - Z
	$("#nameAZ").click(function() { 
		$("#table2").trigger("update"); 
		// set sorting column and direction, this will sort on the first and third column 
		var sorting = [[1,0]]; 
		// sort on the first column 
		$("#table2").trigger("sorton",[sorting]); 
	}); 
	// Sortowanie przyciskiem nazwy Z - A
	$("#nameZA").click(function() { 
		$("#table2").trigger("update"); 
		// set sorting column and direction, this will sort on the first and third column 
		var sorting = [[1,1]]; 
		// sort on the first column 
		$("#table2").trigger("sorton",[sorting]); 
	});
	// Sortowanie przyciskiem ceny brutto A - Z
	$("#priceAZ").click(function() { 
		$("#table2").trigger("update"); 
		// set sorting column and direction, this will sort on the first and third column 
		var sorting = [[5,0]]; 
		// sort on the first column 
		$("#table2").trigger("sorton",[sorting]); 
	}); 
	// Sortowanie przyciskiem ceny brutto Z - A
	$("#priceZA").click(function() { 
		$("#table2").trigger("update"); 
		// set sorting column and direction, this will sort on the first and third column 
		var sorting = [[5,1]]; 
		// sort on the first column 
		$("#table2").trigger("sorton",[sorting]); 
	}); 
	// Sortowanie przyciskiem oceny A - Z
	$("#markAZ").click(function() { 
		$("#table2").trigger("update"); 
		// set sorting column and direction, this will sort on the first and third column 
		var sorting = [[8,0]]; 
		// sort on the first column 
		$("#table2").trigger("sorton",[sorting]); 
	}); 
	// Sortowanie przyciskiem oceny Z - A
	$("#markZA").click(function() { 
		$("#table2").trigger("update"); 
		// set sorting column and direction, this will sort on the first and third column 
		var sorting = [[8,1]]; 
		// sort on the first column 
		$("#table2").trigger("sorton",[sorting]); 
	});         
}

// CHAT
$(document).on('click', '#sendChatDealer', function()
{ 
	var message = $('#dealerMessage').val();
	$('#dealerMessage').val("");
	var dealerFrom = $('#dealer');
	var userForm = $('#marchant');

	if (message != '')
	{
		var content = '<div class="col-md-12 comment commentDealer">'
		content += message;
		content += '</div>';

		dealerFrom.append(content);
		userForm.append(content);
	}
});

$(document).on('click', '#sendChatMerchant', function()
{ 
	var message = $('#merchantMessage').val();
	$('#merchantMessage').val("");
	var dealerFrom = $('#dealer');
	var userForm = $('#marchant');

	if (message != '')
	{
		var content = '<div class="col-md-12 comment">'
		content += message;
		content += '</div>';

		dealerFrom.append(content);
		userForm.append(content);
	}
});

// Usuwanie produktu z bazy danych
$(document).on('click','#deleteProduct', function()
{ 
	var id_product=$(this).data("idp"); 
	$.ajax({  
		 url:"php/deleteProduct.php",  
		 method:"POST",  
		 data:{id:id_product},  
		 dataType:"text",  
		 success:function(data){  
		 }  
	});
		removeTable();
		dynamicTable(); 
});

$(document).ready(function(){
	setInterval("tabSort()", 1000);
	var table = $("table");

	// Wysylanie formularza
	$("#send").click( function() 
	{
		if (formValidation() == true) 
		{
			if(table != "")
			{
				$.post( $("#form").attr("action"), $("#form :input").serializeArray(), function(info){ });
				$("form").trigger('reset');
				removeTable();
				removeGallery();
				dynamicTable();
			}
			else
			{
				$.post( $("#form").attr("action"), $("#form :input").serializeArray(), function(info){ });
				$("form").trigger('reset');
				removeGallery();
				dynamicTable();
			}
		}
	});

	$("#form").submit( function() {
	  return false;
	});

	document.getElementById("productNettoPrice").onchange = function()
	{
		addZeros();
		bruttoPrice();
	}
});