

clsApp.init();




var basketApp = [];
var basket_json = [];
localStorage.setItem('app-basket', '0');
localStorage.setItem('all-basket', []);

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
	var basket_btn = element.querySelector('#btn-basket');
	
	basket_btn.addEventListener('click', function(event) {
		event.preventDefault();
		var index_selectApp = document.querySelector('.page-main__title').getAttribute('data-idApp');
		basketApp = {
			"title" : data.title,
			"price" : data.price,
			"sum" : "1"
		}
		var x = JSON.stringify(basketApp);
		basket_json.push(x);
		//если товар есть, то увеличить кол-во этих объектов
		addBasket(basketApp);
		//записать количество товаров в LocalStorage
		ls_basket = localStorage.getItem('app-basket');
		if (!ls_basket) {ls_basket = 0;}
		else {+ls_basket++;}
		localStorage.setItem('app-basket', ls_basket);
		var sum = basket_json.length;
		document.querySelector('#backed').innerText = ls_basket;
	});
			
	return element;
}

function addBasket(obj) {
	var ls_basket = localStorage.getItem('all-basket');	
	var all_basket = new Array(); 
	if(ls_basket != []) {		
		
		all_basket = JSON.parse(ls_basket);
		var flag = false;
		all_basket.forEach(function(app, index) {
			if(app.title === obj.title) {
				+app.sum++;
				all_basket[index].sum = app.sum;
				flag = true;
			}
		});
		if (!flag) {
			all_basket.push(obj);
		}

	} else {all_basket.push(obj);}
	
	localStorage.setItem('all-basket', JSON.stringify(all_basket));
}
 

