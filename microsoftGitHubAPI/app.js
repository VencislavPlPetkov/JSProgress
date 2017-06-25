var arr= [];
var ul = document.getElementById("updates");
var ulWatchers = document.getElementById("ulWatchers");
var xobj = new XMLHttpRequest();

xobj.overrideMimeType("application/json");
xobj.open('GET', 'https://api.github.com/users/microsoft/repos?sort=updated', true);

xobj.setRequestHeader('Authorization','token ' + '465309847f8892f218488739c5f47161dbdc7273');

xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
    	
    	
        var json=xobj.responseText;
        var data = JSON.parse(json);
        for(var i=0;i<10;i++){
           let li =  document.createElement("li");
           ul.innerHTML+=`<li>${data[i].name}<br/><span>${data[i].updated_at}</span></li>`
        
        
        arr.push(data[i]);
        
        }
        for(var i=0; i<arr.length; i++){
        	console.log(arr[i].watchers);
        	console.log(arr.length + " length");
        }
        
        function compare(a,b) {
        	  if (a.watchers < b.watchers)
        	    return 1;
        	  if (a.watchers > b.watchers)
        	    return -1;
        	  return 0;
        	}

        arr.sort(compare);
        
        for(var i=0; i<arr.length; i++){
        	console.log(arr[i].watchers + " new");
        	console.log(arr.length + " length");
        }
        
        for(var i=0;i<10;i++){
            let li =  document.createElement("li");
            ulWatchers.innerHTML+=`<li>${arr[i].name}<br/><span>${arr[i].watchers}</span></li>`
         
         }
        
        
    }
}
xobj.send();