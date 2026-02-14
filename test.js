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
// Функсия барои намоиш додани модал
function showModal(message) {
    const modal = document.getElementById("modal");
    const messageElement = document.getElementById("modal-message");
    const closeBtn = document.getElementById("closeBtn");
    const okBtn = document.getElementById("okBtn");

    messageElement.textContent = message; // Массажи огоҳӣ
    modal.style.display = "flex"; // Намудон кардани модал

    // Вақте ки тугмаи "Ok" пахш мешавад
    okBtn.addEventListener("click", () => {
        modal.style.display = "none"; // Пӯшида кардан
    });

    // Вақте ки тугмаи хомӯш кардани модал пахш мешавад
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none"; // Пӯшида кардан
    });
}

// Тугмаи "Офозӣ тест" пахш мешавад
const startBtn = document.getElementById("startTestBtn");
startBtn.addEventListener("click", () => {
    if (!selectedCount) {
        showModal("Лутфан аввал шумораи саволҳоро интихоб кунед!"); // Иваз кардани alert бо модал
        return;
    }

    // Шумориши саволҳо
    localStorage.setItem("quizCount", selectedCount);

    // Рафта ба саҳифа quiz
    window.location.href = "quiz.html";
});
