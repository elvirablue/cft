

function getElementFromTemplate(data) {
	var template = document.querySelector('#catalog_template');
	var element = template.content.children[0].cloneNode(true);
	element.querySelector('.catalog-nav__link').innerHTML = data.title;				
	return element;
}

var container = document.querySelector('.catalog-nav__list');

getApp("category");