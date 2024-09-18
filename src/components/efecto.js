const COLORS = ["#80ffd4", "#fff4", "#adff2f", "#fffc"];

const generateSpaceLayer = (size, selector, totalStars, duration) => {
    const layer = [];
    /* const totalStars = 200;*/
    /* crear bucle con el numero total de estrellas que queramos */
    for (let i = 0; i < totalStars; i++) {
        const colores = COLORS[Math.floor(Math.random() * COLORS.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${colores}, ${x}vw ${y + 100}vh ${colores}`);
        /* valor de [X], unidades, valor de [Y], unidades y desenfoque en este caso [0] y el color [white] */
    }
    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
};
generateSpaceLayer("2px", ".space-1", 200, "25s");
generateSpaceLayer("3px", ".space-2", 100, "20s");
generateSpaceLayer("4px", ".space-3", 25, "15s");