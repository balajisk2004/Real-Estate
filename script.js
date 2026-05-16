AOS.init({ duration: 1000, once: true, offset: 100 });

const locations = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Jaipur", "Goa", "Ahmedabad"];
const propertyTypes = ["Apartment", "Villa", "Studio", "Penthouse", "Townhouse"];
const amenitiesList = ["Swimming Pool", "Gym", "Parking", "Garden", "Security", "Furnished"];

const ownersList = [
    { name: "Rajesh", phone: "+919876512345", email: "rajesh.sharma@example.com" },
    { name: "Priya Mehta", phone: "+918765423456", email: "priya.mehta@example.com" },
    { name: "Amit Kumar", phone: "+917654334567", email: "amit.kumar@example.com" },
    { name: "Neha Singh", phone: "+916543245678", email: "neha.singh@example.com" },
    { name: "Vikram Patel", phone: "+919887654321", email: "vikram.patel@example.com" },
    { name: "Anjali Nair", phone: "+918765432109", email: "anjali.nair@example.com" },
    { name: "Suresh Reddy", phone: "+917654321098", email: "suresh.reddy@example.com" },
    { name: "Kavita Joshi", phone: "+916543210987", email: "kavita.joshi@example.com" },
    { name: "Manish Gupta", phone: "+919876543210", email: "manish.gupta@example.com" },
    { name: "Deepa Iyer", phone: "+918765434567", email: "deepa.iyer@example.com" },
    { name: "Rohan Desai", phone: "+917654345678", email: "rohan.desai@example.com" },
    { name: "Swati Kulkarni", phone: "+916543456789", email: "swati.kulkarni@example.com" },
    { name: "Arjun Nair", phone: "+919876545678", email: "arjun.nair@example.com" },
    { name: "Meera Menon", phone: "+918765656789", email: "meera.menon@example.com" },
    { name: "Karthik Rajan", phone: "+917654767890", email: "karthik.rajan@example.com" },
    { name: "Divya Krishnan", phone: "+916543878901", email: "divya.krishnan@example.com" },
    { name: "Nikhil Shah", phone: "+919876589012", email: "nikhil.shah@example.com" },
    { name: "Rekha Verma", phone: "+918765690123", email: "rekha.verma@example.com" },
    { name: "Tarun Malhotra", phone: "+917654701234", email: "tarun.malhotra@example.com" },
    { name: "Shreya Saxena", phone: "+916543812345", email: "shreya.saxena@example.com" },
    { name: "Kunal Chopra", phone: "+919987654321", email: "kunal.chopra@example.com" },
    { name: "Pooja Bhatia", phone: "+918876543210", email: "pooja.bhatia@example.com" },
    { name: "Rahul Khanna", phone: "+917765432109", email: "rahul.khanna@example.com" },
    { name: "Sneha Kapoor", phone: "+916654321098", email: "sneha.kapoor@example.com" },
    { name: "Manoj Yadav", phone: "+919865432109", email: "manoj.yadav@example.com" },
    { name: "Jyoti Sinha", phone: "+918754321098", email: "jyoti.sinha@example.com" },
    { name: "Prakash Iyer", phone: "+917643210987", email: "prakash.iyer@example.com" },
    { name: "Lata Shenoy", phone: "+916532109876", email: "lata.shenoy@example.com" },
    { name: "Gaurav Thakur", phone: "+919821098765", email: "gaurav.thakur@example.com" },
    { name: "Nandini Rao", phone: "+918710987654", email: "nandini.rao@example.com" },
    { name: "Siddharth Mistry", phone: "+917609876543", email: "siddharth.mistry@example.com" },
    { name: "Anushka Sharma", phone: "+916598765432", email: "anushka.sharma@example.com" },
    { name: "Varun Dhawan", phone: "+919487654321", email: "varun.dhawan@example.com" },
    { name: "Karishma Tanna", phone: "+918376543210", email: "karishma.tanna@example.com" },
    { name: "Aditya Roy", phone: "+917265432109", email: "aditya.roy@example.com" },
    { name: "Ishita Dutta", phone: "+916154321098", email: "ishita.dutta@example.com" },
    { name: "Ritesh Deshmukh", phone: "+919043210987", email: "ritesh.deshmukh@example.com" },
    { name: "Genelia D'Souza", phone: "+918932109876", email: "genelia.dsouza@example.com" },
    { name: "John Abraham", phone: "+917821098765", email: "john.abraham@example.com" },
    { name: "Bipasha Basu", phone: "+916710987654", email: "bipasha.basu@example.com" },
    { name: "Shahid Kapoor", phone: "+919609876543", email: "shahid.kapoor@example.com" },
    { name: "Mira Rajput", phone: "+918598765432", email: "mira.rajput@example.com" }
];

