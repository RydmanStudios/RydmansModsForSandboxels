document.addEventListener("DOMContentLoaded", function() {
    // Your mod code goes inside here!
    elements.magic_dust = {
        color: "#ff00ff",
        behavior: behaviors.POWDER,
        category: "powders",
        state: "solid",
        density: 1500,
        desc: "A glowing magical powder that floats down slowly.",
    };

    elementMoveLoop("magic_dust");
});
