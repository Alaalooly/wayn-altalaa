
const places = [
  {
   emoji: "🌊",
image: "https://storage.googleapis.com/marcom-roshn-sa-cms-prod/ROSHN_000_Qaisaran_Studio74830_2024_f1dd175e6c/ROSHN_000_Qaisaran_Studio74830_2024_f1dd175e6c.png",
ar: "واجهة روشن البحرية",
en: "ROSHN Waterfront",
    descAr: "ممشى بحري، جلسات، ألعاب أطفال وإطلالات على البحر الأحمر.",
    descEn: "Seaside promenade, seating, children's play areas and Red Sea views.",
    cat: "nature",
    price: 0,
    priceAr: "مجاني",
    priceEn: "Free",
    map: "https://www.google.com/maps/search/?api=1&query=ROSHN+Waterfront+Jeddah",
    source: "https://www.visitsaudi.com/ar/jeddah/attractions/jeddah-waterfront"
  },
  {
    emoji: "🌴",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeddah_Corniche_5.jpg?width=1000",
    ar: "منتزه الكورنيش الأوسط",
    en: "Middle Corniche Park",
    descAr: "مساحات للتنزه والمشي وإطلالات جميلة على البحر.",
    descEn: "A public park for walks, relaxing and sea views.",
    cat: "calm",
    price: 0,
    priceAr: "مجاني",
    priceEn: "Free",
    map: "https://www.google.com/maps/search/?api=1&query=Middle+Corniche+Park+Jeddah",
    source: "https://www.visitsaudi.com/en/destinations/jeddah"
  },
  {
    emoji: "🏛️",
   image: "https://commons.wikimedia.org/wiki/Special:FilePath/AlBalad_CoralHouses.JPG?width=1000",
    ar: "جدة التاريخية - البلد",
    en: "Historic Jeddah - Al-Balad",
    descAr: "استكشفي الأزقة والأسواق والبيوت التاريخية. بعض المتاحف والجولات برسوم.",
    descEn: "Explore historic streets, traditional markets and old houses. Some museums and tours charge separately.",
    cat: "family",
    price: 0,
    priceAr: "التجول في الشوارع العامة مجاني",
    priceEn: "Public streets are free",
    map: "https://www.google.com/maps/search/?api=1&query=Historic+Jeddah+Al+Balad",
    source: "https://www.visitsaudi.com/en/destinations/jeddah"
  },
  {
    emoji: "🐠",
   image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1000",
    ar: "فقيه أكواريوم",
    en: "Fakieh Aquarium",
    descAr: "تجربة ممتعة لمشاهدة الكائنات البحرية والأنفاق المائية.",
    descEn: "Discover marine life and walk through underwater tunnels.",
    cat: "family",
    price: 55,
    priceAr: "يبدأ من 55 ريال حسب المصدر السياحي",
    priceEn: "SAR 55 starting price according to tourism source",
    map: "https://www.google.com/maps/search/?api=1&query=Fakieh+Aquarium+Jeddah",
    source: "https://www.visitsaudi.com/en/destinations/jeddah/attractions/explore-fakieh-aquarium"
  },
  {
    emoji: "🎢", 
    image: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=1000",
    ar: "ملاهي الشلال",
    en: "Al Shallal Theme Park",
    descAr: "ألعاب ترفيهية وتزلج على الجليد وأنشطة عائلية. بعض الألعاب برسوم إضافية.",
    descEn: "Amusement rides, ice skating and family activities. Some attractions cost extra.",
    cat: "adventure",
    price: 35,
    priceAr: "دخول 35 ريال، وسوار الألعاب 79 ريال",
    priceEn: "Entry SAR 35, rides wristband SAR 79",
    map: "https://www.google.com/maps/search/?api=1&query=Al+Shallal+Theme+Park+Jeddah",
    source: "https://alshallal.com.sa/"
  },
  {
emoji: "🌳",
image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=1000",
    ar: "حديقة الأمير ماجد",
    en: "Prince Majid Park",
    descAr: "حديقة واسعة للتنزه العائلي والمشي. تحققي من رسوم الأنشطة قبل الزيارة.",
    descEn: "A large park for family outings and walks. Check activity fees before visiting.",
    cat: "family",
    price: null,
    priceAr: "تحققي من الرسوم",
    priceEn: "Check current fees",
    map: "https://www.google.com/maps/search/?api=1&query=Prince+Majid+Park+Jeddah",
    source: "https://www.visitsaudi.com/content/dam/documents/jeddah-guide-en.pdf"
  }
];

let language = "ar";
let category = "all";

