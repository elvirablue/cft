document.onload = function() {
	App.init();
} 


getApp("category");
getInfoApp(1);


var Application = [];
var backedApp = [];
var backed_node = document.querySelector('#backed');

backed_node.addEventListener('click', function(event) {
	event.preventDefault();
	//открыть модальное окно с корзиной
	alert(this.innerText);
});

//var basked_btn = document.querySelector('#btn-basked');
//
//basked_btn.addEventListener('click', function(event) {
//	event.preventDefault();
//	var index_selectApp = document.querySelector('.page-main__title').getAttribute('data-idApp');
//	backedApp = Application[index_selectApp];
//});

function getElementFromTemplate(data) {
	var template = document.querySelector('#catalog_template');
	var element = template.content.children[0].cloneNode(true);
	element.querySelector('.catalog-nav__link').innerHTML = data.title;
	element.querySelector('.catalog-nav__link').setAttribute('data-idApp', data.id);			
	return element;
}

var container = document.querySelector('.catalog-nav__list');
var app_list;


//********************************************************************

var CardApplication = [];
var container_info = document.querySelector('.page-main--product');

function createNode(array, node, parent_node, class_node) {
	if (array.length > 0) {
		array.forEach(function(feat, index) {
			var item = document.createElement(node);
			item.innerHTML = feat;	
			if (class_node) {
				item.classList.add(class_node);	
			};
			parent_node.appendChild(item);		
		});
	}
}

var basked_btn;

function getCardAppFromTemplate(data) {
	var template = document.querySelector('#card_app_template');
	var element = template.content.children[0].cloneNode(true);
	element.querySelector('.page-main__title').innerText = data.title;
	element.querySelector('.page-main__title').setAttribute('data-idApp', data.id);
	element.querySelector('.photo-wrapper img').src = guidMap[data.guid];
	element.querySelector('.product-basic-info__date').innerText = MyDateStr(data.lastUpdate);
	element.querySelector('.price-app').innerText = data.price;
	
	var description = data.description;
	var description_list = description.substring(0).split("\n");
	var description_node_parent = element.querySelector('.product-basic-info__text div');
	createNode(description_list, 'p', description_node_parent, 'product-basic-info__feature-name');

	element.querySelector('.product-basic-info__requirements span').innerText = data.requirements;
	
	var features_node_parent = element.querySelector('.product-add-info__list');
	var features_json = data.features;
	createNode(features_json, 'li', features_node_parent);

	//basked_btn = document.querySelector('#btn-basked');
//
	//basked_btn.addEventListener('click', function(event) {
	//	event.preventDefault();
	//	var index_selectApp = document.querySelector('.page-main__title').getAttribute('data-idApp');
	//	backedApp = Application[index_selectApp];
	//});
			
	return element;
}


 

