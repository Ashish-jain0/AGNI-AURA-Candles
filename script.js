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
        { id: 1, name: "Red Gel Volcano", category: "luxury", price: 249, img: "./images/luxury_gel_candle.png" },
        { id: 2, name: "Blue Gel Volcano", category: "luxury", price: 249, img: "./images/luxury_gel_candle.png" },
        { id: 3, name: "Peony Glass", category: "luxury", price: 249, img: "./images/luxury_gel_candle.png" },
        { id: 4, name: "Sunflower Glass", category: "luxury", price: 199, img: "./images/luxury_gel_candle.png" },
        { id: 5, name: "Rose Gel Jar", category: "jars", price: 299, img: "./images/luxury_gel_candle.png" },
        { id: 6, name: "Vanilla Rose Jar", category: "jars", price: 299, img: "./images/luxury_gel_candle.png" },
        { id: 7, name: "Hearts Vanilla Jar", category: "jars", price: 249, img: "./images/luxury_gel_candle.png" },
        { id: 8, name: "Berries Gel Jar", category: "jars", price: 299, img: "./images/luxury_gel_candle.png" },
        { id: 9, name: "Cheese Cube", category: "mould", price: 249, img: "./images/mould_candle.png" },
        { id: 10, name: "Lotus Glow", category: "mould", price: 99, img: "./images/mould_candle.png" },
        { id: 11, name: "Twist Pillar", category: "mould", price: 99, img: "./images/mould_candle.png" },
        { id: 12, name: "Rainbow Candle", category: "mould", price: 199, img: "./images/mould_candle.png" },
        { id: 13, name: "Beer Glass", category: "drinks", price: 449, img: "./images/drinks_candle.png" },
        { id: 14, name: "Cocktail Glass", category: "drinks", price: 249, img: "./images/drinks_candle.png" },
        { id: 15, name: "Mocktail Glass", category: "drinks", price: 299, img: "./images/drinks_candle.png" },
        { id: 16, name: "JD Candle", category: "drinks", price: 299, img: "./images/drinks_candle.png" },
        { id: 17, name: "Laddoo", category: "festive", price: 49, img: "./images/diwali_sweets_candle.png" },
        { id: 18, name: "Modak", category: "festive", price: 49, img: "./images/diwali_sweets_candle.png" },
        { id: 19, name: "Kaju Katli", category: "festive", price: 35, img: "./images/diwali_sweets_candle.png" },
        { id: 20, name: "Big Urli", category: "festive", price: 149, img: "./images/diwali_sweets_candle.png" }
        // ... more can be added here
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
