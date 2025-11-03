/* ===============================
   1. Loading Screen (Fade Out)
=============================== */
window.addEventListener("load", () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 600);
    }
});


/* ===============================
   2. Scroll Reveal Animation
=============================== */
function revealOnScroll() {
    const elements = document.querySelectorAll(".reveal");
    const triggerHeight = window.innerHeight - 80;

    elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < triggerHeight) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run once on load


/* ===============================
   3. Product Slider (Drag Scroll)
=============================== */
const slider = document.querySelector(".slider");

if (slider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.8; 
        slider.scrollLeft = scrollLeft - walk;
    });
}


/* ===============================
   4. Generate WhatsApp Order Link
=============================== */
function sendOrder(itemName) {
    const phone = "233249553472"; // <-- Replace with your real WhatsApp number
    const text = encodeURIComponent(`Hello Queenstel Bakery, I want to order: ${itemName}`);
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
}


/* ===============================
   5. Back to Top Smooth Scroll
=============================== */
const backToTopLinks = document.querySelectorAll('a[href="#top"]');

backToTopLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


/* ===============================
   6. Button Ripple Animation (Optional)
=============================== */
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        circle.classList.add("ripple");
        this.appendChild(circle);

        const diameter = Math.max(this.clientWidth, this.clientHeight);
        circle.style.width = circle.style.height = `${diameter}px`;

        const rect = this.getBoundingClientRect();
        circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
        circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;

        setTimeout(() => circle.remove(), 600);
    });
});
