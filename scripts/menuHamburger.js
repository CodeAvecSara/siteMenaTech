const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');  // Basculer en mode flex pour l'affichage en colonne en version mobile
});