const uniqueImages = [
'images/img1.jpg',
'images/img2.jpg',
'images/img3.jpg',
'images/img4.jpg',
'images/img5.jpg',
'images/img6.jpg',
'images/img7.jpg',
'images/img8.jpg',
'images/img9.jpg',
'images/img10.jpg',
'images/img12.jpg',
'images/img13.jpg',
'images/img14.jpg',
'images/img15.jpg',
'images/img16.jpg',
'images/img17.jpg',
'images/img18.jpg',
'images/img19.jpg',
'images/img20.jpg',
'images/img21.jpg',
'images/img22.jpg',
'images/img23.jpg',
'images/img24.jpg',
'images/img25.jpg',
'images/img26.jpg',
'images/img27.jpg',
'images/img28.jpg',
'images/img29.jpg',
'images/img30.jpg',
'images/img31.jpg',
'images/img32.jpg',
'images/img33.jpg',
'images/img34.jpg',
'images/img35.jpg',
'images/img36.jpg',
'images/img37.jpg',
'images/img38.jpg'
];


// Showcase properties
const showcaseProperties = {
    "villa-goa": { title: "Luxury Villa in Goa", price: 42500000, location: "Goa", type: "Villa", bedrooms: 4, area: 3500, amenities: ["Swimming Pool", "Gym", "Parking"], rating: 4.8, owner: ownersList[0], img: uniqueImages[8] },
    "apt-mumbai": { title: "Premium Apartment Mumbai", price: 15000000, location: "Mumbai", type: "Apartment", bedrooms: 2, area: 1250, amenities: ["Gym", "Parking", "Security"], rating: 4.5, owner: ownersList[1], img: uniqueImages[25] },
    "penthouse-delhi": { title: "Penthouse in Delhi", price: 32000000, location: "Delhi", type: "Penthouse", bedrooms: 3, area: 2100, amenities: ["Swimming Pool", "Gym", "Parking", "Security"], rating: 4.7, owner: ownersList[2], img: uniqueImages[29] }
};

// Generate Properties with unique owners
let buyProperties = [];
let rentProperties = [];
let idCounter = 1;

// Track used owners to ensure 
let ownerIndex = 0;

for (let i = 1; i <= 40; i++) {
    const location = locations[Math.floor(Math.random() * locations.length)];
    const bedrooms = [1, 2, 3, 4][Math.floor(Math.random() * 4)];
    const type = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
    const area = bedrooms === 1 ? 500 + Math.random() * 300 : bedrooms === 2 ? 800 + Math.random() * 400 : bedrooms === 3 ? 1200 + Math.random() * 500 : 1800 + Math.random() * 700;
    const basePrice = type === "Villa" ? 20000000 : type === "Penthouse" ? 25000000 : 5000000;
    const price = Math.round(basePrice + (bedrooms * 2000000) + (area * 2000));
    const amenities = amenitiesList.filter(() => Math.random() > 0.7);
    const rating = 3 + Math.random() * 2;
    const isNew = Math.random() > 0.8;
    const isHotDeal = Math.random() > 0.85;
    
    // Get unique owner for each property
    const owner = ownersList[ownerIndex % ownersList.length];
    ownerIndex++;
    
    buyProperties.push({
        id: idCounter++, 
        title: `${type} in ${location} - ${bedrooms} BHK`, 
        price: price, 
        location: location,
        type: type, 
        bedrooms: bedrooms, 
        area: Math.round(area), 
        amenities: amenities,
        rating: parseFloat(rating.toFixed(1)), 
        isNew: isNew, 
        isHotDeal: isHotDeal,
        owner: owner, 
        // img: uniqueImages[i % uniqueImages.length]  
        img: uniqueImages[Math.floor(Math.random() * uniqueImages.length)]
    });
}

