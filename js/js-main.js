var loadedApp = null;
var newApplication = [];

var Application = [
 	{
		srcimg : "img/prod-1.png",
		name : "СТАНДАРТНЫЙ ПАКЕТ 1",
		time : "08 апреля 2012"
	},
	{
		srcimg : "img/prod-2.png",
		name : "НОВЫЙ ЦФТ-БАНК",
		time : "08 апреля 2015"
	},
	{
		srcimg : "img/prod-3.png",
		name : "КАТАЛОГ РАЗРАБОТОК",
		time : "08 апреля 2015"
	},
	{
		srcimg : "img/prod-1.png",
		name : "СТАНДАРТНЫЙ ПАКЕТ 2",
		time : "08 апреля 2012"
	},
	{
		srcimg : "img/prod-2.png",
		name : "НОВЫЙ ЦФТ-БАНК 2",
		time : "08 апреля 2015"
	},
	{
		srcimg : "img/prod-3.png",
		name : "КАТАЛОГ РАЗРАБОТОК 2",
		time : "08 апреля 2015"
	},
	{
		srcimg : "img/prod-1.png",
		name : "СТАНДАРТНЫЙ ПАКЕТ 3",
		time : "08 апреля 2012"
	},
	{
		srcimg : "img/prod-2.png",
		name : "НОВЫЙ ЦФТ-БАНК 3",
		time : "08 апреля 2015"
	},
	{
		srcimg : "img/prod-3.png",
		name : "КАТАЛОГ РАЗРАБОТОК 3",
		time : "08 апреля 2015"
	}

]; 

var container = document.querySelector('.product-nav__list');

loadedApp = Application.length;

function randomElement(N, Arr) {
	var len = Arr.length;
	var new_array = [];
	var j = 0;
	for (i = 0; i < N; i++) {
		j = Math.floor(Math.random() * len);
		new_array = new_array.concat(Arr.slice(j, j + 1));
		len--;
	};
	return new_array;
}


function getElementFromTemplate(data) {
	var template = document.querySelector('#new_template');
	var element = template.content.children[0].cloneNode(true);
	element.querySelector('.product-nav__title-name').innerHTML = data.name;	
	element.querySelector('.product-nav__title-time').innerHTML = data.time;	
	element.querySelector('.product-nav__img').src = data.srcimg;		
	return element;
}

function renderApp(App) {
	App.forEach(function(app1) {
		var element = getElementFromTemplate(app1);
		container.appendChild(element);
	});
}

function removeChildren(node) {
    var children = node.childNodes;
    while(children.length) {
        node.removeChild(children[0]);
    }
}

var interval = 2000;

var tempApplication = Application.slice();
newApplication = randomElement(3, tempApplication);
renderApp(newApplication);

setInterval(function() {	
	removeChildren(container);		
	
	newApplication = randomElement(3, tempApplication);
	renderApp(newApplication);
	
}, interval);

