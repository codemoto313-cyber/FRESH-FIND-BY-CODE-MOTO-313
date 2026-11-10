/* =========================================
   PRODUCT DATA
========================================= */

const products = [

    /* ================= VEGETABLES ================= */

    {
        id: 1,
        name: "Tomato",
        category: "vegetable",
        price: 180,
        image: "https://media.istockphoto.com/id/1450576005/photo/tomato-isolated-tomato-on-white-background-perfect-retouched-tomatoe-side-view-with-clipping.jpg?s=612x612&w=0&k=20&c=lkQa_rpaKpc-ELRRGobYVJH-eMJ0ew9BckCqavkSTA0=",
        description: "Fresh red tomatoes"
    },

    {
        id: 2,
        name: "Potato",
        category: "vegetable",
        price: 120,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPgPS2yaB8J-R-qmU-pL75rdWl2WxIDZ05YXktDxjqXg&s=10",
        description: "Fresh farm potatoes"
    },

    {
        id: 3,
        name: "Onion",
        category: "vegetable",
        price: 150,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJdFIntCS8-Luro9iXtQY4fbr8RrOrRPgqb_prnlhw-A&s=10",
        description: "Fresh onions"
    },

    {
        id: 4,
        name: "Carrot",
        category: "vegetable",
        price: 160,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbnIAklBY4pamNklzBh_yrDpwZWHmALYOqWGlgpDLyA&s=10",
        description: "Crunchy fresh carrots"
    },

    {
        id: 5,
        name: "Cucumber",
        category: "vegetable",
        price: 140,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTRlTLtklXXO62st5zetwgK77BnWzBX9e5iJvWFJ-fg&s=10",
        description: "Fresh green cucumber"
    },

    {
        id: 6,
        name: "Spinach",
        category: "vegetable",
        price: 100,
        image: "https://png.pngtree.com/png-vector/20241021/ourmid/pngtree-spinach-leaves-a-versatile-ingredient-for-salads-and-other-dishes-png-image_14138744.png",
        description: "Fresh green spinach"
    },

    {
        id: 7,
        name: "Capsicum",
        category: "vegetable",
        price: 280,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeO8KeBBesD-SsDWmIAwbbKjjOCi0qlaR0b-MniMo53w&s=10",
        description: "VEGATABLE CAPSICUM"
    },

    {
        id: 8,
        name: "Broccoli",
        category: "vegetable",
        price: 350,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cotNTNoDd2S6vYrBmFoOjwnhKQyx1LVpLVhxulRUEg&s=10",
        description: "Fresh healthy broccoli"
    },

    {
        id: 9,
        name: "Cauliflower",
        category: "vegetable",
        price: 220,
        image: "https://gallery.yopriceville.com/downloadfullsize/send/24031",
        description: "Fresh cauliflower"
    },

    {
        id: 10,
        name: "Cabbage",
        category: "vegetable",
        price: 130,
        image: "https://static.vecteezy.com/system/resources/previews/055/544/041/non_2x/fresh-green-cabbage-free-png.png",
        description: "Fresh green cabbage"
    },

    {
        id: 11,
        name: "Eggplant",
        category: "vegetable",
        price: 190,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR662D-z9S4J1qxBen5maHJDmQLuOQjogdmHWlfYIavzQ&s=10",
        description: "Fresh purple eggplant"
    },

    {
        id: 12,
        name: "Green Peas",
        category: "vegetable",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpc9jvNHPf7StyU3NjOw8MrK--CtcMLxvoSANhYqvSh_NV7FBB-KZu70_B&s=10",
        description: "Fresh green peas"
    },


    /* ================= FRUITS ================= */

    {
        id: 13,
        name: "Apple",
        category: "fruit",
        price: 450,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl92YVHSnI2rZ0HyfKTpGA6A_0tv615EpbxqWWbfQaZw&s=10",
        description: "Sweet fresh apples"
    },

    {
        id: 14,
        name: "Banana",
        category: "fruit",
        price: 180,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwnsSRPRkTWxOxtuhkjA71qNjvfGVemv4y-NiMl6QLA&s=10",
        description: "Fresh sweet bananas"
    },

    {
        id: 15,
        name: "Mango",
        category: "fruit",
        price: 500,
        image: "https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-sweet-mango-fruit-png-png-image_11495826.png",
        description: "Sweet juicy mangoes"
    },

    {
        id: 16,
        name: "Orange",
        category: "fruit",
        price: 350,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkHsBmRRC3poUdEeDfxv09orV44IZboESKWjrGTwveA&s=10",
        description: "Fresh juicy oranges"
    },

    {
        id: 17,
        name: "Grapes",
        category: "fruit",
        price: 420,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRph2h2iX0dP_JW6mNwiwyZgFX1D9sUpwjFnHpbB8GJ_A&s=10",
        description: "Sweet fresh grapes"
    },

    {
        id: 18,
        name: "Watermelon",
        category: "fruit",
        price: 280,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQZdN_d_UUqHWL0Zu2R_ZHX0mY21vs5t0-Pf8mIs1xw&s=10",
        description: "Fresh juicy watermelon"
    },

    {
        id: 19,
        name: "Pineapple",
        category: "fruit",
        price: 400,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECyTF8GegqnqdnXzmVtob49rpNTL5Yd-85psgs81x-g&s=10",
        description: "Sweet tropical pineapple"
    },

    {
        id: 20,
        name: "Strawberry",
        category: "fruit",
        price: 650,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuIxJTtRFQ9VLU90sCJ9CXFU8iozIOyfP9JOzhqfHtQ&s=10",
        description: "Fresh red strawberries"
    },

    {
        id: 21,
        name: "Papaya",
        category: "fruit",
        price: 250,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfr-O20sEPekF-H9GGZc6N0mWX8eR6woDPXPN-A7MrQ&s=10",
        description: "Fresh ripe papaya"
    },

    {
        id: 22,
        name: "Guava",
        category: "fruit",
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdcZ6iObCqHavKKhVvQKH7mi2ZUdN0KXYevJUCLhx7g&s=10",
        description: "Fresh green guava"
    },

    {
        id: 23,
        name: "Pomegranate",
        category: "fruit",
        price: 550,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrHAILdqxHpXv6rv7-_JNJzgP714ekX6lzT9N7v-fkcfSwmyp5N-96M4&s=10",
        description: "Fresh red pomegranate"
    },

    {
        id: 24,
        name: "Peach",
        category: "fruit",
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzopJPI6pH-4lOd5Mnx0cF92uSB9qxcynYZqsvQoXxdw&s=10",
        description: "Sweet juicy peaches"
    }

];