for (let i = 1; i <= 25; i++) {
    const location = locations[Math.floor(Math.random() * locations.length)];
    const bedrooms = [1, 2, 3][Math.floor(Math.random() * 3)];
    const type = ["Apartment", "Studio", "Penthouse"][Math.floor(Math.random() * 3)];
    const area = bedrooms === 1 ? 500 + Math.random() * 300 : bedrooms === 2 ? 800 + Math.random() * 400 : 1000 + Math.random() * 500;
    const rentPrice = Math.round((50000 + (bedrooms * 25000) + (area * 30)) / 1000) * 1000;
    const amenities = amenitiesList.filter(() => Math.random() > 0.7);
    const rating = 3 + Math.random() * 2;
    
    // Get unique owner for each property
    const owner = ownersList[ownerIndex % ownersList.length];
    ownerIndex++;
    
    rentProperties.push({
        id: idCounter++, 
        title: `${type} for Rent in ${location} - ${bedrooms} BHK`, 
        rentPrice: rentPrice,
        location: location, 
        type: type, 
        bedrooms: bedrooms, 
        area: Math.round(area),
        amenities: amenities, 
        rating: parseFloat(rating.toFixed(1)),
        owner: owner, 
        // img: uniqueImages[i % uniqueImages.length]
        img: uniqueImages[Math.floor(Math.random() * uniqueImages.length)]
        
    });
}

// State
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let compareListBuy = JSON.parse(localStorage.getItem('compareListBuy')) || [];
let compareListRent = JSON.parse(localStorage.getItem('compareListRent')) || [];
let recentViews = JSON.parse(localStorage.getItem('recentViews')) || [];
let darkMode = localStorage.getItem('darkMode') === 'true';

