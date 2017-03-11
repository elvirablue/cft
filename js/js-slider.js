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
var tempApplication = Application.slice();
newApplication = newApplication.concat(tempApplication.slice(0, 7));
renderApp(newApplication);

var arrPrev = document.querySelector('.arrow.prev');
var arrNext = document.querySelector('.arrow.next');
var sliderControls = document.querySelectorAll('.slider_controls label');

var position_new = 0;
var slider_list = container;
var num_slider = 7;
var item = 3
slider_list.style.marginLeft = '-' + 368 * 2 + 'px';
sliderControls[item].classList.add('active');

// ******************
function Prev() {
	var position_cur = slider_list.style.marginLeft;
    var position_new;
    position_new = position_cur.substr(0,position_cur.length - 2);      
    position_new = Math.min(+position_new + 368, 0);
    if (position_new > 0) {
      position_new = -368;       
    };
    slider_list.style.marginLeft = position_new + 'px'; // 368px ширина блока li
}

arrPrev.addEventListener('click', function(event) { 
	if (item === 0) return;       
	Prev();
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
    if (item === num_slider) return;      
    Next();
    item++;
    if (document.querySelector('.slider_controls label.active')) {
    		document.querySelector('.slider_controls label.active').classList.remove('active');
    };
    sliderControls[item].classList.add('active');        
});

sliderControls.forEach(function(element) {
	element.addEventListener('click', function(event) {
		if (item === (num_slider - 2) || item === 1) return;
		if (this.classList.contains('active')) return;
		document.querySelector('.slider_controls label.active').classList.remove('active');
		this.classList.add('active');

		  
	});
});