

const places = [
  {
    emoji: "🌊",
    ar: "كورنيش جدة",
    en: "Jeddah Waterfront",
    descAr: "استمتعي بالبحر والمشي والمناظر الجميلة.",
    descEn: "Enjoy the sea, walking and beautiful views.",
    cat: "nature",
    price: 0
  },
  {
    emoji: "🌳",
    ar: "حديقة عامة",
    en: "Public Park",
    descAr: "وقت ممتع للعائلة وسط المساحات الخضراء.",
    descEn: "A relaxing family outing among green spaces.",
    cat: "family",
    price: 0
  },
  {
    emoji: "🎳",
    ar: "تجربة البولينج",
    en: "Bowling Experience",
    descAr: "نشاط ممتع مع الأصدقاء والعائلة.",
    descEn: "A fun activity with friends and family.",
    cat: "adventure",
    price: 50
  },
  {
    emoji: "☕",
    ar: "جلسة قهوة هادئة",
    en: "Relaxing Coffee Break",
    descAr: "غيري جوك بجلسة لطيفة.",
    descEn: "Enjoy a peaceful change of scenery.",
    cat: "calm",
    price: 30
  },
  {
    emoji: "🚶",
    ar: "ممشى الواجهة البحرية",
    en: "Waterfront Walk",
    descAr: "مشي وهواء البحر وإطلالة جميلة.",
    descEn: "A lovely walk with fresh sea air.",
    cat: "nature",
    price: 0
  },
  {
    emoji: "🎮",
    ar: "ألعاب وترفيه",
    en: "Games and Entertainment",
    descAr: "اختاري نشاطًا ممتعًا ليوم مختلف.",
    descEn: "Choose a fun activity for a different day.",
    cat: "adventure",
    price: 100
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
    budget: ["كل الميزانيات", "مجاني", "حتى 50 ريال", "حتى 100 ريال"],
    free: "مجاني",
    sar: "ريال"
  },
  en: {
    headline: "Where shall we go today?",
    subtitle: "Discover places and experiences for every mood and budget in Jeddah.",
    surprise: "✦ Surprise me!",
    categories: "Choose your mood",
    places: "Outing ideas",
    all: "All",
    family: "Family",
    nature: "Nature & Sea",
    adventure: "Adventure",
    calm: "Relax",
    budget: ["All budgets", "Free", "Up to SAR 50", "Up to SAR 100"],
    free: "Free",
    sar: "SAR"
  }
};

function render() {
  const t = translations[language];

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.getElementById("headline").textContent = t.headline;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("surprise").textContent = t.surprise;
  document.getElementById("categoriesTitle").textContent = t.categories;
  document.getElementById("placesTitle").textContent = t.places;
  document.getElementById("language").textContent =
    language === "ar" ? "English" : "العربية";

  const buttons = document.querySelectorAll("#categories button");

  buttons.forEach(button => {
    const key = button.dataset.cat;
    button.textContent = t[key];
    button.classList.toggle("active", category === key);
  });

  const budget = document.getElementById("budget");
  budget.innerHTML = t.budget.map((label, index) =>
    `<option value="${["all", "free", "50", "100"][index]}">${label}</option>`
  ).join("");

  showPlaces();
}

function showPlaces() {
  const budget = document.getElementById("budget").value;

  const filtered = places.filter(place => {
    const categoryMatch =
      category === "all" || place.cat === category;

    const budgetMatch =
      budget === "all" ||
      (budget === "free" && place.price === 0) ||
      (budget === "50" && place.price <= 50) ||
      (budget === "100" && place.price <= 100);

    return categoryMatch && budgetMatch;
  });

  document.getElementById("places").innerHTML =
    filtered.map(place => `
      <article class="card">
        <div class="emoji">${place.emoji}</div>
        <h3>${language === "ar" ? place.ar : place.en}</h3>
        <p>${language === "ar" ? place.descAr : place.descEn}</p>
        <div class="price">
          ${place.price === 0
            ? translations[language].free
            : `${place.price} ${translations[language].sar}`}
        </div>
      </article>
    `).join("") ||
    `<p>${language === "ar" ? "لا توجد نتائج." : "No results found."}</p>`;
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
  alert(language === "ar"
    ? `طلعتك اليوم: ${random.ar}`
    : `Your outing: ${random.en}`);
});

render();