function showNotification(message, type = 'success') {
    const toast = document.getElementById('liveToast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.innerHTML = message;
    const toastHeader = toast.querySelector('.toast-header');
    toastHeader.classList.remove('bg-success', 'bg-danger');
    toastHeader.classList.add(type === 'success' ? 'bg-success' : 'bg-danger');
    new bootstrap.Toast(toast).show();
}

function formatPrice(price, isRent = false) {
    if (isRent) {
        if (price >= 100000) return '₹' + (price / 100000).toFixed(1) + 'L/month';
        return '₹' + price.toLocaleString() + '/month';
    }
    if (price >= 10000000) return '₹' + (price / 10000000).toFixed(2) + 'Cr';
    if (price >= 100000) return '₹' + (price / 100000).toFixed(1) + 'L';
    return '₹' + price.toLocaleString();
}

function shareOnWhatsApp(property, isRent) {
    const price = isRent ? formatPrice(property.rentPrice, true) : formatPrice(property.price);
    const message = `Check out this amazing property!%0A%0A🏠 ${property.title}%0A📍 Location: ${property.location}%0A💰 Price: ${price}%0A🛏️ Bedrooms: ${property.bedrooms} BHK%0A📐 Area: ${property.area} sqft%0A👤 Owner: ${property.owner.name}%0A📞 Contact: ${property.owner.phone}%0A%0AView more at EstateIndia Pro - Your Dream Home Awaits!`;
    window.open(`https://wa.me/?text=${message}`, '_blank');
}

function chatWithOwner(property) {
    window.open(`https://wa.me/${property.owner.phone}?text=Hi%20${property.owner.name}%2C%20I%20am%20interested%20in%20your%20property%20"${property.title}".%20Please%20share%20more%20details.`, '_blank');
}

function printPropertyPDF(property, isRent) {
    const price = isRent ? formatPrice(property.rentPrice, true) : formatPrice(property.price);
    const printContent = `
        <html><head><title>${property.title}</title>
        <style>body{font-family:Arial;padding:20px;} .header{color:#2d6a4f;} .details{margin:20px 0;} .owner{background:#f0f0f0;padding:10px;}</style>
        </head><body>
        <div class="header"><h1>${property.title}</h1></div>
        <div class="details"><p><strong>Price:</strong> ${price}</p><p><strong>Location:</strong> ${property.location}</p>
        <p><strong>Type:</strong> ${property.type}</p><p><strong>Bedrooms:</strong> ${property.bedrooms} BHK</p>
        <p><strong>Area:</strong> ${property.area} sqft</p><p><strong>Amenities:</strong> ${property.amenities.join(', ') || 'None'}</p>
        <p><strong>Rating:</strong> ${property.rating} ⭐</p></div>
        <div class="owner"><h3>Owner Details</h3><p><strong>Name:</strong> ${property.owner.name}</p>
        <p><strong>Phone:</strong> ${property.owner.phone}</p><p><strong>Email:</strong> ${property.owner.email}</p></div>
        <hr><p>Generated by EstateIndia Pro - Your Dream Home Awaits!</p>
        </body></html>
    `;
    const win = window.open();
    win.document.write(printContent);
    win.document.close();
    win.print();
}

function showPropertyDetails(property, isRent = false) {
    const modalBody = document.getElementById('modalBody');
    document.getElementById('modalTitle').innerText = property.title;
    const priceDisplay = isRent ? formatPrice(property.rentPrice, true) : formatPrice(property.price);
    modalBody.innerHTML = `
        <img src="${property.img}" class="img-fluid rounded mb-3 w-100" style="max-height: 300px; object-fit: cover;">
        <h4 class="text-success">${priceDisplay}</h4>
        <p><i class="bi bi-geo-alt"></i> <strong>${property.location}</strong> | <i class="bi bi-building"></i> ${property.type}</p>
        <p><i class="bi bi-door-closed"></i> ${property.bedrooms} Bedroom(s) | <i class="bi bi-rulers"></i> ${property.area} sqft</p>
        <p><strong>Amenities:</strong> ${property.amenities.join(', ') || 'None'}</p>
        <div class="rating-stars mb-2"><strong>Rating:</strong> ${[1,2,3,4,5].map(s => `<i class="bi bi-star${s <= property.rating ? '-fill' : ''}"></i>`).join('')} (${property.rating})</div>
        <div class="owner-contact">
            <h6><i class="bi bi-person-circle"></i> Owner Details</h6>
            <p><i class="bi bi-person"></i> <strong>${property.owner.name}</strong></p>
            <p><i class="bi bi-telephone-fill"></i> <strong>Contact:</strong> ${property.owner.phone}</p>
            <p><i class="bi bi-envelope-fill"></i> <strong>Email:</strong> ${property.owner.email}</p>
        </div>
        <div class="action-buttons">
            <button class="btn btn-success" id="shareWhatsAppBtn"><i class="bi bi-whatsapp"></i> Share</button>
            <button class="btn btn-primary" id="chatOwnerBtn"><i class="bi bi-chat-dots"></i> Chat with Owner</button>
            <button class="btn btn-secondary" id="printPDFBtn"><i class="bi bi-file-pdf"></i> Print PDF</button>
            <button class="btn btn-outline-danger" id="favModalBtn"><i class="bi bi-heart"></i> Save to Favorites</button>
        </div>
    `;
    document.getElementById('shareWhatsAppBtn')?.addEventListener('click', () => shareOnWhatsApp(property, isRent));
    document.getElementById('chatOwnerBtn')?.addEventListener('click', () => chatWithOwner(property));
    document.getElementById('printPDFBtn')?.addEventListener('click', () => printPropertyPDF(property, isRent));
    document.getElementById('favModalBtn')?.addEventListener('click', () => {
        if (!favorites.includes(property.id)) {
            favorites.push(property.id);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            showNotification('Added to favorites!', 'success');
            updateFavBadge();
        }
        bootstrap.Modal.getInstance(document.getElementById('propertyModal')).hide();
    });
    new bootstrap.Modal(document.getElementById('propertyModal')).show();
}

function addRecentView(property, isRent = false) {
    recentViews = recentViews.filter(p => p.id !== property.id);
    recentViews.unshift({ ...property, isRent });
    if (recentViews.length > 10) recentViews.pop();
    localStorage.setItem('recentViews', JSON.stringify(recentViews));
    renderRecentList();
}

function renderRecentList() {
    const container = document.getElementById('recentList');
    if (!container) return;
    if (recentViews.length === 0) { container.innerHTML = '<p class="text-muted">No recent views</p>'; return; }
    container.innerHTML = recentViews.map(p => `
        <div class="recent-view-item">
            <div class="flex-grow-1" data-id="${p.id}" data-rent="${p.isRent}" style="cursor:pointer;">
                <b>${p.title}</b><br><small>${p.isRent ? formatPrice(p.rentPrice, true) : formatPrice(p.price)}</small>
            </div>
            <button class="delete-recent" data-id="${p.id}"><i class="bi bi-trash"></i></button>
        </div>
    `).join('');
    document.querySelectorAll('.recent-view-item .flex-grow-1').forEach(el => {
        el.addEventListener('click', () => {
            const id = parseInt(el.dataset.id);
            const isRent = el.dataset.rent === 'true';
            const prop = isRent ? rentProperties.find(p => p.id === id) : buyProperties.find(p => p.id === id);
            if (prop) showPropertyDetails(prop, isRent);
        });
    });
    document.querySelectorAll('.delete-recent').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            recentViews = recentViews.filter(p => p.id != btn.dataset.id);
            localStorage.setItem('recentViews', JSON.stringify(recentViews));
            renderRecentList();
        });
    });
}

