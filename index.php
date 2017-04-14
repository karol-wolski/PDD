<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		<title>Programowanie Dokumentów Dynamicznych</title>

		<!-- Bootstrap -->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">

		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
		<!-- <script src="js/jquery-3.1.1.min.js"></script> -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="js/jquery.tablesorter.js"></script>
		<script src="js/jquery.tablesorter.widgets.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>
		<!-- <script src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script> -->

		<script src="js/pdd.js"></script>
	</head>
	<body>


<nav class="navbar navbar-default">
	<div class="container-fluid">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">PDD</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
				<li><a href="#" onclick="createTable('1')">Baza danych</a></li>
				<li><a href="#">Cookie</a></li>
				<li><a href="#" onclick="createTable('2')">XML</a></li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li><a href="#">Koszyk</a></li>
			</ul>
		</div><!-- /.navbar-collapse -->
	</div><!-- /.container-fluid -->
</nav>

<div class="container" id="container">
	<div class="row">
		<div class="col-md-8 .col-md-offset-2">
			<!-- <form name="form" action=""> -->
		<form class="form-horizontal" id="form" role="form" method="POST" action="php/sendForm.php" name="form">
			<div class="form-group" id="productNameGroup">
				<label for="productName">Nazwa towaru</label>
				<input onchange="ValidationName()" type="text" class="form-control" id="productName" name="productName" maxlength="10" placeholder="" required>
			</div>

			<div class="form-group" id="productCodeGroup">
				<label for="productCode">Kod towaru</label>
				<input onchange="ValidationCode()" type="text" class="form-control" /*pattern="[a-zA-Z0-9]{2}-[a-zA-Z0-9]{2}" */ id="productCode" name="productCode" placeholder="format: XX-XX" required>
			</div>

			<div class="form-group" id="productNettoPriceGroup">
				<label for="productNettoPrice">Cena netto</label>
				<input onchange="ValidationProductNettoPrice()" type="number" class="form-control" id="productNettoPrice" name="productNettoPrice" placeholder="" required>
			</div>

			<div class="form-group" id="productVatGroup">
				<label for="productVat">Stawka VAT</label>
				<input onchange="ValidationProductVat()" type="number" class="form-control" id="productVat" name="productVat" placeholder="" required>
			</div>

			<div class="form-group">
				<label for="productBruttoPrice">Cena brutto</label>
				<input type="text" class="form-control" id="productBruttoPrice" name="productBruttoPrice" disabled>
			</div>

			<div class="form-group">
				<label for="productCategory">Kategoria towarowa</label>
				<select class="form-control" name="productCategory" id="productCategory">
					<option value="Kategoira 1">Kategoira 1</option>
					<option value="Kategoira 2">Kategoira 2</option>
					<option value="Kategoira 3">Kategoira 3</option>
					<option value="Kategoira 4">Kategoira 4</option>
					<option value="Kategoira 5">Kategoira 5</option>
				</select>
			</div>

			<div class="form-group" id="productOptionGroup">
				<label for="productOption[]">Opcje towaru</label>
				<div class="checkbox">
					<label class="checkbox-inline">
						<input name="productOption[]" type="checkbox" id="inlineCheckbox1" value="Opcja1" onchange="ValidationProductOption()">Opcja 1
					</label>
					<label class="checkbox-inline">
						<input name="productOption[]" type="checkbox" id="inlineCheckbox2" value="Opcja2" onchange="ValidationProductOption()">Opcja 2
					</label>
					<label class="checkbox-inline">
						<input name="productOption[]" type="checkbox" id="inlineCheckbox3" value="Opcja3" onchange="ValidationProductOption()">Opcja 3
					</label>
					<label class="checkbox-inline">
						<input name="productOption[]" type="checkbox" id="inlineCheckbox4" value="Opcja4" onchange="ValidationProductOption()">Opcja 4
					</label>
					<label class="checkbox-inline">
						<input name="productOption[]" type="checkbox" id="inlineCheckbox5" value="Opcja5" onchange="ValidationProductOption()">Opcja 5
					</label>
				</div>
			</div>

			<div class="form-group" id="productRateGroup">
				<label for="inlineRadioOptions">Ocena towaru</label>
				<div class="radio" >
					<label class="radio-inline">
						<input onchange="ValidationProductRate()" type="radio" name="productRateOptions" id="productRate1" value="1"> 1
					</label>
					<label class="radio-inline">
						<input onchange="ValidationProductRate()" type="radio" name="productRateOptions" id="productRate2" value="2"> 2
					</label>
					<label class="radio-inline">
						<input onchange="ValidationProductRate()" type="radio" name="productRateOptions" id="productRate3" value="3"> 3
					</label>
					<label class="radio-inline">
						<input onchange="ValidationProductRate()" type="radio" name="productRateOptions" id="productRate4" value="4"> 4
					</label>
					<label class="radio-inline">
						<input onchange="ValidationProductRate()" type="radio" name="productRateOptions" id="productRate5" value="5"> 5
					</label>
				</div>
			</div>
			
			<button type="submit" class="btn btn-default" id="send">Dodaj</button>
		</form>
		</div>		
	</div>
