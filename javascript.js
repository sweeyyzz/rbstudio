// ==========================================
// ANIMATION DE CHANGEMENT DE TYPO AUTOMATIQUE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const typoElement = document.querySelector('.animated-typo');
    if (!typoElement) return;

    // Liste des classes de typo à alterner
    const typoClasses = [
        'typo-1', 'typo-2', 'typo-3', 'typo-4',
        'typo-5', 'typo-6', 'typo-7', 'typo-8'
    ];

    let currentIndex = 0;
    let isTransitioning = false;

    function changeTypo() {
        if (isTransitioning) return;
        isTransitioning = true;

        // Effet de sortie
        typoElement.classList.remove('fade-in', 'blur-in');
        typoElement.classList.add('blur-out');

        setTimeout(() => {
            // Enlever la classe actuelle
            typoClasses.forEach(cls => {
                typoElement.classList.remove(cls);
            });

            // Passer à la suivante
            currentIndex = (currentIndex + 1) % typoClasses.length;
            typoElement.classList.add(typoClasses[currentIndex]);

            // Effet d'entrée
            typoElement.classList.remove('blur-out');
            typoElement.classList.add('blur-in');

            setTimeout(() => {
                typoElement.classList.remove('blur-in');
                isTransitioning = false;
            }, 400);

        }, 300);
    }

    // Démarrer l'animation toutes les 1.2 secondes
    setInterval(changeTypo, 1200);

    // Appliquer la première typo au chargement
    setTimeout(() => {
        typoElement.classList.add(typoClasses[0]);
        typoElement.classList.add('blur-in');
        setTimeout(() => {
            typoElement.classList.remove('blur-in');
        }, 400);
    }, 100);
});