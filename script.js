const translations = {
    tj: {
        titlesplash: "ТЕСТИ ИСЛОМӢ",
        startsplash: "Маркази тести исломӣ"
    },
    ru: {
        titlesplash: "ИСЛАМСКИЙ ТЕСТ",
        startsplash: "Центр исламского тестирования"
    },
    en: {
        titlesplash: "ISLAMIC TEST",
        startsplash: "Islamic Test Center"
    },
    fa: {
    titlesplash: "آزمون اسلامی",
    startsplash: "مرکز آزمون اسلامی"
},
    ar: {
        titlesplash: "الاختبار الإسلامي",
        startsplash: "مركز الاختبار الإسلامي"
    }
};
document.addEventListener("DOMContentLoaded", function () {
    const lang = localStorage.getItem("lang") || "tj";

    if (typeof translations !== "undefined") {
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });
    }
});
let progress = 0;
let bar = document.getElementById("progressBar");
let percent = document.getElementById("percent");

let interval = setInterval(() => {
    progress++;
    bar.style.width = progress + "%";
    percent.innerText = progress + "%";

    if (progress >= 100) {
        clearInterval(interval);
        window.location.href = "main.html";
    }
}, 30); // 3 сония