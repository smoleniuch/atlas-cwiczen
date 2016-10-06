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
	
	mainHeader.innerHTML = newHeader;
	
	
}

button[0].addEventListener("click",changeHeaderValue);
if(newHeader != undefined){
	
	mainHeader.innerHTML = newHeader;
	
}
console.log(button.addEventListener == true);