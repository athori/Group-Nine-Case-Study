// JavaScript Document
/*
var products = [
	"../images/product1.png",
	"../images/product2.png",
	"../images/product3.png",
	"../images/product4.png",
	"../images/product5.png",
	"../images/product6.png",
	"../images/product7.png",
	"../images/product8.png",
];

function writeImageTags(){
	var productRowOne = document.getElementById("pRow1");
	for(var i = 0; i < 4; i++){
		productRowOne.innerHTML += '<img class="thumbnails" id="product'+[i]+'" width="100px"  height="100px">';
	}
	var productRowTwo = document.getElementById("pRow2");
	for(var j = 4; j < products.length; j++){
		productRowTwo.innerHTML += '<img class="thumbnails" id="product'+[j]+'" width="100px"  height="100px">';
	}
}

function displayImages(){
	for(var i = 0; i < 4; i++){
		document.getElementById("product"+[i]).src = products[i];
	}
	for(var j = 4; j < products.length; j++){
		document.getElementById("product"+[j]).src = products[j];
	}
}

function setUpPage(){
	writeImageTags();
	displayImages();
}

window.addEventListener("load", setUpPage, false);

*/