const speakersData = [
    { name: "Brad Smith", title: "President & Vice Chair", company: "Microsoft", image: "imgs/speakers/speaker1.png" },
    { name: "Thomas Wolf", title: "Co-founder & Chief Science Officer", company: "Hugging Face", image: "imgs/speakers/speaker2.png" },
    { name: "Kuo Zhang", title: "President", company: "Alibaba.com", image: "imgs/speakers/speaker3.png" },
    { name: "Eileen Burbidge", title: "Founding Partner", company: "Passion Capital", image: "imgs/speakers/speaker4.png" },
    { name: "Tom Hale", title: "CEO", company: "Oura", image: "imgs/speakers/speaker5.png" },
    { name: "Abeer Alessa", title: "CEO & Co-founder", company: "The Bold Group", image: "imgs/speakers/speaker6.png" },
    { name: "Alex Johnson", title: "CTO", company: "Tech Innovations", image: "imgs/speakers/speaker7.png" },
    { name: "Lina Chen", title: "Head of Marketing", company: "Creative Labs", image: "imgs/speakers/speaker8.png" },
    { name: "Satoshi N.", title: "Blockchain Expert", company: "Crypto World", image: "imgs/speakers/speaker9.png" },
    { name: "Emily Zhang", title: "VP of Engineering", company: "SoftCloud", image: "imgs/speakers/speaker10.png" },
    { name: "Mark Lee", title: "Product Manager", company: "InnoVision", image: "imgs/speakers/speaker11.png" },
    { name: "Sara Thompson", title: "Chief Marketing Officer", company: "Bright Future", image: "imgs/speakers/speaker12.png" },
    // Ajout de 6 nouveaux intervenants pour la 3ème page
    { name: "Carlos Rivera", title: "Head of AI", company: "FutureTech", image: "imgs/speakers/speaker13.png" },
    { name: "Isabella Rossi", title: "Lead Data Scientist", company: "DataSolutions", image: "imgs/speakers/speaker14.png" },
    { name: "Miyu Takahashi", title: "Innovation Strategist", company: "NeoTech Labs", image: "imgs/speakers/speaker15.png" },
    { name: "Liam O'Connor", title: "Chief Operations Officer", company: "Global Ventures", image: "imgs/speakers/speaker16.png" },
    { name: "Sophie Dubois", title: "Product Designer", company: "Creative Minds", image: "imgs/speakers/speaker17.png" },
    { name: "Omar El-Sayed", title: "Cybersecurity Expert", company: "SecureNet", image: "imgs/speakers/speaker18.png" }
];

const ITEMS_PER_PAGE = 6;
let currentPage = 0;

// Fonction pour afficher les "speakers" de la page actuelle
function displaySpeakers() {
    const speakersContainer = document.getElementById('speakers-container');
    speakersContainer.innerHTML = '';

    // Calculer les intervenants à afficher pour la page actuelle
    const start = currentPage * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const speakersToDisplay = speakersData.slice(start, end);

    speakersToDisplay.forEach(speaker => {
        const speakerCard = `
            <div class="bg-white shadow-lg overflow-hidden max-w-xs md:max-w-sm lg:max-w-md mx-auto">
                <img src="${speaker.image}" alt="${speaker.name}" class="w-full h-48 object-cover">
                <div class="p-4 bg-[#2d256c] text-white text-center">
                    <h3 class="font-semibold">${speaker.name}</h3>
                    <p class="text-sm">${speaker.title}<br>${speaker.company}</p>
                </div>
            </div>
        `;
        speakersContainer.innerHTML += speakerCard;
    });
}

// Fonction pour changer de page
function changePage(page) {
    if (page >= 0 && page < Math.ceil(speakersData.length / ITEMS_PER_PAGE)) {
        currentPage = page;
        displaySpeakers();
        updatePagination();
    }
}

// Fonction pour mettre à jour le paginator
function updatePagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    // Bouton précédent
    paginationContainer.innerHTML += `
        <li>
            <button class="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-transparent hover:bg-[#2d256c] hover:text-white transition duration-200" onclick="changePage(currentPage - 1)" ${currentPage === 0 ? 'disabled' : ''}>
                &larr; Précédent
            </button>
        </li>
    `;

    // Pages
    for (let i = 0; i < Math.ceil(speakersData.length / ITEMS_PER_PAGE); i++) {
        paginationContainer.innerHTML += `
            <li>
                <button class="flex items-center justify-center px-4 py-2 text-sm font-medium ${i === currentPage ? 'text-white bg-[#2d256c]' : 'text-gray-700 bg-transparent'} hover:bg-[#2d256c] hover:text-white transition duration-200" onclick="changePage(${i})">
                    ${i + 1}
                </button>
            </li>
        `;
    }

    // Bouton suivant
    paginationContainer.innerHTML += `
        <li>
            <button class="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-transparent hover:bg-[#2d256c] hover:text-white transition duration-200" onclick="changePage(currentPage + 1)" ${currentPage === Math.ceil(speakersData.length / ITEMS_PER_PAGE) - 1 ? 'disabled' : ''}>
                Suivant &rarr;
            </button>
        </li>
    `;
}

// Initialiser la première page
displaySpeakers();
updatePagination();
