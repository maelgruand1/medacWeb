export class actions {
    constructor() {
        const elements = {
            descriptionButton: document.getElementById("seeDescription"),
            descriptionSection: document.getElementById("descrip"),
            actionsSection: document.getElementById("actions"),
            showButton: document.getElementById("show"),
            hideButton: document.getElementById("hide"),
            actButton: document.getElementById("act"),
            hiddenClass: "hidden", // Classe CSS pour masquer les éléments
        };

        // Montrer ou cacher la section "descrip" lorsqu'on clique sur "Description"
        elements.descriptionButton.addEventListener("click", () => {
            elements.descriptionSection.classList.toggle(elements.hiddenClass);
        });

        // Montrer la section "actions" lorsqu'on clique sur "Mostrar"
        elements.showButton.addEventListener("click", () => {
            elements.actionsSection.classList.remove(elements.hiddenClass);
        });

        // Cacher la section "actions" lorsqu'on clique sur "Ocultar"
        elements.hideButton.addEventListener("click", () => {
            elements.actionsSection.classList.add(elements.hiddenClass);
        });

        // Action sur le bouton "Actuar"
        elements.actButton.addEventListener("click", () => {
            console.log("Le bouton 'Actuar' a été cliqué !");
        });
    }
}

// Instancier la classe "actions" après le chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
    new actions();
});