function updateFavBadge() { document.getElementById('favCountBadge').innerText = favorites.length; }

// Section Functions
function initSection(sectionType) {
    const isRent = sectionType === 'rent';
    const properties = isRent ? rentProperties : buyProperties;
    const allLocations = [...new Set(properties.map(p => p.location))];
    const locationSelect = document.getElementById(`locationFilter${isRent ? 'Rent' : 'Buy'}`);
    if (locationSelect) {
        locationSelect.innerHTML = '<option value="all">All Locations</option>';
        allLocations.forEach(loc => { locationSelect.innerHTML += `<option value="${loc}">${loc}</option>`; });
    }
    const maxPrice = isRent ? 300000 : 100000000;
    const slider = document.getElementById(`priceSlider${isRent ? 'Rent' : 'Buy'}`);
    if (slider && !slider.noUiSlider) {
        noUiSlider.create(slider, {
            start: [0, maxPrice], connect: true, range: { min: 0, max: maxPrice },
            format: { to: v => Math.round(v), from: v => Math.round(v) }
        });
        slider.noUiSlider.on('update', (values) => {
            document.getElementById(`minPriceLabel${isRent ? 'Rent' : 'Buy'}`).innerHTML = isRent ? '₹' + parseInt(values[0]).toLocaleString() : '₹' + (parseInt(values[0]) / 10000000).toFixed(1) + 'Cr';
            document.getElementById(`maxPriceLabel${isRent ? 'Rent' : 'Buy'}`).innerHTML = isRent ? '₹' + parseInt(values[1]).toLocaleString() : '₹' + (parseInt(values[1]) / 10000000).toFixed(1) + 'Cr';
            filterProperties(sectionType);
        });
    }
    filterProperties(sectionType);
}

function filterProperties(sectionType) {
    const isRent = sectionType === 'rent';
    const properties = isRent ? rentProperties : buyProperties;
    let filtered = [...properties];
    const searchTerm = document.getElementById(`searchTitle${isRent ? 'Rent' : 'Buy'}`)?.value.toLowerCase() || '';
    const location = document.getElementById(`locationFilter${isRent ? 'Rent' : 'Buy'}`)?.value || 'all';
    const bedrooms = document.getElementById(`bedroomFilter${isRent ? 'Rent' : 'Buy'}`)?.value || 'any';
    const sortVal = document.getElementById(`sortSelect${isRent ? 'Rent' : 'Buy'}`)?.value || 'default';
    const minArea = parseInt(document.getElementById(`minArea${isRent ? 'Rent' : 'Buy'}`)?.value) || 0;
    const maxArea = parseInt(document.getElementById(`maxArea${isRent ? 'Rent' : 'Buy'}`)?.value) || 10000;
    const propType = document.getElementById(`propertyType${isRent ? 'Rent' : 'Buy'}`)?.value || 'all';
    const priceSlider = document.getElementById(`priceSlider${isRent ? 'Rent' : 'Buy'}`);
    const minPrice = priceSlider?.noUiSlider ? priceSlider.noUiSlider.get()[0] : 0;
    const maxPrice = priceSlider?.noUiSlider ? priceSlider.noUiSlider.get()[1] : (isRent ? 300000 : 100000000);
    const selectedAmenities = [];
    document.querySelectorAll(`.amenity-check-${isRent ? 'rent' : 'buy'}`).forEach(cb => { if (cb.checked) selectedAmenities.push(cb.value); });
    filtered = filtered.filter(p => {
        if (searchTerm && !p.title.toLowerCase().includes(searchTerm)) return false;
        if (location !== 'all' && p.location !== location) return false;
        if (propType !== 'all' && p.type !== propType) return false;
        const priceVal = isRent ? p.rentPrice : p.price;
        if (priceVal < minPrice || priceVal > maxPrice) return false;
        if (p.area < minArea || p.area > maxArea) return false;
        if (bedrooms !== 'any') { const bedNum = parseInt(bedrooms); if (bedrooms === '4' && p.bedrooms < 4) return false; if (bedrooms !== '4' && p.bedrooms !== bedNum) return false; }
        if (selectedAmenities.length > 0 && !selectedAmenities.every(a => p.amenities.includes(a))) return false;
        return true;
    });
    if (sortVal === 'lowToHigh') filtered.sort((a,b) => (isRent ? a.rentPrice - b.rentPrice : a.price - b.price));
    else if (sortVal === 'highToLow') filtered.sort((a,b) => (isRent ? b.rentPrice - a.rentPrice : b.price - a.price));
    renderProperties(filtered, sectionType);
}

