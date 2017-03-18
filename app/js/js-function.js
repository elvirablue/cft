var guidMap = {

  "059e25bf-f60c-49a5-b6f4-58b61b4687bb" : "img/prod-1.png",
  "c2e57c5b-47a9-4602-96f1-85fd953f6873" : "img/prod-2.png",
  "32145f9f-bbb8-44b4-a81e-baf5c4a5407f" : "img/prod-3.png",
  "83fcbc5f-7639-4736-bae0-966c0134b894" : "img/prod-1.png"
  
}

//*************************************
//*************************************
oop = {
	inherit: function(cls, superClass) {
		cls.prototype = Object.create(superClass.prototype);
		cls.prototype.constructor = cls;
		cls.SuperClass = superClass;
	},
	cls: function(parent, fn) {
		var c = function() { this.__init__ && this.__init__.apply(this, arguments); },
				key;
				parent && this.inherit(c, parent);
				fn.call(c.prototype);
				return c;
    },
	super: function(cls) {
		if (cls.SuperClass) return cls.SuperClass.prototype;
		if (cls.mixin) return cls;
		return cls.prototype;
	}
};


var AppApp = new (oop.cls(null, function() {
	this.get = function(pageName) { 
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'api/api_packages.json', true);
		xhr.onload = function(evt) {		
			var jsonStr = this.responseText;
		 		var loadedApp = JSON.parse(jsonStr);
		 		Application = loadedApp.slice();
		 		var len = loadedApp.length;
		 		switch (pageName) {
		 			case "index" :
		 				if (len > 7) {			
						var sliderApp = Application.concat(loadedApp.slice(0, 6));
					};
		 				renderApp(sliderApp);
		 				break;
		 			case "category" :  			
		 				renderAppNav(Application);  							
		 				break;
		 		}		
		 	};
		xhr.send();
	}
}))();
//var appobj = new AppApp();
//*************************************
//*************************************

function getApp(pageName) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/api_packages.json', true);
	xhr.onload = function(evt) {		
		var jsonStr = this.responseText;
  		var loadedApp = JSON.parse(jsonStr);
  		Application = loadedApp.slice();
  		var len = loadedApp.length;
  		switch (pageName) {
  			case "index" :
  				if (len > 7) {			
					var sliderApp = Application.concat(loadedApp.slice(0, 6));
				};
  				renderApp(sliderApp);
  				break;
  			case "category" :  			
  				renderAppNav(Application);  							
  				break;
  		}		
  	};
	xhr.send();
}

function getInfoApp(idApp) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/api_info.json', true);
	xhr.onload = function(evt) {
		var jsonStr = this.responseText;
  		var loadedApp = JSON.parse(jsonStr);
  		CardApplication = loadedApp.slice();
  		var len = loadedApp.length;
  		idApp--;
  		renderCardApp(CardApplication[idApp]); 		
		
  	};
	xhr.send();
}


function MyDateStr(update) {	
	var str_date;
	var date  = new Date(update);
	var mon = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];	
	str_date = date.getDate() + ' ' + mon[date.getMonth()] + ' ' + date.getFullYear() + 'г.';

	return str_date;
}

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

function renderApp(App) {
	App.forEach(function(app1) {
		var element = getElementFromTemplate(app1);
		container.appendChild(element);		
	});
	
}

function renderAppNav(App) {
	App.forEach(function(app1, index) {
		var element = getElementFromTemplate(app1);
		container.appendChild(element);
		container.children[index].children[0].addEventListener('click', function(event) {
				event.preventDefault();
				if (this.classList.contains('active')) return;
				document.querySelector('.catalog-nav__link.active').classList.remove('active');
				this.classList.add('active');
				var idApp = this.getAttribute('data-idApp');
				removeChildren(container_info);
				getInfoApp(idApp);
		});
	});
	container.children[0].children[0].classList.add('active');
}

function renderCardApp(App) {
	var element = getCardAppFromTemplate(App);
	container_info.appendChild(element);
	
	container_info.querySelector('#btn-basked').addEventListener('click', function(event) {
		event.preventDefault();
		var index_selectApp = container_info.querySelector('.page-main__title').getAttribute('data-idApp');
		backedApp = Application[index_selectApp];
		console.log(backedApp);
	});
}

function removeChildren(node) {
    var children = node.childNodes;
    while(children.length) {
        node.removeChild(children[0]);
    }
}


