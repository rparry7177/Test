
function addDate()
	  {
		var Due=document.getElementById("dueDate").value;
		alert ("option is: "+ Due);   
	  }
	  
	  var key = "1";
	  
function plus()
	  {	
	  var str="<table>";
	  var P1="<tr><td>";
	  var P3="<td>";
	  var P4="</td>";
	  var prior = document.getElementById("priority").value;
	  var cat = document.getElementById("cat").value;
	  var item = document.getElementById("item").value;
	  var Due = document.getElementById("dueDate").value;
	  var P2="</td></tr></table>";
	  str += P1 + "<img src='img/sparkle2.gif' width='30px' height='30px' id='point'><input type = 'checkbox' id = 'box'> <img src='img/sparkle2.gif' width='30px' height='30px'>" + P4 + P3 + item + P4 + P3 + Due + P4 + P3 + prior + P4 + P3 + cat + P2;
	  document.getElementById("output2").innerHTML += str;
	  localStorage.setItem(key, str);
	  var temp = parseInt(key);
	  temp++;
	  key = temp.toString();
	  }
	  