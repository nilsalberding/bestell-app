// Klasse für Produkte erstellen

class MenuItem {

    name;
    desc;
    price;
    formattedPrice;

    constructor(pName, pDesc, pPrice) {

        this.name = pName;
        this.desc = pDesc;
        this.price = pPrice;

        this.formatPrice();
    }

    formatPrice() {
        let fPrice = this.price.toFixed(2);
        fPrice = fPrice.replace('.', ',');
        this.formattedPrice = fPrice + '€';
    }
}

// Database für Produkte erstellen

const menuArray = [
    new MenuItem("Bauernbrot", "Kräftiges Roggenmischbrot mit knuspriger Kruste", 3.49),
    new MenuItem("Dinkelvollkornbrot", "100% Dinkelvollkornmehl, ballaststoffreich und nussig im Geschmack", 4.29),
    new MenuItem("Sonnenblumenkernbrot", "Saftiges Brot mit ganzen Sonnenblumenkernen", 3.99),
    new MenuItem("Mehrkornbrot", "Mischung aus verschiedenen Getreidesorten, besonders nährstoffreich", 4.19),
    new MenuItem("Ciabatta", "Italienisches Weißbrot mit weicher Krume und knuspriger Kruste", 2.99),
    new MenuItem("Baguette", "Französisches Stangenbrot mit goldbrauner Kruste", 2.49),
    new MenuItem("Kartoffelbrot", "Mildes Brot mit hohem Feuchtigkeitsgehalt durch Kartoffeln", 3.79),
    new MenuItem("Zwiebelbrot", "Herzhaftes Brot mit gerösteten Zwiebelstücken", 3.69),
    new MenuItem("Haferbrot", "Leicht süßliches Brot mit Haferflocken, ideal zum Frühstück", 4.09),
    new MenuItem("Walnussbrot", "Nussiges Aroma durch grob gehackte Walnüsse, perfekt zu Käse", 4.49)
];

// Produkte rendern

function renderMenu(){

    const menuRef = document.getElementById('content-menu');

    menuRef.innerHTML = ""

    for(let i = 0; i < menuArray.length; i++){

        menuRef.innerHTML += getMenuItem(menuArray[i].name, menuArray[i].desc, menuArray[i].formattedPrice)
    }
}

function init(){

    renderMenu();
}

// Warenkorb-items hinzufügen

// Warenkorb-Items Anzahl verändern

// Anzahl erhöhen

// Anzahl verringern

// Item komplett löschen

// Warenkorb responsive anzeigen


function showCart() {

    const cartRef = document.getElementById('cart');
    cartRef.classList.toggle('d-none');
}

function bubblingPrevention(event) {
    event.stopPropagation(event);
}

// 