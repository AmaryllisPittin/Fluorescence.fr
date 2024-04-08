// Sélection des éléments de filtre
const lightSelect = document.getElementById('light');
const collectionSelect = document.getElementById('collection');
const baskets = document.querySelectorAll('.card-container__a');

// Fonction de filtrage pour les lumières
lightSelect.addEventListener('change', () => {
    const selectedValue = lightSelect.value;
    console.log("Valeur sélectionnée pour les lumières : ", selectedValue); // Ajoutez cette ligne pour afficher la valeur sélectionnée
    baskets.forEach(basket => {
        const basketLight = basket.getAttribute('data-light');
        console.log("Valeur de data-light pour ce panier : ", basketLight); // Ajoutez cette ligne pour afficher la valeur de data-light
        if (selectedValue === '' || basketLight === selectedValue) {
            basket.style.display = 'block'; // Afficher le panier
        } else {
            basket.style.display = 'none'; // Cacher le panier
        }
    });
});

// Fonction de filtrage pour la collection
collectionSelect.addEventListener('change', () => {
    const selectedValue = collectionSelect.value;
    console.log("Valeur sélectionnée pour la collection : ", selectedValue); // Ajoutez cette ligne pour afficher la valeur sélectionnée
    baskets.forEach(basket => {
        const basketCollection = basket.getAttribute('data-collection');
        console.log("Valeur de data-collection pour ce panier : ", basketCollection); // Ajoutez cette ligne pour afficher la valeur de data-collection
        if (selectedValue === '' || basketCollection === selectedValue) {
            basket.style.display = 'block'; // Afficher le panier
        } else {
            basket.style.display = 'none'; // Cacher le panier
        }
    });
});





