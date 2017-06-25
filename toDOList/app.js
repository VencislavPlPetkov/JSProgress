window.onload = function() {
	function getXmlFromServer() {
		$.ajax({
		  type: "GET",
		  url: "items.xml",
		  datatype: "xml",
		  success: postToPageTwo});
		}
		 
		 
		function postToPageTwo(data) {
		 
		  $(data).find('item').each(function(){
		    var content = $(this).find('content').text();
		    var checked = $(this).find('checked').text();
		 
		    $('<li class="content"></li>').html(content).appendTo('#itemTemplate');
		 
		  });
		}
	
	getXmlFromServer();
	
	var module = (function() {
	
	var counter = 0;
	
	function addItem(){
		document.getElementById("addBtn").addEventListener("click", add);

		function add() {
			var new_task = $('#myInput').val();
			$('#itemTemplate').append('<li>' + new_task + '</li>');

			addCloseButton();
			incrementDueItems();
		}

	}
	
	
	function addCloseButton() {
		var myNodelist = document.getElementsByTagName("LI");
		var i;
		for (i = 0; i < myNodelist.length; i++) {
			var span = document.createElement("SPAN");
			var txt = document.createTextNode("\u00D7");
			span.className = "close";
			span.appendChild(txt);
			myNodelist[i].appendChild(span);
		}
		removeItem();
	}
	
	

	function removeItem() {
		
		var theParent = document.getElementById("itemTemplate");
		for (var i = 0; i < theParent.children.length; i++) {
			var childElement = theParent.children[i];
		
			childElement.addEventListener('click', function(ev) {
				  if (ev.target.tagName === 'LI') {
				    ev.target.classList.toggle('checked');
				    decrementDueItems();
				  } else {
					  var item = this;
					  item.style.display = "none";
					  decrementDueItems();
				  }
				}, false);
		
		}

	}
	
	function incrementDueItems(){
		console.log("increment due items");
		counter++;
		console.log(counter);
		
		$("#counterP").html("Due items: " + counter);
	}
	
	function decrementDueItems(){
		console.log("decrement due items");
		counter--;
		console.log(counter);
		
		$("#counterP").html("Due items: " + counter);
	}
	
	
	
	
	return {
		addItem : addItem,
		removeItem : removeItem
	};
	
	}());//end module

	module.addItem();
	module.removeItem();
}
