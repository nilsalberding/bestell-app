// Produkte rendern

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

        this.formatPrice;
    }

    formatPrice() {
        let fPrice = this.price.toFixed(2);
        fPrice = fPrice.replace('.', ',');
        this.formattedPrice = fPrice + '€';
    }
}

// Database für Produkte erstellen



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