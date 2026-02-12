const translations = {
  tj: {
    titleTest: "Тест",
    aboutTitle: "Интихоби тестҳо",
    desc: "Шумораи саволҳоро интихоб кунед",
    start: "Оғози тестҳо"
  },
  ru: {
    title: "Тест",
    desc: "Выберите количество вопросов",
    start: "Начать тест"
  },
  fa: {
    title: "آزمون",
    desc: "تعداد سوالات را انتخاب کنید",
    start: "شروع آزمون"
  },
  ar: {
    title: "اختبار",
    desc: "اختر عدد الأسئلة",
    start: "ابدأ الاختبار"
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

// ===== Islamic Test - Start Page Logic =====

// шумораи интихобшуда
let selectedCount = null;

// гирифтани ҳамаи тугмаҳои рақам
const numberButtons = document.querySelectorAll(".num-btn");

// вақте корбар рақам интихоб мекунад
numberButtons.forEach(button => {
    button.addEventListener("click", () => {

        // тоза кардани интихоб аз дигар тугмаҳо
        numberButtons.forEach(btn => btn.classList.remove("active"));

        // актив кардан тугмаи интихобшуда
        button.classList.add("active");

        // гирифтани рақам
        selectedCount = parseInt(button.innerText);
    });
});

function goBack() {
    window.location.href = "main.html";
}

// тугмаи оғоз
const startBtn = document.getElementById("startTestBtn");

startBtn.addEventListener("click", () => {

    if (!selectedCount) {
        alert("Лутфан аввал шумораи саволҳоро интихоб кунед");
        return;
    }

    // нигоҳ доштани шумора
    localStorage.setItem("quizCount", selectedCount);

    // гузаштан ба саҳифаи quiz
    window.location.href = "quiz.html";
});

