// Données des événements pour chaque jour
const eventsData = {
    10: [
        { title: "Big Data & Analytics", description: "Data Lakes vs. Data Warehouses: Choosing the Right Strategy", time: "9:00 - 10:00", stage: "Stage 1" },
        { title: "AI & Machine Learning", description: "Understanding Deep Learning Architectures", time: "10:30 - 12:00", stage: "Stage 2" }
    ],
    11: [
        { title: "Blockchain & Fintech", description: "DeFi (Decentralized Finance): The Next Financial Revolution?", time: "10:30 - 12:00", stage: "Stage 2" },
        { title: "Cybersecurity", description: "Protecting Data in the Age of Cloud", time: "14:00 - 15:30", stage: "Stage 1" }
    ],
    12: [
        { title: "Quantum Computing", description: "Quantum Supremacy: What It Means for the Future of Technology", time: "9:00 - 10:30", stage: "Stage 3" },
        { title: "Sustainable Tech", description: "Green Computing: Reducing the Carbon Footprint of Data Centers", time: "11:00 - 12:30", stage: "Stage 1" }
    ],
    13: [
        { title: "IoT & Smart Cities", description: "Connecting the Dots: How IoT is Powering Smart City Infrastructure", time: "9:00 - 10:00", stage: "Stage 1" },
        { title: "Digital Transformation", description: "Adapting to a Rapidly Changing Digital World", time: "10:30 - 12:00", stage: "Stage 2" },
        { title: "Ethics in AI", description: "AI Bias: Ensuring Fair and Transparent Algorithms", time: "14:00 - 15:30", stage: "Stage 3" }
    ],
    14: [
        { title: "5G Technology", description: "5G Networks and Their Impact on Businesses", time: "9:00 - 10:00", stage: "Stage 1" },
        { title: "Augmented Reality", description: "The Future of AR in E-Commerce", time: "10:30 - 12:00", stage: "Stage 2" },
        { title: "AI in Healthcare", description: "Using AI to Improve Patient Outcomes", time: "13:00 - 14:30", stage: "Stage 3" }
    ],
    15: [
        { title: "Robotics & Automation", description: "The Rise of Autonomous Robots in Industry 4.0", time: "9:00 - 10:30", stage: "Stage 1" },
        { title: "Cybersecurity", description: "The Future of Cyber Defense and Cyber Threats", time: "11:00 - 12:30", stage: "Stage 2" },
        { title: "Cloud Computing", description: "Hybrid vs. Multi-Cloud: Choosing the Best Strategy", time: "14:00 - 15:30", stage: "Stage 3" }
    ],
    16: [
        { title: "Digital Twins", description: "Building Digital Twins for Optimized Manufacturing", time: "9:00 - 10:00", stage: "Stage 1" },
        { title: "Data Privacy", description: "GDPR and Data Compliance in a Globalized World", time: "10:30 - 12:00", stage: "Stage 2" },
        { title: "VR in Education", description: "How Virtual Reality is Changing Learning Experiences", time: "14:00 - 15:30", stage: "Stage 3" }
    ]
};

// Variable pour le jour sélectionné
let currentSelectedDay = 10; // Initialiser le jour par défaut

// Fonction pour afficher les événements en fonction du jour sélectionné et de la recherche
function displayEvents(day, searchQuery = '') {
    const eventsContainer = document.getElementById("events-container");
    eventsContainer.innerHTML = "";  // Vider le conteneur des événements précédents

    const events = eventsData[day] || [];  // Récupérer les événements pour le jour sélectionné

    // Filtrer les événements selon la recherche
    const filteredEvents = events.filter(event => 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Afficher les événements filtrés
    filteredEvents.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.className = "flex justify-between items-center w-full bg-[#FAF6FB] p-4 rounded-md";

        eventDiv.innerHTML = `
            <div class="flex-1 space-y-2">
                <h2 class="text-black text-lg md:text-2xl font-bold">${event.title}</h2>
                <p class="text-black text-sm md:text-lg">${event.description}</p>
                <span class="block text-black text-sm md:text-base">${event.time}</span>
            </div>
            <button class="px-4 py-2 rounded-l-full mt-12" style="background-color: #0dacc3; color: white; border: 2px solid #5c9ec1; width: 120px;">
                ${event.stage}
            </button>
        `;

        eventsContainer.appendChild(eventDiv);
    });

    // Afficher un message si aucun événement ne correspond à la recherche
    if (filteredEvents.length === 0) {
        eventsContainer.innerHTML = "<p>Aucun événement trouvé.</p>";
    }
}

// Afficher les événements du jour initial (par exemple, le jour 10)
displayEvents(currentSelectedDay);

// Événement de saisie sur la barre de recherche
document.getElementById('search-input').addEventListener('input', function() {
    const searchValue = this.value;
    displayEvents(currentSelectedDay, searchValue); // Afficher les événements filtrés par jour sélectionné
});

// Exemple de gestionnaire d'événements pour les cercles de date
document.querySelectorAll('.date-circle').forEach(circle => {
    circle.addEventListener('click', function() {
        const day = parseInt(this.textContent);
        currentSelectedDay = day; // Mettre à jour le jour sélectionné
        displayEvents(day, document.getElementById('search-input').value); // Afficher les événements pour le jour sélectionné
    });
});
