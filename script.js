// Script Global - Backdock
console.log("Backdock JS Loaded");
const AFFILIATE_LINK = "https://s.shopee.co.id/7VAPGS2RC5"; // Ganti LINK SHOPEE Global di sini
const TIKTOK_LINK = "https://vt.tokopedia.com/t/ZS91JGDdq1DXA-ynBxv/"; // Placeholder TikTok Link

let closeAttempts = 0;

function openAffiliate() {
    window.open(AFFILIATE_LINK, '_blank');
}

function openTiktok() {
    window.open(TIKTOK_LINK, '_blank');
}

function handlePopupClose(e) {
    if (e) e.preventDefault();
    if (closeAttempts === 0) {
        window.open(AFFILIATE_LINK, '_blank');
        closeAttempts++;
    } else {
        const popup = document.getElementById('adPopup');
        if (popup) popup.classList.remove('active');
    }
}

// Mobile Popup Timer
if (window.innerWidth < 768) {
    setTimeout(() => {
        const popup = document.getElementById('adPopup');
        if (popup) popup.classList.add('active');
    }, 3000);
}

// Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('superMenu');
    const icon = document.getElementById('menuIcon');
    if (menu) menu.classList.toggle('active');

    if (icon && menu) {
        if (menu.classList.contains('active')) {
            icon.innerHTML = '<path d="M6 18L18 6M6 6l12 12"/>';
        } else {
            icon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16"/>';
        }
    }
}

// Close Menu on Click Outside
document.addEventListener('click', function (event) {
    const menu = document.getElementById('superMenu');
    const btn = document.querySelector('.fab-left .fab-btn');
    if (menu && btn && !menu.contains(event.target) && !btn.contains(event.target) && menu.classList.contains('active')) {
        toggleMenu();
    }
});

// Scroll Navbar
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    }
});