const translations = {
  ar: {
    headline: "وين ودّك تطلع اليوم؟",
    subtitle: "اكتشف أماكن وتجارب تناسب مزاجك وميزانيتك في جدة.",
    surprise: "✦ فاجئني بطلعة",
    categories: "اختاري على مزاجك",
    places: "أماكن جدة",
    all: "الكل",
    family: "عائلي",
    nature: "طبيعة وبحر",
    adventure: "مغامرات",
    calm: "هدوء",
    budgets: ["كل الميزانيات", "مجاني", "حتى 50 ريال", "حتى 100 ريال"],
    free: "مجاني",
    sar: "ريال",
    map: "الموقع على الخريطة",
    source: "المصدر والتفاصيل",
    empty: "لا توجد أماكن تطابق اختياراتك."
  },
  en: {
    headline: "Where shall we go today?",
    subtitle: "Discover places and experiences for every mood and budget in Jeddah.",
    surprise: "✦ Surprise me!",
    categories: "Choose your mood",
    places: "Places in Jeddah",
    all: "All",
    family: "Family",
    nature: "Nature & Sea",
    adventure: "Adventure",
    calm: "Relax",
    budgets: ["All budgets", "Free", "Up to SAR 50", "Up to SAR 100"],
    free: "Free",
    sar: "SAR",
    map: "View on map",
    source: "Source & details",
    empty: "No places match your filters."
  }
};

function getReviews(place) {
  const reviews = JSON.parse(
    localStorage.getItem("reviews_" + place.en) || "[]"
  );

  return reviews;
}
function addReview(placeName) {
  const rating = Number(prompt("قيّمي المكان من 1 إلى 5 نجوم"));

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    alert("اختاري تقييمًا من 1 إلى 5");
    return;
  }

  const comment = prompt("اكتبي رأيك في المكان:");

  if (!comment || !comment.trim()) {
    alert("اكتبي رأيك أولًا");
    return;
  }

  const key = "reviews_" + placeName;
  const reviews = JSON.parse(localStorage.getItem(key) || "[]");

  reviews.push({ rating, comment: comment.trim() });

  localStorage.setItem(key, JSON.stringify(reviews));

  showPlaces();
  alert("شكرًا لك! تم حفظ تقييمك ❤️");
}
function showRating(place) {
  const reviews = getReviews(place);

  if (reviews.length === 0) {
    return "⭐ لا توجد تقييمات بعد";
  }

  const average = reviews.reduce(
    (sum, review) => sum + review.rating, 0
  ) / reviews.length;

  return `⭐ ${average.toFixed(1)} (${reviews.length} تقييم)`;
}
  const t = translations[language];
  const budget = document.getElementById("budget").value;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.getElementById("headline").textContent = t.headline;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("surprise").textContent = t.surprise;
  document.getElementById("categoriesTitle").textContent = t.categories;
  document.getElementById("placesTitle").textContent = t.places;
  document.getElementById("language").textContent =
    language === "ar" ? "English" : "العربية";

  document.querySelectorAll("#categories button").forEach(button => {
    const key = button.dataset.cat;
    button.textContent = t[key];
    button.classList.toggle("active", category === key);
  });

  document.getElementById("budget").innerHTML =
    t.budgets.map((label, index) =>
      `<option value="${["all", "free", "50", "100"][index]}">${label}</option>`
    ).join("");

  document.getElementById("budget").value = budget;
  showPlaces();
}

function showPlaces() {
  const t = translations[language];
  const budget = document.getElementById("budget").value;

  const filtered = places.filter(place => {
    const categoryMatch =
      category === "all" || place.cat === category;

    const budgetMatch =
      budget === "all" ||
      (budget === "free" && place.price === 0) ||
      (budget === "50" && place.price !== null && place.price <= 50) ||
      (budget === "100" && place.price !== null && place.price <= 100);

    return categoryMatch && budgetMatch;
  });

  document.getElementById("places").innerHTML =
    filtered.map(place => `
      <article class="card">
       <img class="place-image" src="${place.image}" alt="${place.en}">
        <h3>${language === "ar" ? place.ar : place.en}</h3>
        <p>${language === "ar" ? place.descAr : place.descEn}</p>
<div class="price">
  ${language === "ar" ? place.priceAr : place.priceEn}
</div>

<div class="rating">
  ${showRating(place)}
</div>

<button onclick="addReview('${place.en}')">
  ${language === "ar" ? "⭐ قيّمي المكان" : "⭐ Rate this place"}
</button>>
        <p>
          <a href="${place.map}" target="_blank" rel="noopener">
            📍 ${t.map}
          </a>
        </p>
        <p>
          <a href="${place.source}" target="_blank" rel="noopener">
            🔎 ${t.source}
          </a>
        </p>
      </article>
    `).join("") ||
    `<p>${t.empty}</p>`;
}

document.getElementById("language").addEventListener("click", () => {
  language = language === "ar" ? "en" : "ar";
  render();
});

document.getElementById("categories").addEventListener("click", event => {
  if (event.target.dataset.cat) {
    category = event.target.dataset.cat;
    render();
  }
});

document.getElementById("budget").addEventListener("change", showPlaces);

document.getElementById("surprise").addEventListener("click", () => {
  const random = places[Math.floor(Math.random() * places.length)];
  const name = language === "ar" ? random.ar : random.en;
  const message = language === "ar"
    ? `طلعتك اليوم: ${name}`
    : `Your outing today: ${name}`;

  if (confirm(message)) {
    window.open(random.map, "_blank");
  }
});

render();
