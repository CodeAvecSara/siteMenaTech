document.querySelectorAll('.date-circle').forEach(circle => {
    circle.addEventListener('click', function() {
        // Supprime la classe 'selected' de tous les cercles
        document.querySelectorAll('.date-circle').forEach(c => c.classList.remove('selected'));
        
        // Ajoute la classe 'selected' au cercle cliqué
        this.classList.add('selected');
        
        // Affiche le jour sélectionné dans la console
        console.log(`Jour sélectionné : ${this.textContent}`);
    });
});
