var newApplication = [];
var Application = [];



getApp("index");



function getElementFromTemplate(data) {
	var template = document.querySelector('#new_template');
	var element = template.content.children[0].cloneNode(true);
	element.querySelector('.product-nav__title-name').innerHTML = data.title;	
	element.querySelector('.product-nav__title-time').innerHTML = MyDateStr(data.lastUpdate);	
	element.querySelector('.product-nav__img').src = guidMap[data.guid];		
	return element;
}

var container = document.querySelector('.product-nav__list');



// ******************
var arrPrev = document.querySelector('.arrow.prev');
var arrNext = document.querySelector('.arrow.next');
var sliderControls = document.querySelectorAll('.slider_controls label');

var position_new = 0;
var slider_list = container;
var num_slider = 7;
var item = 3
slider_list.style.marginLeft = '-' + 368 * 2 + 'px';
sliderControls[item].classList.add('active');


function Prev() {
	var position_cur = slider_list.style.marginLeft;
    var position_new;
    position_new = position_cur.substr(0, position_cur.length - 2);      
    position_new = Math.min(+position_new + 368, 0);
    if (position_new > 0) {
      position_new = -368;       
    };
    slider_list.style.marginLeft = position_new + 'px'; // 368px ширина блока li
}

arrPrev.addEventListener('click', function(event) { 
	if (item === 0) return; 
	if (item < (num_slider - 1) && item > 1) {
		Prev();		
	}
	
    item--;
    if (document.querySelector('.slider_controls label.active')) {
    		document.querySelector('.slider_controls label.active').classList.remove('active');
    };
    sliderControls[item].classList.add('active');               
});

function Next() {
	var position_cur = slider_list.style.marginLeft;
    var position_new;
    position_new = position_cur.substr(1,position_cur.length - 3);      
    position_new = Math.min(+position_new + 368, num_slider * 368);
    if (position_new > (num_slider - 3) * 368) {
      position_new = (num_slider - 3) * 368;        
    }; 

    slider_list.style.marginLeft = '-' + position_new + 'px'; // 368px ширина блока li
}

arrNext.addEventListener('click', function(event) {  
    if (item === num_slider - 1) return; 
    if (item < (num_slider - 1) && item >= 1) {
    	Next();
    }
    
    item++;
    if (document.querySelector('.slider_controls label.active')) {
    		document.querySelector('.slider_controls label.active').classList.remove('active');
    };
    sliderControls[item].classList.add('active');        
});

sliderControls.forEach(function(element, index) {
	element.addEventListener('click', function() {
    	if (this.classList.contains('active')) return;
    	var position_cur = slider_list.style.marginLeft;
    	var position_new = 0;
    	item = index;
		if (index <= (num_slider - 2) && index >= 1) {			
			position_new = (index - 1) * 368;
    		slider_list.style.marginLeft = '-' + position_new + 'px';			
		}
		
		if (index < 1) {
			slider_list.style.marginLeft = '0px';
		}

		if (index > (num_slider - 2)) {
			slider_list.style.marginLeft = '-' + 368 * (num_slider - 3) + 'px';
		}
		document.querySelector('.slider_controls label.active').classList.remove('active');
		this.classList.add('active');

		  
	});
});

