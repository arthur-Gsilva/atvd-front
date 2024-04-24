let quantity = 1
let total
let price

const showProducts = () => {
    const productArea = document.querySelector('.products-content');
    
    let productHTML = '';

    products.forEach((product) => {
        productHTML += `
        <div class="product-item" data-product='${JSON.stringify(product)}'>
            <div class="img-area">
                <img src=${product.image} alt=${product.name}>
            </div>
            <div class="product-info">
                <p class="product-name">${product.name}</p>
                <p class="product-desc">${product.description}</p>
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
            </div>
        </div>
        `;
    });

    productArea.innerHTML = productHTML;
};


showProducts()

// MODAL
const modal = document.querySelector('.modal')



const showProductModal = (product) => {
    let modalArea = document.querySelector('.modal-box')
    
    modalArea.innerHTML += ''
    let modalHTML = ''
    quantity = 1
    price = product.price
    total = quantity * price

    modalHTML = `
    <div class="modal-product">
        <div class="modal-product-img">
            <img src=${product.image} alt=${product.name}>
        </div>

        <div class="modal-product-info">
            <div>
                <p class="modal-product-name">${product.name}</p>
                <p class="product-desc">${product.description}</p>
            </div>
            
            <div class="modal-price-area">
                <div class="modal-qt">
                    <button onClick="minusQt()">-</button>
                    <div id="qt">${quantity}</div>
                    <button onClick="plusQt()">+</button>
                </div>

                <div class="modal-price">
                    R$ ${total.toFixed(2)}
                </div>
            </div>
        </div>
    </div>
    `
    modalArea.innerHTML += modalHTML

}
const updateValue = (price, qt, element) => {
    const totalPrice = price * qt
    element.textContent = `R$ ${totalPrice.toFixed(2)}`
}
const updateQuantityDisplay = () => {
    document.getElementById('qt').textContent = quantity;
    updateValue(price, quantity, document.querySelector('.modal-price'))
};

const cart = () => {
    alert('Produto adicionado ao carrinho!!!')
    fecha()
}

document.querySelectorAll('.product-item').forEach((item) => {
    item.addEventListener('click', (event) => {
        const product = JSON.parse(event.currentTarget.dataset.product)
        showProductModal(product)
        modal.classList.add('opened')
        
    })
})

const fecha = () => {
    let modalArea = document.querySelector('.modal-box')
    modal.classList.remove('opened')
    modalArea.innerHTML = `
    <div class="modal-actions">
        <button class="cancelar" onclick="fecha()">Cancelar</button>
        <button onClick="cart">Adicionar ao carrinho</button>
    </div>
    `
}


const plusQt = () => {
    quantity++
    updateQuantityDisplay();
}
const minusQt = () => {
    if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
    } else{
        fecha()
    }
}