function getMenuItem(index, name, desc, price){
    return /*html*/`
                    <div class="dish" onclick="addToCart(${index})">
                        <div class="dish-desc">
                            <h3>${name}</h3>
                            <span>${desc}</span>
                            <span class="dish-price">${price}</span>
                        </div>
                        <button type="button" class="add-dish"></button>
                    </div>
    `
}