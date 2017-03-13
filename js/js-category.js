
var CatalogApp = [
	"Стандартный пакет",
	"Новый ЦФТ-Банк",
	"Cash Management",
	"Аренда сейфов",
	"Банковские гарантии",
	"Казначейство",
	"Страхование",
	"Факторинговое обслуживание",
	"Переводы средств",
	"Расчетный центр",
	"Пластиковые карты",
	"Финансовый мониторинг",
	"Депозиты и вклады",
	"Инвестиции"
];

function getElementFromTemplate(data) {
	var template = document.querySelector('#catalog_template');
	var element = template.content.children[0].cloneNode(true);
	element.querySelector('.catalog-nav__link').innerHTML = data;				
	return element;
}

var container = document.querySelector('.catalog-nav__list');

var tempCatalogApp = CatalogApp.slice();

renderApp(tempCatalogApp);