function renderProperties(propertiesToRender, sectionType) {
    const isRent = sectionType === 'rent';
    const container = document.getElementById(`propertiesGrid${isRent ? 'Rent' : 'Buy'}`);
    const countSpan = document.getElementById(`propertyCount${isRent ? 'Rent' : 'Buy'}`);
    const compareList = isRent ? compareListRent : compareListBuy;
    countSpan.innerText = propertiesToRender.length;
    if (propertiesToRender.length === 0) { container.innerHTML = `<div class="col-12"><div class="no-results"><i class="bi bi-search" style="font-size:3rem;"></i><h4>No properties found</h4></div></div>`; return; }
    container.innerHTML = propertiesToRender.map(prop => {
        const isFav = favorites.includes(prop.id);
        const isCompared = compareList.includes(prop.id);
        let badgeHtml = '';
        if (!isRent && prop.isNew) badgeHtml += '<span class="badge bg-primary me-1">New</span>';
        if (!isRent && prop.isHotDeal) badgeHtml += '<span class="badge bg-danger">Hot Deal</span>';
        return `<div class="col-md-6 col-lg-4"><div class="property-card" data-id="${prop.id}" data-rent="${isRent}"><div class="badge-label">${badgeHtml}</div><img src="${prop.img}" class="property-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=300&fit=crop'"><div class="property-body"><div class="d-flex justify-content-between"><h6>${prop.title}</h6><button class="favorite-btn ${isFav ? 'active' : ''}" data-id="${prop.id}"><i class="bi bi-heart${isFav ? '-fill' : ''}"></i></button></div><div class="property-price">${isRent ? formatPrice(prop.rentPrice, true) : formatPrice(prop.price)}</div><div class="property-location"><i class="bi bi-geo-alt"></i> ${prop.location}</div><div class="property-details"><span>${prop.bedrooms} BHK</span><span>${prop.area} sqft</span><span>${prop.type}</span></div><div class="rating-stars">${[1,2,3,4,5].map(s => `<i class="bi bi-star${s <= prop.rating ? '-fill' : ''}"></i>`).join('')}</div><div class="mt-2">${prop.amenities.slice(0,2).map(a => `<span class="badge bg-secondary me-1">${a}</span>`).join('')}</div></div><div class="compare-checkbox"><input type="checkbox" class="compare-check" data-id="${prop.id}" data-rent="${isRent}" ${isCompared ? 'checked' : ''}> Compare</div></div></div>`;
    }).join('');
    document.querySelectorAll(`#propertiesGrid${isRent ? 'Rent' : 'Buy'} .property-card`).forEach(card => {
        const propId = parseInt(card.dataset.id);
        const isRentCard = card.dataset.rent === 'true';
        const prop = isRentCard ? rentProperties.find(p => p.id === propId) : buyProperties.find(p => p.id === propId);
        card.addEventListener('click', (e) => { if (!e.target.closest('.favorite-btn') && !e.target.closest('.compare-check')) { addRecentView(prop, isRentCard); showPropertyDetails(prop, isRentCard); } });
    });
    document.querySelectorAll(`#propertiesGrid${isRent ? 'Rent' : 'Buy'} .favorite-btn`).forEach(btn => {
        btn.addEventListener('click', (e) => { e.stopPropagation(); const id = parseInt(btn.dataset.id); if (favorites.includes(id)) { favorites = favorites.filter(f => f !== id); showNotification('Removed from favorites', 'success'); } else { favorites.push(id); showNotification('Added to favorites', 'success'); } localStorage.setItem('favorites', JSON.stringify(favorites)); updateFavBadge(); filterProperties(sectionType); });
    });
    document.querySelectorAll(`#propertiesGrid${isRent ? 'Rent' : 'Buy'} .compare-check`).forEach(chk => {
        chk.addEventListener('change', (e) => { e.stopPropagation(); const id = parseInt(chk.dataset.id); const isRentCompare = chk.dataset.rent === 'true'; let compareListArr = isRentCompare ? compareListRent : compareListBuy; if (chk.checked) { if (compareListArr.length >= 3) { showNotification('Can compare max 3 properties', 'error'); chk.checked = false; return; } compareListArr.push(id); showNotification('Added to compare', 'success'); } else { compareListArr = compareListArr.filter(cid => cid !== id); showNotification('Removed from compare', 'success'); } if (isRentCompare) compareListRent = compareListArr; else compareListBuy = compareListArr; localStorage.setItem(`compareList${isRentCompare ? 'Rent' : 'Buy'}`, JSON.stringify(compareListArr)); document.getElementById(`compareCount${isRentCompare ? 'Rent' : 'Buy'}`).innerText = compareListArr.length; });
    });
}

