const rangeInputs = document.querySelectorAll(".range-input input"),
priceInputs = document.querySelectorAll(".price-input span"),
range = document.querySelector(".slider .progress");

let priceGap = 1000; // Minimum gap entre les curseurs

// Mise à jour des curseurs en fonction de la modification des prix
rangeInputs.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputs[0].value),
            maxVal = parseInt(rangeInputs[1].value);

        // Empêcher les curseurs de se croiser et maintenir le gap
        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInputs[0].value = maxVal - priceGap;
            } else {
                rangeInputs[1].value = minVal + priceGap;
            }
        } else {
            // Mise à jour des valeurs textuelles
            priceInputs[0].textContent = `$${minVal}`;
            priceInputs[1].textContent = `$${maxVal}`;
            // Mettre à jour la barre de progression
            range.style.left = ((minVal / rangeInputs[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
        }
    });
});


const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.burger-menu');


burgerMenu.addEventListener('click', () => {
mobileMenu.classList.toggle('active');
});
