var logo = document.getElementById("logo");

logo.addEventListener("mouseenter",changeLogo,false);
logo.addEventListener("mouseout",changeLogo,false);


function changeLogo(){
	var currentSource = logo.getAttribute("src");
	if(currentSource == "images/atlas.jpg"){
		
		logo.setAttribute("src","images/oko.jpg");
		
	}
	else{
		
		logo.setAttribute("src","images/atlas.jpg");
		
	}
	
	
	
}



var button = document.getElementsByTagName("button");
var mainHeader = document.getElementById("main-header");
function changeHeaderValue(){
	
	var newHeader = prompt("Please,type new name","Atlas");
	localStorage.setItem("headerValue",newHeader);
	mainHeader.innerHTML = localStorage.getItem("headerValue");
	
	
}

button[0].addEventListener("click",changeHeaderValue);
if(localStorage.getItem("headerValue") != null){
	
	mainHeader.innerHTML = newHeader;
	
}
console.log(button.addEventListener == true);