function resetFilters(sectionType) {
    const isRent = sectionType === 'rent';
    document.getElementById(`searchTitle${isRent ? 'Rent' : 'Buy'}`).value = '';
    document.getElementById(`locationFilter${isRent ? 'Rent' : 'Buy'}`).value = 'all';
    document.getElementById(`bedroomFilter${isRent ? 'Rent' : 'Buy'}`).value = 'any';
    document.getElementById(`sortSelect${isRent ? 'Rent' : 'Buy'}`).value = 'default';
    if (document.getElementById(`minArea${isRent ? 'Rent' : 'Buy'}`)) document.getElementById(`minArea${isRent ? 'Rent' : 'Buy'}`).value = 0;
    if (document.getElementById(`maxArea${isRent ? 'Rent' : 'Buy'}`)) document.getElementById(`maxArea${isRent ? 'Rent' : 'Buy'}`).value = 10000;
    if (document.getElementById(`propertyType${isRent ? 'Rent' : 'Buy'}`)) document.getElementById(`propertyType${isRent ? 'Rent' : 'Buy'}`).value = 'all';
    const slider = document.getElementById(`priceSlider${isRent ? 'Rent' : 'Buy'}`);
    if (slider?.noUiSlider) slider.noUiSlider.set([0, isRent ? 300000 : 100000000]);
    document.querySelectorAll(`.amenity-check-${isRent ? 'rent' : 'buy'}`).forEach(cb => cb.checked = false);
    filterProperties(sectionType);
    showNotification('Filters reset', 'success');
}

function showCompare(isRent) {
    const compareListArr = isRent ? compareListRent : compareListBuy;
    const properties = isRent ? rentProperties : buyProperties;
    const compareProps = properties.filter(p => compareListArr.includes(p.id));
    const body = document.getElementById('compareBody');
    if (compareProps.length === 0) { body.innerHTML = '<p class="text-center">No properties selected for comparison</p>'; }
    else { body.innerHTML = `<div class="row">${compareProps.map(p => `<div class="col-md-4 mb-3"><div class="card h-100"><img src="${p.img}" class="card-img-top" style="height:150px; object-fit:cover;" onerror="this.src='https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=300&fit=crop'"><div class="card-body"><h6>${p.title}</h6><p class="text-success fw-bold">${isRent ? formatPrice(p.rentPrice, true) : formatPrice(p.price)}</p><p>${p.bedrooms} BHK | ${p.area} sqft</p><button class="btn btn-sm btn-danger remove-compare" data-id="${p.id}">Remove</button></div></div></div>`).join('')}</div>`; }
    document.querySelectorAll('.remove-compare').forEach(btn => { btn.addEventListener('click', () => { const id = parseInt(btn.dataset.id); let newList = compareListArr.filter(cid => cid !== id); if (isRent) compareListRent = newList; else compareListBuy = newList; localStorage.setItem(`compareList${isRent ? 'Rent' : 'Buy'}`, JSON.stringify(newList)); document.getElementById(`compareCount${isRent ? 'Rent' : 'Buy'}`).innerText = newList.length; showCompare(isRent); }); });
    new bootstrap.Modal(document.getElementById('compareModal')).show();
}