/* =========================================
   CART
========================================= */

let cart = JSON.parse(
    localStorage.getItem("freshMartCart")
) || [];


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts(list = products) {

    const vegetableContainer =
        document.getElementById("vegetable-products");

    const fruitContainer =
        document.getElementById("fruit-products");


    vegetableContainer.innerHTML = "";

    fruitContainer.innerHTML = "";


    const vegetables = list.filter(
        product => product.category === "vegetable"
    );


    const fruits = list.filter(
        product => product.category === "fruit"
    );


    vegetables.forEach(product => {

        vegetableContainer.innerHTML +=
            createProductCard(product);

    });


    fruits.forEach(product => {

        fruitContainer.innerHTML +=
            createProductCard(product);

    });

}


/* =========================================
   PRODUCT CARD
========================================= */

function createProductCard(product) {

    return `

        <div class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <span class="product-price">
                        Rs. ${product.price}
                    </span>

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                        title="Add to Cart"
                    >
                        +
                    </button>

                </div>

            </div>

        </div>

    `;
}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );


    if (!product) {
        return;
    }


    const existingItem = cart.find(
        item => item.id === productId
    );


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    saveCart();

    updateCart();


    // Open cart

    openCart();

}


/* =========================================
   SAVE CART
========================================= */

function saveCart() {

    localStorage.setItem(
        "freshMartCart",
        JSON.stringify(cart)
    );

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");


    cartItems.innerHTML = "";


    let total = 0;

    let itemCount = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div style="font-size:50px;">
                    🛒
                </div>

                <h3>Your cart is empty</h3>

                <p>
                    Add some fresh products!
                </p>

            </div>

        `;

    }


    cart.forEach(item => {

        total += item.price * item.quantity;

        itemCount += item.quantity;


        cartItems.innerHTML += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >


                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <div class="cart-item-price">
                        Rs. ${item.price}
                    </div>


                    <div class="quantity-controls">

                        <button
                            onclick="changeQuantity(
                                ${item.id},
                                -1
                            )"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity(
                                ${item.id},
                                1
                            )"
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="remove-item"
                    onclick="removeFromCart(${item.id})"
                >
                    ✕
                </button>

            </div>

        `;

    });


    cartCount.textContent = itemCount;

    cartTotal.textContent =
        `Rs. ${total.toLocaleString()}`;

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(productId, change) {

    const item = cart.find(
        product => product.id === productId
    );


    if (!item) {
        return;
    }


    item.quantity += change;


    if (item.quantity <= 0) {

        cart = cart.filter(
            product => product.id !== productId
        );

    }


    saveCart();

    updateCart();

}


