var shopping = (function() {
	var responseParsed;
	var total = 0;
	var cart = document.getElementById("cart");
	var currencyBG = " leva";

	function loadDoc() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				responseParsed = JSON.parse(this.responseText);
				manageData(responseParsed);
			}
		};
		xhttp.open("GET", "products.json", true);
		xhttp.send();
	}
	loadDoc();

	function manageData(responseParsed) {

		for (var i = 0; i < responseParsed.length; i++) {
			
			var divL = document.createElement("DIV");
			var nameP = document.createElement("P");
			var priceP = document.createElement("P");
			var buttonP = document.createElement("BUTTON");
			divL.style.cssText = "align:center; border:1px solid #ccc;"
					+ " margin-top:20px; margin-bottom:20px;" + "width: 130px;"
					+ "display: inline-block";

			
			nameP.innerHTML = responseParsed[i].name;
			priceP.innerHTML = "Price: " + responseParsed[i].price + currencyBG;
			buttonP.innerHTML = "Buy";

			
			
			buttonP.addEventListener('click', (function(i) {
				return function() {

					total += responseParsed[i].price;

					nameP.setAttribute("id", "nameProduct" + i);
					priceP.setAttribute("id", "priceProduct" + i);
					buttonP.setAttribute("id", "btn" + i);


					cart.innerHTML += " Bought " + responseParsed[i].name
							+ " for " + responseParsed[i].price + currencyBG
							+ "; ";

					var totalDiv = document.getElementById("totalDiv");
					totalDiv.innerHTML = total + currencyBG;

				};
			})(i));

			document.body.appendChild(divL);
			divL.appendChild(nameP);
			divL.appendChild(priceP);
			divL.appendChild(buttonP);

		}//end of for loop

	}//end of manage data function
	

	return {
		load : loadDoc,
	}
})();


shopping.load();



