
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

var interval = 2000;

var tempApplication = Application.slice();
newApplication = randomElement(3, tempApplication);
renderApp(newApplication);

setInterval(function() {	
	removeChildren(container);		
	
	newApplication = randomElement(3, tempApplication);
	renderApp(newApplication);
	
}, interval);

