
const places = [
  {
    emoji: "🌊",
    image: "https://storage.googleapis.com/marcom-roshn-sa-cms-prod/ROSHN_000_Qaisaran_Studio74830_2024_f1dd175e6c/ROSHN_000_Qaisaran_Studio74830_2024_f1dd175e6c.png",
    ar: "واجهة روشن البحرية",
    en: "ROSHN Waterfront",
    descAr: "ممشى بحري وجلسات وألعاب أطفال وإطلالات على البحر الأحمر.",
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
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=1000",
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
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1000",
    ar: "جدة التاريخية - البلد",
    en: "Historic Jeddah - Al-Balad",
    descAr: "استكشفي الأزقة والأسواق والبيوت التاريخية.",
    descEn: "Explore historic streets, traditional markets and old houses.",
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
    priceAr: "تحققي من سعر التذكرة قبل الزيارة",
    priceEn: "Check ticket prices before visiting",
    map: "https://www.google.com/maps/search/?api=1&query=Fakieh+Aquarium+Jeddah",
    source: "https://www.fakiehaquarium.com/"
  },
  {
    emoji: "🎢",
    image: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=1000",
    ar: "ملاهي الشلال",
    en: "Al Shallal Theme Park",
    descAr: "ألعاب ترفيهية وتزلج على الجليد وأنشطة عائلية.",
    descEn: "Amusement rides, ice skating and family activities.",
    cat: "adventure",
    price: 35,
    priceAr: "تحققي من أسعار الدخول والألعاب",
    priceEn: "Check entry and ride prices",
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
    source: "https://www.visitsaudi.com/en/destinations/jeddah"
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
    places: "أفكار للطلعة",
    all: "الكل",
    family: "عائلي",
    nature: "طبيعة وبحر",
    adventure: "مغامرات",
    calm: "هدوء",
    budgets: ["كل الميزانيات", "مجاني", "حتى 50 ريال", "حتى 100 ريال"],
    map: "الموقع على الخريطة",
    source: "المصدر والتفاصيل",
    empty: "لا توجد أماكن تطابق اختياراتك.",
    rate: "⭐ قيّمي المكان",
    noReviews: "⭐ لا توجد تقييمات بعد",
    ratingPrompt: "قيّمي المكان من 1 إلى 5 نجوم",
    invalidRating: "اختاري تقييمًا صحيحًا من 1 إلى 5",
    commentPrompt: "اكتبي رأيك في المكان:",
    noComment: "اكتبي رأيك أولًا",
    thanks: "شكرًا لك! تم حفظ تقييمك ❤️"
  },
  en: {
    headline: "Where shall we go today?",
    subtitle: "Discover places and experiences for every mood and budget in Jeddah.",
    surprise: "✦ Surprise me!",
    categories: "Choose your mood",
    places: "Places to explore",
    all: "All",
    family: "Family",
    nature: "Nature & Sea",
    adventure: "Adventure",
    calm: "Relax",
    budgets: ["All budgets", "Free", "Up to SAR 50", "Up to SAR 100"],
    map: "View on map",
    source: "Source & details",
    empty: "No places match your filters.",
    rate: "⭐ Rate this place",
    noReviews: "⭐ No reviews yet",
    ratingPrompt: "Rate this place from 1 to 5 stars",
    invalidRating: "Please choose a rating from 1 to 5",
    commentPrompt: "Write your review:",
    noComment: "Please write a review first",
    thanks: "Thank you! Your review has been saved ❤️"
  }
};

function getReviews(place) {
  try {
    const saved = localStorage.getItem("reviews_" + place.en);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Could not read reviews:", error);
    return [];
  }
}

function addReview(placeName) {
  const t = translations[language];
  const rating = Number(prompt(t.ratingPrompt));

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    alert(t.invalidRating);
    return;
  }

  const comment = prompt(t.commentPrompt);

  if (!comment || !comment.trim()) {
    alert(t.noComment);
    return;
  }

  try {
    const key = "reviews_" + placeName;
    let reviews = [];

    try {
      reviews = JSON.parse(localStorage.getItem(key) || "[]");
      if (!Array.isArray(reviews)) reviews = [];
    } catch (error) {
      reviews = [];
    }

    reviews.push({
      rating: rating,
      comment: comment.trim()
    });

    localStorage.setItem(key, JSON.stringify(reviews));
    showPlaces();
    alert(t.thanks);
  } catch (error) {
    alert(language === "ar"
      ? "تعذر حفظ التقييم في هذا المتصفح."
      : "Could not save the review.");
  }
}

window.addReview = addReview;

function showRating(place) {
  const reviews = getReviews(place);

  if (reviews.length === 0) {
    return translations[language].noReviews;
  }

  const average = reviews.reduce(
    (sum, review) => sum + review.rating, 0
  ) / reviews.length;

  return `⭐ ${average.toFixed(1)} (${reviews.length})`;
}

function render() {
  const t = translations[language];
  const budgetElement = document.getElementById("budget");
  const selectedBudget = budgetElement.value;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.getElementById("headline").textContent = t.headline;

  .textContent = t.subtitle;
  document.getElementById("surprise").textContent = t.surprise;
  document.getElementById("categoriesTitle").textContent = t.categories;
  document.getElementById("placesTitle").textContent = t.places;
  document.getElementById("language").textContent =
    language === "ar" ? "English" : "العربية";

  document.querySelectorAll("#categories button").forEach(button => {
    const key = button.dataset.cat;
    if (t[key]) button.textContent = t[key];
    button.classList.toggle("active", category === key);
  });

  budgetElement.innerHTML = t.budgets.map((label, index) =>
    `<option value="${["all", "free", "50", "100"][index]}">${label}</option>`
  ).join("");

  budgetElement.value = selectedBudget;
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

  document.getElementById("places").innerHTML = filtered.map(place => `
    <article class="card">
      <img class="place-image" src="${place.image}" alt="${place.en}" loading="lazy">
      <h3>${language === "ar" ? place.ar : place.en}</h3>
      <p>${language === "ar" ? place.descAr : place.descEn}</p>
      <div class="price">${language === "ar" ? place.priceAr : place.priceEn}</div>
      <div class="rating">${showRating(place)}</div>
      <button onclick="addReview('${place.en}')">${t.rate}</button>
      <p><a href="${place.map}" target="_blank" rel="noopener">📍 ${t.map}</a></p>
      <p><a href="${place.source}" target="_blank" rel="noopener">🔎 ${t.source}</a></p>
    </article>
  `).join("") || `<p>${t.empty}</p>`;
}

document.getElementById("language").addEventListener("click", () => {
  language = language === "ar" ? "en" : "ar";
  render();
});

document.getElementById("categories").addEventListener("click", event => {
  const button = event.target.closest("button[data-cat]");
  if (!button) return;
  category = button.dataset.cat;
  render();
});

document.getElementById("budget").addEventListener("change", showPlaces);

document.getElementById("surprise").addEventListener("click", () => {
  const random = places[Math.floor(Math.random() * places.length)];
  const name = language === "ar" ? random.ar : random.en;
  const message = language === "ar"
    ? `طلعتك اليوم: ${name}`
    : `Your outing today: ${name}`;

  if (confirm(message)) {
    window.open(random.map, "_blank", "noopener");
  }
});

render();

