// Klasse für Produkte erstellen

class MenuItem {

    name;
    desc;
    price;
    formattedPrice;
    amountInCart = 0;
    index = -1;
    productTotal;

    constructor(pName, pDesc, pPrice) {

        this.name = pName;
        this.desc = pDesc;
        this.price = pPrice;

        this.formatPrice();
        this.validateProductTotal();

    }

    formatPrice() {
        let fPrice = this.price.toFixed(2);
        fPrice = fPrice.replace('.', ',');
        this.formattedPrice = fPrice + '€';
    }

    validateProductTotal() {
        this.productTotal = this.price * this.amountInCart;
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

const cart = [];

// #region Produkte rendern

function renderMenu() {

    const menuRef = document.getElementById('content-menu');

    menuRef.innerHTML = ""

    for (let i = 0; i < menuArray.length; i++) {
        // hinterlege den Index in der Objektreferenz
        menuArray[i].index = i;

        menuRef.innerHTML += getMenuItem(i, menuArray[i].name, menuArray[i].desc, menuArray[i].formattedPrice)
    }
}

function init() {

    renderMenu();
    console.log(menuArray)
}

//#endregion

// Warenkorb-items hinzufügen

function addToCart(index) {

    if (menuArray[index].amountInCart == 0) {
        cart.push(menuArray[index]);
    }

    menuArray[index].amountInCart++;
    // cart Rendern

    renderCart();
    validateSubTotal();
    validateTotal();
}

//#region Warenkorb-items rendern

function formatTotalPrice(price) {

    let fPrice = price.toFixed(2);
    fPrice = fPrice.replace('.', ',');
    return fPrice + '€';

}

function renderCart() {
    const cartRef = document.getElementById('cart-item-container');
    cartRef.innerHTML = ""

    for (let i = 0; i < cart.length; i++) {

        let total = cart[i].amountInCart * cart[i].price;
        total = formatTotalPrice(total);

        cartRef.innerHTML += getCartItem(i, cart[i].index, cart[i].name, total, cart[i].amountInCart);
    }
}

//#endregion


// #region Warenkorb-Items Anzahl verändern

// Anzahl erhöhen

function addOneProduct(index) {

    menuArray[index].amountInCart++;
    renderCart();
    validateSubTotal();
    validateTotal();

}

// Anzahl verringern

function removeOneProduct(index, cartIndex) {

    if (menuArray[index].amountInCart == 1) {
        cart.splice(cartIndex, 1);
    }

    menuArray[index].amountInCart--;
    renderCart();
    validateSubTotal();
    validateTotal();
}

// Item komplett löschen

function deleteFromCart(index, cartIndex) {

    cart.splice(cartIndex, 1);
    menuArray[index].amountInCart = 0;
    renderCart();
    validateSubTotal();
    validateTotal();
}

// #endregion

// #region Warenkorb responsive anzeigen


function showCart() {
    const footerRef = document.getElementById('footer');
    const cartRef = document.getElementById('cart');
    footerRef.classList.toggle('d-none');
    cartRef.classList.toggle('d-none');
}

// #endregion

// Zwischensumme berechnen und anzeigen

function validateSubTotal() {

    const subTotalRef = document.getElementById('subtotal')
    let subTotal = 0;

    for (let i = 0; i < cart.length; i++) {

        cart[i].validateProductTotal();

        subTotal += cart[i].productTotal;
    }
    const fSubTotal = formatTotalPrice(subTotal);
    subTotalRef.innerHTML = fSubTotal;

    return subTotal;
}

// Gesamtsumme berechnen und anzeigen

function validateTotal(){

    const totalRef = document.getElementById('total')
    const subTotal = validateSubTotal();

    const total = subTotal + 5;
    const fTotal = formatTotalPrice(total);

    totalRef.innerHTML = fTotal;
}

// 