</div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#koszyk">
  Dodaj do koszyka
</button>
<span id="result"></span>
<div class="chat">
<button type="button" class="glyphicon-style" data-toggle="modal" data-target="#chat">
	<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
</button>
</div>

<!-- KOSZYK -->

<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="koszyk" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
	<div class="modal-content">
	  <div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		<h4 class="modal-title" id="myModalLabel">Koszyk</h4>
	  </div>
	  <div class="modal-body">
		<table cellspacing="1" class="table table-hover" id="basketTable">
			<thead>
				<tr>
					<th>Nazwa</th>
					<th>Cena brutto</th>
					<th>Liczba sztuk</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>aaa</td>
					<td>12</td>
					<td><input type="number" class="form-control" id="itemsNumber" name="itemsNumber" min="1" placeholder="Podaj liczbę sztuk" value="1"></td>
				</tr>
			</tbody>
		</table>
		Sposób dostawy: 
		<select class="form-control">
		  <option>Kurier - 25 zl</option>
		  <option selected="selected">Poczta - 15 zl</option>
		  <option>Odbiór osobisty - 0 zl</option>
		</select>
		Do zapaty: 
		<input type="text" class="form-control" id="itemsPrice" name="itemsPrice" disabled>
	  </div>
	  <div class="modal-footer">
		<button type="button" class="btn btn-default" data-dismiss="modal">Zamknij</button>
		<button type="button" id="buyItems" class="btn btn-primary">Kup</button>
	  </div>
	</div>
  </div>
</div>

<!-- CHAT -->

<div class="modal fade" id="chat" tabindex="-1" role="dialog" aria-labelledby="chatLabel">
  <div class="modal-dialog" role="document">
	<div class="modal-content">
	  <div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		<h4 class="modal-title" id="chatLabel">Chat</h4>
	  </div>
	  <div class="modal-body modal-position">
		<div class="col-md-12">
			<div class="col-md-6">
				<div id="dealer">
					<h5>Sprzedawca</h5>
				</div>
				
				<textarea class="chatMessage" name="dealerMessage" id="dealerMessage" rows="5" placeholder="Sprzedawca"></textarea>
				<button id="sendChatDealer" class="btn btn-primary pull-right">Wyślij</button>
			</div>
			<div class="col-md-6">
				<div id="marchant">
					<h5>Kupiec</h5>
				</div>
				
				<textarea class="chatMessage" name="merchantMessage" id="merchantMessage" rows="5" placeholder="Kupiec"></textarea>
				<button  id="sendChatMerchant" class="btn btn-primary pull-right">Wyślij</button>
			</div>
		</div>
	  </div>
	  <div class="modal-footer">
		<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	  </div>
	</div>
  </div>
</div>
<footer>
	<div class="col-md-12">
		<div class="row">
			<p class="author-footer">Karol Wolski</p>
		</div>
	</div>
</footer>

		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		

	<script>
		// Zamykanie koszyka i komunikat o dokonaniu zakupu
		$(document).on('click', '#buyItems', function()
		{
			$('#koszyk').modal('hide');
			alert("Dokonano zakupu.");
		});

		// DOPRACOWAĆ WYSYŁANIE KOMENTARZY
		$(document).on('click', '#sendComment', function()
		{ 
			var id_product=document.getElementById("ID_product").value;
			var name = document.getElementById("authorComment").value;
			var comment = document.getElementById("textComment").value;
			$.post("php/sendComment.php", {
					id: id_product,
					name: name,
					comment: comment
				}, function(data){
					var content = '<div class="col-md-12">';
					content += '<p>Autor: ' + name + '</p>';
					content += '<p>Komentarz: ' + comment + '</p>';
					content += '</div>';
					var con = document.getElementById("formCommentGroup");

					var div = document.createElement("div");
					div.innerHTML = content;
					con.append(div);
				});
		});
	
	</script>
	</body>
</html>
</html>