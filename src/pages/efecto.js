alert('holaaaaaaaaaa');


document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.getElementById("cocteles");
    const text = h1.textContent;
    h1.innerHTML = "";

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        span.textContent = text[i];
        span.classList.add(i % 2 === 0 ? "color1" : "color2");
        span.addEventListener("mouseenter", () => {
            span.classList.toggle("color1");
            span.classList.toggle("color2");
        });
        span.addEventListener("mouseleave", () => {
            span.classList.toggle("color1");
            span.classList.toggle("color2");
        });
        h1.appendChild(span);
    }
});