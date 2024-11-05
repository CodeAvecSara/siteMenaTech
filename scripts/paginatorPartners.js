const partners = [
    { name: "IBM", description: "Telecommunications & IT", image: "imgs/partners/partner1.png" },
    { name: "Huawei", description: "Telecommunications & IT", image: "imgs/partners/partner2.png" },
    { name: "SAP", description: "SaaS", image: "imgs/partners/partner3.png" },
    { name: "Meta", description: "Social media & networking", image: "imgs/partners/partner4.png" },
    { name: "Visa", description: "Fintech & financial services", image: "imgs/partners/partner5.png" },
    { name: "NVIDIA", description: "AI", image: "imgs/partners/partner6.png" },
    { name: "VisionFlow", description: "XR & Metaverse", image: "imgs/partners/partner7.png" },
    { name: "LinkedIn", description: "HR & Future of Work", image: "imgs/partners/partner8.png" },
    { name: "QualcoMM", description: "AI & machine learning", image: "imgs/partners/partner9.png" },
    { name: "Intercom", description: "AI & machine learning", image: "imgs/partners/partner10.png" },
    { name: "Oracle", description: "Cloud computing & database", image: "imgs/partners/partner11.png" },
    { name: "Salesforce", description: "CRM & SaaS", image: "imgs/partners/partner12.png" },
    { name: "Amazon Web Services", description: "Cloud computing", image: "imgs/partners/partner13.png" },
    { name: "Google Cloud", description: "Cloud & AI services", image: "imgs/partners/partner14.png" },
    { name: "Adobe", description: "Creative software & marketing", image: "imgs/partners/partner15.png" },
    { name: "Microsoft", description: "Software & AI", image: "imgs/partners/partner16.png" },
];

const itemsPerPage = 8;
let currentPage = 1;

function displayPartners(page) {
    const container = document.getElementById("partners-container");
    container.innerHTML = "";

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentPartners = partners.slice(start, end);

    currentPartners.forEach(partner => {
        const partnerDiv = document.createElement("div");
        partnerDiv.classList.add("bg-white", "shadow-lg", "overflow-hidden", "max-w-xs", "md:max-w-sm", "lg:max-w-md", "mx-auto");
        partnerDiv.innerHTML = `
            <img src="${partner.image}" alt="${partner.name}" class="w-full h-48 object-cover">
            <div class="p-4 bg-[#2d256c] text-white text-center">
                <h3 class="font-semibold">${partner.name}</h3>
                <p class="text-sm">${partner.description}</p>
            </div>
        `;
        container.appendChild(partnerDiv);
    });
}

function changePage(newPage) {
    const totalPages = Math.ceil(partners.length / itemsPerPage);
    if (newPage > 0 && newPage <= totalPages) {
        currentPage = newPage;
        displayPartners(currentPage);
        updatePagination();
    }
}

function updatePagination() {
    const totalPages = Math.ceil(partners.length / itemsPerPage);
    const pagination = document.getElementById("pagination");

    // Réinitialisez le contenu de la pagination
    pagination.innerHTML = '';

    // Ajoutez le bouton précédent
    const prevButton = document.createElement('li');
    prevButton.innerHTML = `
        <button class="px-4 py-2" onclick="changePage(currentPage - 1)" ${currentPage === 1 ? 'disabled' : ''}>&larr; Précédent</button>
    `;
    pagination.appendChild(prevButton);

    // Créez les liens de pages
    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.innerHTML = `
            <a href="#" class="flex items-center justify-center px-4 py-2 text-sm font-medium ${currentPage === i ? 'bg-[#2d256c] text-white' : 'text-gray-700 bg-transparent hover:bg-[#2d256c] hover:text-white'} transition duration-200" onclick="changePage(${i})">${i}</a>
        `;
        pagination.appendChild(pageItem);
    }

    // Ajoutez le bouton suivant
    const nextButton = document.createElement('li');
    nextButton.innerHTML = `
        <button class="px-4 py-2" onclick="changePage(currentPage + 1)" ${currentPage === totalPages ? 'disabled' : ''}>Suivant &rarr;</button>
    `;
    pagination.appendChild(nextButton);
}


displayPartners(currentPage);
updatePagination();