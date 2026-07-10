// This forces Sandboxels to wait until the game engine is fully ready
runAfterLoad(function() {
    
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
