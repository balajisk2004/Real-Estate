# 🏠 EstateIndia Pro – Real Estate Property Listing Platform

A **fully responsive real estate listing platform** built with **HTML5, CSS3, JavaScript ES6, and Bootstrap 5**. Features 75+ properties with advanced filtering, video showcase, dark mode, favorites, compare, WhatsApp integration, and PDF/CSV export — all without any backend.

---

## ✨ Features

### 🏘️ Property Listings
- **75+ Properties** (40 for Buy + 25 for Rent)
- **6 Property Types** — Apartment, Villa, Studio, Penthouse, Townhouse, Cottage
- **42 Unique Property Images** (no repeats)
- **42 Unique Owner Profiles** with contact details
- **Badge System** — New, Hot Deal, Reduced

### 🔍 Advanced Filtering
- Real-time search with debouncing
- Location dropdown (10+ cities)
- **Dual-handle price slider** (noUiSlider)
- Bedroom filter (1, 2, 3, 4+ BHK)
- Area filter (min/max sq ft)
- Property type filter
- Amenities filter (Pool, Gym, Parking, Garden, Security, Furnished)
- Nearby landmarks (Metro, School, Hospital, Mall)
- Sort by price (Low→High, High→Low)

### ❤️ User Experience
- **Favorites System** — Save properties with LocalStorage persistence
- **Compare Properties** — Side-by-side comparison (up to 3)
- **Recently Viewed** — Track last 10 viewed properties with delete option
- **Dark Mode** — Toggle with persistent theme
- **Grid/List View** — Switch between layouts
- **Pagination** — 12 properties per page
- **Toast Notifications** — Real-time user feedback

### 📱 Communication & Sharing
- **WhatsApp Share** — Share property details with a pre-filled message
- **Chat with Owner** — Direct WhatsApp chat integration
- **Print as PDF** — Generate print-ready property documents
- **CSV Export** — Download the filtered property list
- **Contact Form** — Send a message with notification
- **Login/Register Modal** — Authentication UI

### 🎬 Visual Enhancements
- **Video Hero Section** — Auto-playing background video
- **Property Video Showcase** — 3 video tours with "See Details"
- **Image Marquee** — Top & bottom scrolling advertisement
- **AOS Animations** — Smooth scroll-based reveals
- **Lazy Loading** — Optimized image loading
- **Rating System** — 5-star visual rating

### 📄 Additional Pages
- **About Us Modal** — Company information
- **Help Modal** — FAQ section
- **Contact Modal** — Contact form with phone, email, WhatsApp
- **Recent Offcanvas** — Sidebar for recently viewed

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | HTML5, CSS3, JavaScript ES6 |
| **Framework** | Bootstrap 5.3 |
| **Libraries** | noUiSlider, AOS, html2pdf |
| **Icons** | Bootstrap Icons 1.11 |
| **Storage** | LocalStorage API |
| **APIs** | WhatsApp Web API, Print API |
| **Images** | Unsplash CDN |
| **Videos** | Pexels Video CDN |
| **Tools** | Git, VS Code, Chrome DevTools |

---

## 📁 Project Structure

```text
estateindia-pro/
│
├── index.html     # Main HTML file (structure)
├── style.css      # Custom CSS (styling + dark mode)
├── script.js      # JavaScript (logic + data)
└── README.md      # Documentation
```

### File Breakdown

| File | Lines | Purpose |
|------|-------|---------|
| `index.html` | ~500 | Structure, modals, sections |
| `style.css` | ~300 | Styling, animations, responsive |
| `script.js` | ~600 | Data, filters, user interactions |

---

## 🚀 Installation

### Option 1: Direct Download

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/estateindia-pro.git
   ```

2. **Navigate to the project:**
   ```bash
   cd estateindia-pro
   ```

3. **Open in browser:** double-click `index.html`.

### Option 2: VS Code Live Server

1. Install the **Live Server** extension in VS Code
2. Right-click `index.html`
3. Select **"Open with Live Server"**

### Option 3: Python HTTP Server

```bash
python -m http.server 8000
```

Then open **http://localhost:8000**

---

## 💻 Usage

### Search Properties
1. Scroll to the **Buy Properties** or **Rent Properties** section
2. Use the filter panel to refine results
3. Click any property card to view details

### Save Favorites
- Click the ❤️ heart icon on any property card
- Favorites persist in LocalStorage across sessions

### Compare Properties
1. Check the **"Compare"** checkbox on up to 3 properties
2. Click the **"Compare"** button to view them side-by-side

### Chat with Owner
1. Open any property detail
2. Click **"Chat with Owner"** to open WhatsApp

### Share Property
- Click **"Share"** in the property modal to send a formatted WhatsApp message

### Print PDF
1. Open a property detail
2. Click **"Print PDF"** to generate a printable document

### Export CSV
1. Apply filters
2. Click **"Export CSV"** to download the filtered property list

### Dark Mode
- Click the 🌙 moon icon in the navbar — your theme preference is saved
  
---


## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| Total Properties | 75+ (40 Buy + 25 Rent) |
| Filter Criteria | 10+ |
| Unique Images | 42 |
| Unique Owners | 42 |
| JS Functions | 25+ |
| Event Listeners | 30+ |
| User Actions | 15+ |
| Lines of Code | 1400+ |
| Persistent Data Types | 5 |
| Browser Compatibility | Chrome, Firefox, Safari, Edge |

---

## 🔒 Security Notes

This is a front-end only project (no backend). It follows these practices:

- ✅ **Input validation** — form inputs are validated before processing
- ✅ **Limits enforced** — compare list capped at 3 properties
- ✅ **No secrets exposed** — no API keys or credentials in the code
- ✅ **XSS awareness** — user input is sanitized before DOM insertion
- ✅ **HTTPS-ready** — external resources are loaded over HTTPS

> **Note:** LocalStorage is not secure storage — don't keep sensitive data in it. The Login/Register modal is UI-only. For real authentication, integrate a backend with password hashing (e.g., bcrypt), JWT/session tokens, and parameterized database queries.

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Opera | 76+ | ✅ Fully Supported |

**Mobile:** iOS Safari 14+ · Chrome Android 90+ · Samsung Internet 14+

---

## 🎯 Key Highlights

- ✅ Responsive design for mobile, tablet, and desktop
- ✅ Zero backend dependencies — fully functional standalone
- ✅ Optimized filtering using array methods
- ✅ Works across all modern browsers
- ✅ Semantic HTML with ARIA labels

---

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!
