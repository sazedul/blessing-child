const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});



// Counter animation function
function animateCounter(elementId, finalValue, duration) {
    let element = document.getElementById(elementId);
    let startTime = null;
    const isPlusSign = finalValue.toString().includes('+');
    const numericValue = isPlusSign ? parseInt(finalValue) : finalValue;

    function counterAnimation(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentValue = Math.floor(progress * numericValue);

        element.textContent = isPlusSign ? currentValue + '+' : currentValue;

        if (progress < 1) {
            requestAnimationFrame(counterAnimation);
        } else {
            element.textContent = isPlusSign ? numericValue + '+' : numericValue;
        }
    }

    requestAnimationFrame(counterAnimation);
}

// Initialize counters when the page loads
document.addEventListener('DOMContentLoaded', function () {
    // Wait a bit for the page to render before starting animation
    setTimeout(() => {
        animateCounter('teachers-counter', 22, 2000);
        animateCounter('kids-counter', 351, 2000);
        animateCounter('parents-counter', 566, 2000);
        animateCounter('awards-counter', '300+', 2000);
    }, 500);
});
