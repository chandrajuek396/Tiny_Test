window.addEventListener('DOMContentLoaded', () => {
    const start = performance.now();

    // heavy blocking (kills performance score)
    while (performance.now() - start < 3000) {
        Math.sqrt(Math.random());
    }
});

// random useless JS (bad practice)
setInterval(() => {
    console.log("running...");
}, 100);