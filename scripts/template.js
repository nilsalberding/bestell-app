function getMenuItem(index, name, desc, price){
    return /*html*/`
                    <div class="dish" onclick="addToCart(${index})">
                        <div class="dish-desc">
                            <h3>${name}</h3>
                            <span class="dish-text">${desc}</span>
                            <span class="dish-price">${price}</span>
                        </div>
                        <button type="button" class="add-dish"></button>
                    </div>
    `
}

function getCartItem(cartIndex, menuIndex, name, price, amount){
    return /*html*/`
                    <div class="cart-item">
                        <h3>${name}</h3>
                        <div class="cart-item-details">
                            <div class="cart-item-amount">
                                <button type="button" class="amount-remove" onclick="removeOneProduct(${menuIndex}, ${cartIndex})"></button>
                                <span class="current-amount">${amount}</span>
                                <button type="button" class="amount-add" onclick="addOneProduct(${menuIndex})"></button>
                            </div>
                            <span class="cart-item-price">${price}</span>
                            <button type="button" class="cart-item-del" onclick="deleteFromCart(${menuIndex}, ${cartIndex})"></button>
                        </div>
                    </div>
        `
}

function getOverview(name, amount, price){
    return /*html*/`
            <tr>
                <td class="overview-name">${name}</td>
                <td>${amount}x</td>
                <td>${price}</td>
            </tr>
    `
}