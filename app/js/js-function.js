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
  				renderApp(Application);
  				break;
  		}
		
  	};
	xhr.send();
}

function getInfoApp() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/api_info.json', true);
	xhr.onload = function(evt) {
		var jsonStr = this.responseText;
  		var loadedApp = JSON.parse(jsonStr);
  		CardApplication = loadedApp.slice();
  		var len = loadedApp.length;

  		renderCardApp(CardApplication[0]); 		
		
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

function renderCardApp(App) {
	var element = getCardAppFromTemplate(App);
	container_info.appendChild(element);
}

function removeChildren(node) {
    var children = node.childNodes;
    while(children.length) {
        node.removeChild(children[0]);
    }
}


