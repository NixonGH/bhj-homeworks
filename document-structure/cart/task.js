document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const cartProductsContainer = document.querySelector('.cart__products');

    products.forEach(product => {
        const incBtn = product.querySelector('.product__quantity-control_inc');
        const decBtn = product.querySelector('.product__quantity-control_dec');
        const quantityDisplay = product.querySelector('.product__quantity-value');
        const addToCartBtn = product.querySelector('.product__add');

        incBtn.addEventListener('click', () => {
            quantityDisplay.textContent = parseInt(quantityDisplay.textContent) + 1;
        });

        decBtn.addEventListener('click', () => {
            const current = parseInt(quantityDisplay.textContent);
            if (current > 1) {
                quantityDisplay.textContent = current - 1;
            }
        });

        addToCartBtn.addEventListener('click', () => {
            const id = product.dataset.id;
            const image = product.querySelector('.product__image');
            const imageSrc = image.src;
            const quantity = parseInt(quantityDisplay.textContent);

            let cartProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${id}"]`);

            if (cartProduct) {
                const countElement = cartProduct.querySelector('.cart__product-count');
                countElement.textContent = parseInt(countElement.textContent) + quantity;
            } else {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart__product');
                cartItem.setAttribute('data-id', id);

                const cartImg = document.createElement('img');
                cartImg.classList.add('cart__product-image');
                cartImg.src = imageSrc;

                const cartCount = document.createElement('div');
                cartCount.classList.add('cart__product-count');
                cartCount.textContent = quantity;

                cartItem.appendChild(cartImg);
                cartItem.appendChild(cartCount);
                cartProductsContainer.appendChild(cartItem);
            }

            animateImageToCart(image, cartProductsContainer.querySelector(`.cart__product[data-id="${id}"] .cart__product-image`));
        });
    });

    function animateImageToCart(sourceImage, targetImage) {
        const srcRect = sourceImage.getBoundingClientRect();
        const targetRect = targetImage.getBoundingClientRect();

        const clone = sourceImage.cloneNode(true);
        clone.classList.add('product-shadow');
        clone.style.left = srcRect.left + 'px';
        clone.style.top = srcRect.top + 'px';
        clone.style.width = srcRect.width + 'px';
        clone.style.height = srcRect.height + 'px';
        clone.style.transition = 'all 0.7s ease';
        document.body.appendChild(clone);

        requestAnimationFrame(() => {
            clone.style.left = targetRect.left + 'px';
            clone.style.top = targetRect.top + 'px';
            clone.style.width = targetRect.width + 'px';
            clone.style.height = targetRect.height + 'px';
            clone.style.opacity = '0.3';
        });

        setTimeout(() => {
            clone.remove();
        }, 700);
    }
});
