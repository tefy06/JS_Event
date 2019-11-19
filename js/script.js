/*
*********************************************************************************
*********************************************************************************
					All necessary variables for the app
*********************************************************************************
*********************************************************************************
*/
var x = document.querySelector("body > footer");
var headerCollapse = document.getElementById("navbarHeader"); 
var buttonCollapse = document.getElementsByClassName("navbar-toggler")[0];
var firstButtonEdit = document.querySelectorAll("div > button.btn.btn-sm.btn-outline-secondary");
var textCard = document.querySelectorAll("div.card-body p.card-text");
var navbarClick = document.querySelector(".navbar");
var linkToDisable = document.querySelector("head > link");
var imageCard = document.querySelectorAll("div.card img.card-img-top");

var rightArrow = document.querySelector("a.btn.btn-secondary.my-2");
var leftArrow = document.querySelector("a.btn.btn-primary.my-2");
let parentCardToMove = document.querySelectorAll("div.row")[1];
let parentCards = document.getElementsByClassName('col-md-4');
var viewButton = document.querySelectorAll("div > button.btn.btn-sm.btn-success");
var bodyElement = document.body;
var logoElement = document.querySelector("a > strong");

var clickCount = 0;


/*
*********************************************************************************
*********************************************************************************
					Fonctionnalité 01
*********************************************************************************
*********************************************************************************
*/
x.addEventListener('click', function(){
	console.log('ok');
	clickCount++;
	console.log(`Clic numéro ${clickCount}`);
})


/*
*********************************************************************************
*********************************************************************************
					Fonctionnalité 02
*********************************************************************************
*********************************************************************************
*/
buttonCollapse.addEventListener('click', function(){
	headerCollapse.classList.toggle('collapse');
});
firstButtonEdit[0].addEventListener('click', function(){
	textCard[0].style.color = "red";
});

/*
*********************************************************************************
*********************************************************************************
					Fonctionnalité 03
*********************************************************************************
*********************************************************************************
*/

firstButtonEdit[1].addEventListener('click', function(){
	if(textCard[1].style.color === "green"){
		textCard[1].style.color = "black";
	} else {
		textCard[1].style.color = "green";
	}
});

/*
*********************************************************************************
*********************************************************************************
					Fonctionnalité 04
*********************************************************************************
*********************************************************************************
*/
navbarClick.addEventListener('dblclick', function(){
	if (linkToDisable.disabled === false) { 
		linkToDisable.disabled = true;
	} else { 
		linkToDisable.disabled = false;
	}
});

/*
*********************************************************************************
*********************************************************************************
					Fonctionnalité 06
*********************************************************************************
*********************************************************************************
*/
for (let i = 0; i < viewButton.length; i++) {
	viewButton[i].addEventListener('mouseover', function(){	
	if (imageCard[i].style.width === "100%") {
		imageCard[i].style.width = "20%";
		textCard[i].style.display = "none";
	} else {
		imageCard[i].style.width = "100%";
		textCard[i].style.display = "block";
	}
});
}


/*
*********************************************************************************
*********************************************************************************
					Fonctionnalité 07
*********************************************************************************
*********************************************************************************
*/
rightArrow.addEventListener('click', function(e){
	let firstCardToMove = parentCards[0];
	let lastCardToMove = parentCards[parentCards.length-1];
	e.preventDefault();
	parentCardToMove.insertBefore(lastCardToMove, firstCardToMove);
});

/*
*********************************************************************************
*********************************************************************************
					Fonctionnalité 08
*********************************************************************************
*********************************************************************************
*/
leftArrow.addEventListener('click', function(e){
	let firstCardToMove = parentCards[0];
	let secondCard = parentCards[parentCards.length-1].nextSibling;
	e.preventDefault();
	parentCardToMove.insertBefore(firstCardToMove, secondCard);
});

/*
*********************************************************************************
*********************************************************************************
					Fonctionnalité 09
*********************************************************************************
*********************************************************************************
*/
logoElement.addEventListener("click", function(e){
	e.preventDefault();
	bodyElement.addEventListener("keypress", function(e) {
	   switch(e.key)
			{
			    case "a":
			        bodyElement.removeAttribute("class");
			        bodyElement.classList.add("col-md-4");
			        break;

			    case "y":
			        bodyElement.removeAttribute("class");
			        bodyElement.classList.add("offset-md-4");
			        bodyElement.classList.add("col-md-4");
			        break;

			    case "p":
			        bodyElement.removeAttribute("class");
			        bodyElement.classList.add("offset-md-8");
			        bodyElement.classList.add("col-md-4");
			        break;

			    case "b":
			        bodyElement.removeAttribute("class");
			        break;

			    default:
			        break;
			}
	});
});