/* =========================================
   REMOVE CART ITEM
========================================= */

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );


    saveCart();

    updateCart();

}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    document
        .getElementById("cart-sidebar")
        .classList.add("open");


    document
        .getElementById("cart-overlay")
        .classList.add("show");


    document.body.style.overflow = "hidden";

}


/* =========================================
   CLOSE CART
========================================= */

function closeCart() {

    document
        .getElementById("cart-sidebar")
        .classList.remove("open");


    document
        .getElementById("cart-overlay")
        .classList.remove("show");


    document.body.style.overflow = "";

}


/* =========================================
   SEARCH
========================================= */

function searchProducts() {

    const searchValue =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const filteredProducts =
        products.filter(product =>

            product.name
                .toLowerCase()
                .includes(searchValue)

            ||

            product.category
                .toLowerCase()
                .includes(searchValue)

        );


    displayProducts(filteredProducts);

}


/* =========================================
   FILTER
========================================= */

function filterProducts(category, button) {

    document
        .querySelectorAll(".filter-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    if (category === "all") {

        displayProducts(products);

        return;

    }


    const filteredProducts =
        products.filter(
            product => product.category === category
        );


    displayProducts(filteredProducts);

}


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    document
        .getElementById("navbar")
        .classList.toggle("show");

}


/* Close mobile menu after clicking link */

document
    .querySelectorAll(".navbar a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                document
                    .getElementById("navbar")
                    .classList.remove("show");

            }
        );

    });


/* =========================================
   HERO SLIDER
========================================= */

let slideIndex = 0;


function showSlide(index) {

    const slides =
        document.querySelectorAll(".hero-slide");

    const dots =
        document.querySelectorAll(".dot");


    if (index >= slides.length) {

        slideIndex = 0;

    }


    if (index < 0) {

        slideIndex = slides.length - 1;

    }


    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    slides[slideIndex]
        .classList.add("active");


    dots[slideIndex]
        .classList.add("active");

}


function changeSlide(direction) {

    slideIndex += direction;

    showSlide(slideIndex);

}


function currentSlide(index) {

    slideIndex = index;

    showSlide(slideIndex);

}


/* Automatic slideshow */

setInterval(() => {

    slideIndex++;

    showSlide(slideIndex);

}, 4000);


/* =========================================
   CONTACT FORM
========================================= */

function submitContact(event) {

    event.preventDefault();


    alert(
        "Thank you! Your message has been received."
    );


    event.target.reset();

}


/* =========================================
   CHECKOUT
========================================= */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty. Please add some products first."
        );

        return;

    }


    let total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );


    alert(
        `Demo Checkout\n\nTotal: Rs. ${total.toLocaleString()}\n\nThank you for shopping with FreshMart!`
    );

}


/* =========================================
   INITIALIZE WEBSITE
========================================= */

displayProducts();

updateCart();

showSlide(0);



// JavaScript
function openWhatsApp() {
    let phoneNumber = "923001234567"; // Fake WhatsApp number
    let message = "Hello, I need help.";

    let whatsappLink =
        "https://wa.me/" + phoneNumber +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappLink, "_blank");
}