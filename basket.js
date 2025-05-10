// Корзинаны көрсету функциясы
function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.list_cart');
    cartContainer.innerHTML = ''; // Алдымен контейнерді тазалаймыз

    let total = 0;

    cart.forEach(item => {
        // Жаңа элементтер құрамыз
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.setAttribute('data-description', item.description);

        // HTML код ішіне автоматты түрде қосамыз
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.description}" width="50">
            <p class="desc">${item.description}</p>
            <span class="price">${item.price * item.quantity} ₸</span>
            <button class="minus">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="plus">+</button>
            <button class="remove">Удалить</button>
        `;

        cartContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    document.querySelector('#total-price').textContent = total; // Жалпы бағасын шығарамыз
    updateBasketCount();
}

// Корзина функцияларын орнату
function initCartFunctions() {
    const cartContainer = document.querySelector('.list_cart');

    cartContainer.addEventListener('click', function (event) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const target = event.target;

        if (target.classList.contains('minus') || target.classList.contains('plus') || target.classList.contains('remove')) {
            const cartItem = target.closest('.cart-item');
            const description = cartItem.getAttribute('data-description');
            const itemIndex = cart.findIndex(item => item.description === description);
            if (itemIndex === -1) return;

            const item = cart[itemIndex];

            if (target.classList.contains('minus')) {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    // Егер quantity 1 болса, товарды өшіреміз
                    cart.splice(itemIndex, 1);
                }
            }

            if (target.classList.contains('plus')) {
                item.quantity++;
            }

            if (target.classList.contains('remove')) {
                cart.splice(itemIndex, 1);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        }
    });
}

// Корзинадағы тауар санын жаңарту
function updateBasketCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCount = 0;
    cart.forEach(item => {
        totalCount += item.quantity;
    });

    document.querySelector('#cart-count').textContent = totalCount;
}

// Алғашқы рет шақыру
initCartFunctions();
updateCartDisplay();