function exportCSV(isRent) {
    const properties = isRent ? rentProperties : buyProperties;
    let csv = "Title,Price,Type,Bedrooms,Area,Location,Owner,Owner Phone\n";
    properties.forEach(p => { const price = isRent ? p.rentPrice : p.price; csv += `"${p.title}",${price},"${p.type}",${p.bedrooms},${p.area},"${p.location}","${p.owner.name}","${p.owner.phone}"\n`; });
    const blob = new Blob([csv], {type: 'text/csv'}); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${isRent ? 'rent' : 'buy'}-properties.csv`; a.click(); showNotification('CSV exported!', 'success');
}

function initDarkMode() {
    if (darkMode) { document.documentElement.setAttribute('data-theme', 'dark'); document.getElementById('darkModeToggle').innerHTML = '<i class="bi bi-sun-fill"></i>'; }
    document.getElementById('darkModeToggle').addEventListener('click', () => { darkMode = !darkMode; localStorage.setItem('darkMode', darkMode); document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light'); document.getElementById('darkModeToggle').innerHTML = darkMode ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-fill"></i>'; showNotification(`Dark mode ${darkMode ? 'enabled' : 'disabled'}`, 'success'); });
}

function setupShowcaseButtons() {
    document.querySelectorAll('.showcase-detail-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const propertyId = btn.getAttribute('data-property-id');
            const property = showcaseProperties[propertyId];
            if (property) { document.getElementById('buy-properties').scrollIntoView({ behavior: 'smooth' }); setTimeout(() => { showPropertyDetails(property, false); }, 500); showNotification(`Showing details for ${property.title}`, 'success'); }
        });
    });
}

function bindEvents() {
    document.getElementById('searchTitleBuy')?.addEventListener('input', () => filterProperties('buy'));
    document.getElementById('locationFilterBuy')?.addEventListener('change', () => filterProperties('buy'));
    document.getElementById('bedroomFilterBuy')?.addEventListener('change', () => filterProperties('buy'));
    document.getElementById('sortSelectBuy')?.addEventListener('change', () => filterProperties('buy'));
    document.getElementById('minAreaBuy')?.addEventListener('input', () => filterProperties('buy'));
    document.getElementById('maxAreaBuy')?.addEventListener('input', () => filterProperties('buy'));
    document.getElementById('propertyTypeBuy')?.addEventListener('change', () => filterProperties('buy'));
    document.querySelectorAll('.amenity-check-buy').forEach(cb => cb.addEventListener('change', () => filterProperties('buy')));
    document.getElementById('resetFiltersBuy')?.addEventListener('click', () => resetFilters('buy'));
    document.getElementById('compareBtnBuy')?.addEventListener('click', () => showCompare(false));
    document.getElementById('exportCSVBtnBuy')?.addEventListener('click', () => exportCSV(false));
    document.getElementById('searchTitleRent')?.addEventListener('input', () => filterProperties('rent'));
    document.getElementById('locationFilterRent')?.addEventListener('change', () => filterProperties('rent'));
    document.getElementById('bedroomFilterRent')?.addEventListener('change', () => filterProperties('rent'));
    document.getElementById('sortSelectRent')?.addEventListener('change', () => filterProperties('rent'));
    document.getElementById('propertyTypeRent')?.addEventListener('change', () => filterProperties('rent'));
    document.querySelectorAll('.amenity-check-rent').forEach(cb => cb.addEventListener('change', () => filterProperties('rent')));
    document.getElementById('resetFiltersRent')?.addEventListener('click', () => resetFilters('rent'));
    document.getElementById('compareBtnRent')?.addEventListener('click', () => showCompare(true));
    document.getElementById('exportCSVBtnRent')?.addEventListener('click', () => exportCSV(true));
    document.getElementById('clearAllRecent')?.addEventListener('click', () => { recentViews = []; localStorage.setItem('recentViews', JSON.stringify(recentViews)); renderRecentList(); showNotification('All recent views cleared', 'success'); });
    document.getElementById('sendMessageBtn')?.addEventListener('click', () => { const name = document.getElementById('contactName')?.value; if (name) { showNotification(`Thank you ${name}! Message sent.`, 'success'); document.getElementById('contactName').value = ''; document.getElementById('contactEmail').value = ''; document.getElementById('contactMessage').value = ''; bootstrap.Modal.getInstance(document.getElementById('contactModal'))?.hide(); } else { showNotification('Please fill your name', 'error'); } });
    document.getElementById('doLogin')?.addEventListener('click', () => { if (document.getElementById('loginEmail')?.value) { showNotification('Login Successful!', 'success'); bootstrap.Modal.getInstance(document.getElementById('loginModal'))?.hide(); } else { showNotification('Please enter email', 'error'); } });
    document.getElementById('doRegister')?.addEventListener('click', () => { if (document.getElementById('regName')?.value) { showNotification('Registration Successful!', 'success'); bootstrap.Modal.getInstance(document.getElementById('loginModal'))?.hide(); } else { showNotification('Please fill all fields', 'error'); } });
}

// Initialize
initSection('buy');
initSection('rent');
bindEvents();
initDarkMode();
renderRecentList();
updateFavBadge();
setupShowcaseButtons();