document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Swiper Slider Initialization
    const swiper = new Swiper('.collections-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    // --- PRODUCT DATA ---
    const products = [
        { id: 1, name: "Red Gel volcano Candle", category: "luxury", price: 249, img: "./images/luxury_gel_candle.png" },
        { id: 2, name: "Blue Gel volcano Candle", category: "luxury", price: 249, img: "./images/luxury_gel_candle.png" },
        { id: 3, name: "Peony in a Glass Candle", category: "luxury", price: 249, img: "./images/luxury_gel_candle.png" },
        { id: 4, name: "Sunflower Candle", category: "luxury", price: 199, img: "./images/luxury_gel_candle.png" },
        { id: 5, name: "Rose Gel Candle", category: "luxury", price: 199, img: "./images/luxury_gel_candle.png" },
        { id: 6, name: "Golden Flake Gel Candle", category: "luxury", price: 199, img: "./images/luxury_gel_candle.png" },
        { id: 7, name: "Rose Golden Gel Candle", category: "luxury", price: 199, img: "./images/luxury_gel_candle.png" },
        { id: 8, name: "Watermelon Wax Candle", category: "luxury", price: 249, img: "./images/luxury_gel_candle.png" },
        { id: 9, name: "Coffee Latte Glass", category: "luxury", price: 249, img: "./images/luxury_gel_candle.png" },
        { id: 10, name: "Strawberry Latte Glass", category: "luxury", price: 249, img: "./images/luxury_gel_candle.png" },
        { id: 11, name: "Green Ombre Glass (Custom)", category: "luxury", price: 199, img: "./images/luxury_gel_candle.png" },
        { id: 12, name: "Matcha Glass", category: "luxury", price: 249, img: "./images/luxury_gel_candle.png" },
        { id: 13, name: "Rose Gel Jar", category: "jars", price: 299, img: "./images/luxury_gel_candle.png" },
        { id: 14, name: "Vanilla Rose Calm Jar", category: "jars", price: 299, img: "./images/luxury_gel_candle.png" },
        { id: 15, name: "Hearts Vanilla Jar", category: "jars", price: 249, img: "./images/luxury_gel_candle.png" },
        { id: 16, name: "Berries Gel Jar", category: "jars", price: 299, img: "./images/luxury_gel_candle.png" },
        { id: 17, name: "Beach Shell Gel Candle", category: "luxury", price: 249, img: "./images/luxury_gel_candle.png" },
        { id: 18, name: "Watermelon Gel Candle", category: "luxury", price: 199, img: "./images/luxury_gel_candle.png" },
        { id: 19, name: "Chai Candle", category: "luxury", price: 149, img: "./images/luxury_gel_candle.png" },
        { id: 20, name: "Vanilla Calm Glass", category: "luxury", price: 99, img: "./images/luxury_gel_candle.png" },
        { id: 21, name: "Orange Shots", category: "luxury", price: 79, img: "./images/luxury_gel_candle.png" },
        { id: 22, name: "Strawberry Glass", category: "luxury", price: 99, img: "./images/luxury_gel_candle.png" },
        { id: 23, name: "Mini Jars", category: "luxury", price: 59, img: "./images/luxury_gel_candle.png" },
        { id: 24, name: "Baby Breaths Gel Glass", category: "luxury", price: 99, img: "./images/luxury_gel_candle.png" },
        { id: 25, name: "Hearts Vanilla Glass", category: "luxury", price: 149, img: "./images/luxury_gel_candle.png" },
        { id: 26, name: "Dye Colour Candle (Custom)", category: "luxury", price: 199, img: "./images/luxury_gel_candle.png" },
        { id: 27, name: "White Gel beach Candle", category: "luxury", price: 199, img: "./images/luxury_gel_candle.png" },
        { id: 28, name: "Beach Glass", category: "luxury", price: 199, img: "./images/luxury_gel_candle.png" },
        { id: 29, name: "Beer Glass", category: "drinks", price: 449, img: "./images/drinks_candle.png" },
        { id: 30, name: "Cocktail Glass (Custom)", category: "drinks", price: 249, img: "./images/drinks_candle.png" },
        { id: 31, name: "Mocktail Glass (Custom)", category: "drinks", price: 299, img: "./images/drinks_candle.png" },
        { id: 32, name: "JD Candle", category: "drinks", price: 299, img: "./images/drinks_candle.png" },
        { id: 33, name: "Cheese Cube Candle", category: "mould", price: 249, img: "./images/mould_candle.png" },
        { id: 34, name: "Lotus Glow Candle", category: "mould", price: 99, img: "./images/mould_candle.png" },
        { id: 35, name: "Twist Pillars", category: "mould", price: 99, img: "./images/mould_candle.png" },
        { id: 36, name: "Peony (Custom)", category: "mould", price: 249, img: "./images/mould_candle.png" },
        { id: 37, name: "Rainbow Candle", category: "mould", price: 199, img: "./images/mould_candle.png" },
        { id: 38, name: "Tripple bubble", category: "mould", price: 149, img: "./images/mould_candle.png" },
        { id: 39, name: "Double Bubble", category: "mould", price: 79, img: "./images/mould_candle.png" },
        { id: 40, name: "Garden Grace", category: "mould", price: 149, img: "./images/mould_candle.png" },
        { id: 41, name: "Coastal charms", category: "mould", price: 149, img: "./images/mould_candle.png" },
        { id: 42, name: "Greek Roman Pillar", category: "mould", price: 129, img: "./images/mould_candle.png" },
        { id: 43, name: "Rose Bliss", category: "mould", price: 79, img: "./images/mould_candle.png" },
        { id: 44, name: "Bubble Pillar", category: "mould", price: 149, img: "./images/mould_candle.png" },
        { id: 45, name: "Big Teddy", category: "mould", price: 49, img: "./images/mould_candle.png" },
        { id: 46, name: "Small Teddy", category: "mould", price: 45, img: "./images/mould_candle.png" },
        { id: 47, name: "Elephanty", category: "mould", price: 99, img: "./images/mould_candle.png" },
        { id: 48, name: "Giraffee", category: "mould", price: 99, img: "./images/mould_candle.png" },
        { id: 49, name: "Tulips", category: "mould", price: 49, img: "./images/mould_candle.png" },
        { id: 50, name: "Daisy Candles", category: "mould", price: 39, img: "./images/mould_candle.png" },
        { id: 51, name: "Little Hearts", category: "mould", price: 59, img: "./images/mould_candle.png" },
        { id: 52, name: "Plain Pillar", category: "mould", price: 99, img: "./images/mould_candle.png" },
        { id: 53, name: "Laddoo", category: "festive", price: 49, img: "./images/diwali_sweets_candle.png" },
        { id: 54, name: "Modak", category: "festive", price: 49, img: "./images/diwali_sweets_candle.png" },
        { id: 55, name: "Kaju Katli", category: "festive", price: 35, img: "./images/diwali_sweets_candle.png" },
        { id: 56, name: "Pack of 3 Box (Custom)", category: "festive", price: 149, img: "./images/diwali_sweets_candle.png" },
        { id: 57, name: "Big Urli - Rose & Pearls Urli", category: "festive", price: 149, img: "./images/diwali_sweets_candle.png" },
        { id: 58, name: "Tri Urli", category: "festive", price: 129, img: "./images/diwali_sweets_candle.png" },
        { id: 59, name: "Golden Flake Urli", category: "festive", price: 149, img: "./images/diwali_sweets_candle.png" },
        { id: 60, name: "Round Urli", category: "festive", price: 249, img: "./images/diwali_sweets_candle.png" },
        { id: 61, name: "Reindeer (Custom)", category: "festive", price: 99, img: "./images/diwali_sweets_candle.png" },
        { id: 62, name: "C'mas Bubble", category: "festive", price: 149, img: "./images/diwali_sweets_candle.png" },
        { id: 63, name: "Big Pine Tree (Custom)", category: "festive", price: 149, img: "./images/diwali_sweets_candle.png" },
        { id: 64, name: "Small Pine Tree(Custom)", category: "festive", price: 99, img: "./images/diwali_sweets_candle.png" },
        { id: 65, name: "C'mas Cake Glass", category: "festive", price: 149, img: "./images/diwali_sweets_candle.png" },
        { id: 66, name: "C'mas Frosted Flakes (Custom)", category: "festive", price: 129, img: "./images/diwali_sweets_candle.png" },
        { id: 67, name: "C'mas Sachets", category: "festive", price: 129, img: "./images/diwali_sweets_candle.png" },
        { id: 68, name: "C'mas Double Bubble", category: "festive", price: 79, img: "./images/diwali_sweets_candle.png" },
        { id: 69, name: "Held with Love", category: "festive", price: 149, img: "./images/diwali_sweets_candle.png" },
        { id: 70, name: "Blossom Pillar", category: "festive", price: 129, img: "./images/diwali_sweets_candle.png" },
        { id: 71, name: "Bouquet (Custom)", category: "festive", price: 149, img: "./images/diwali_sweets_candle.png" },
        { id: 72, name: "Layered Love", category: "festive", price: 79, img: "./images/diwali_sweets_candle.png" },
        { id: 73, name: "Hearts Wax Candle", category: "festive", price: 99, img: "./images/diwali_sweets_candle.png" },
        { id: 74, name: "Lovers Grid", category: "festive", price: 99, img: "./images/diwali_sweets_candle.png" },
        { id: 75, name: "Tulip Bow", category: "festive", price: 65, img: "./images/diwali_sweets_candle.png" },
        { id: 76, name: "Hearts spread Glass", category: "festive", price: 129, img: "./images/diwali_sweets_candle.png" },
        { id: 77, name: "Couple Bow Candle (Custom)", category: "festive", price: 199, img: "./images/diwali_sweets_candle.png" },
        { id: 78, name: "Daisy Bow", category: "festive", price: 65, img: "./images/diwali_sweets_candle.png" },
        { id: 79, name: "Valentine Mini Hamper", category: "festive", price: 449, img: "./images/diwali_sweets_candle.png" },
        { id: 80, name: "Couple hearts (Custom)", category: "festive", price: 199, img: "./images/diwali_sweets_candle.png" },
        { id: 81, name: "Roses Sachets (Custom)", category: "festive", price: 99, img: "./images/diwali_sweets_candle.png" },
        { id: 82, name: "Breaths Sachets (Custom)", category: "festive", price: 99, img: "./images/diwali_sweets_candle.png" },
        { id: 83, name: "Flake Sachets (Custom)", category: "festive", price: 99, img: "./images/diwali_sweets_candle.png" },
        { id: 84, name: "Daisy Sachet (Custom)", category: "festive", price: 99, img: "./images/diwali_sweets_candle.png" },
        { id: 85, name: "Sachet (Custom)", category: "festive", price: 129, img: "./images/diwali_sweets_candle.png" },
        { id: 86, name: "Baby Tealights", category: "festive", price: 35, img: "./images/diwali_sweets_candle.png" },
        { id: 87, name: "Baby Glass Latte", category: "festive", price: 99, img: "./images/diwali_sweets_candle.png" },
        { id: 88, name: "Baby Vanilla Mini Glass", category: "festive", price: 99, img: "./images/diwali_sweets_candle.png" }
    ];

    const productContainer = document.getElementById('product-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    let currentLimit = 8;
    let currentFilter = 'all';

    function renderProducts() {
        if (!productContainer) return;
        
        productContainer.innerHTML = '';
        const filtered = products.filter(p => currentFilter === 'all' || p.category === currentFilter);
        const displayed = filtered.slice(0, currentLimit);

        displayed.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card fade-in-up';
            card.innerHTML = `
                <div class="product-img">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">₹${product.price}</div>
                </div>
            `;
            productContainer.appendChild(card);
        });

        if (currentLimit >= filtered.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            currentLimit = 8;
            renderProducts();
        });
    });

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentLimit += 8;
            renderProducts();
        });
    }

    renderProducts();

    // --- EXISTING LOGIC ---
    // Scroll Animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation to feature boxes and step cards
    const animatedElements = document.querySelectorAll('.feature-box, .step-card, .meaning-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});
