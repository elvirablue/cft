
var Application = [];
function getElementFromTemplate(data) {
	var template = document.querySelector('#catalog_template');
	var element = template.content.children[0].cloneNode(true);
	element.querySelector('.catalog-nav__link').innerHTML = data.title;				
	return element;
}

var container = document.querySelector('.catalog-nav__list');

getApp("category");

var CardApplication = [];


var container_info = document.querySelector('.product-basic-info');

function getCardAppFromTemplate(data) {
	var template = document.querySelector('#card_app_template');
	var element = template.content.children[0].cloneNode(true);
	element.querySelector('.page-main__title').innerHTML = data.title;
	element.querySelector('.product-basic-info__date').innerHTML = MyDateStr(data.lastUpdate);
	element.querySelector('.product-basic-info__requirements').innerHTML = data.requirements;
	var features_node = element.querySelectorAll('.product-add-info__list li');
	var features_json = data.features;
	features_node.innerHTML = data.features[0];
	features_json.forEach(function(feat) {
		
		element.querySelector('.product-add-info__list').appendChild(features_node);
		
	});
	
	element.querySelector('.page-main__title').innerHTML = data.title;				
	return element;
}