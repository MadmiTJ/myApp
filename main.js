    const startBtn = document.querySelector(".start-btn");

    startBtn.addEventListener("click", function() {
    window.location.href = "test.html";
});
    const openBtn = document.getElementById("openLang");
    const modal = document.getElementById("langModal");
    const confirmBtn = document.getElementById("confirmLang");
    const langBtnText = document.getElementById("langBtnText");
    const langBtnFlag = document.getElementById("langBtnFlag");

    let selectedLang = localStorage.getItem("lang") || "tj";
    
    

    // ======= КУШОДАНИ ОГОҲӢ =======
    openBtn.onclick = function(){
        modal.style.display = "flex";
    };
    
    function openInfo() {
    window.location.href = "about.html";
}
    
    function goBack() {
    document.getElementById("exitModal").style.display = "flex";
}
    
    function closeModal() {
    document.getElementById("exitModal").style.display = "none";
}
    function exitApp() {
    navigator.app.exitApp();
}

    // ======= ИНТИХОБИ ЗАБОН ДАР МОДАЛ =======
    document.querySelectorAll(".lang-item").forEach(item => {

        item.onclick = function(){

            document.querySelectorAll(".lang-item")
                .forEach(i => i.style.background="none");

            this.style.background="rgba(255,255,255,0.3)";
            selectedLang = this.dataset.lang;
        };

    });

    // ======= ТАСДИҚ =======
    confirmBtn.onclick = function(){

        localStorage.setItem("lang", selectedLang);
        modal.style.display = "none";

        applyLanguage(selectedLang);
    };

    // ======= ИВАЗ КАРДАНИ САҲИФА =======
    function applyLanguage(lang){

        // Номи тугма + флаг
        if (langBtnText) langBtnText.innerText = "Тоҷикӣ";
        if (langBtnFlag) langBtnFlag.src = "flags/tj.png";

        if(lang === "ru"){
            langBtnText.innerText = "Русский";
            langBtnFlag.src = "flags/ru.png";
        }

        if(lang === "ar"){
            langBtnText.innerText = "العربية";
            langBtnFlag.src = "flags/ar.png";
        }

        if(lang === "fa"){
            langBtnText.innerText = "فارسی";
            langBtnFlag.src = "flags/fa.png";
        }

        // ======= Матнҳои система =======
        document.querySelectorAll("[data-key]").forEach(el=>{
            const key = el.dataset.key;
            el.innerText = translations[lang][key];
        });

    }
    
    

    // ======= ТАРҶУМАҲО =======
    
    const translations = {

        tj: {
            title: "Маркази тести Исломӣ",
            aboutTitle: "Тестҳои Исломи",
            aboutTitlel: "Интихоби тестҳо",
            subtitle: "Омӯзиши худро санҷ",
            editlang: "Интихоби забон",
            start: "Оғози тест",
            langName: "Тоҷикӣ",
            confirm: "ҚАБУЛ",
            
        },
        ru: {
            title: "Исламский тестовый центр",
            subtitle: "Проверь свои знания",
            editlang: "Выбор языка",
            start: "Начать тест",
            langName: "Русский",
            confirm: "ОК",
            
        },
        ar: {
            title: "مركز الاختبار الإسلامي",
            editlang: "اختيار اللغة",
            confirm: "موافق",
            subtitle: "اختبر معلوماتك",
            start: "ابدأ الاختبار",
            langName: "العربية",

        },
        fa: {
            
            confirm: "تأیید",
            editlang: "انتخاب زبان",
            title: "مرکز تست اسلامی",
            subtitle: "دانش خود را بسنج",
            start: "شروع آزمون",
            langName: "فارسی",
            
        }

    };

    // ======= Ҳангоми бор шудан =======
    applyLanguage(selectedLang);
document.addEventListener("DOMContentLoaded", function() {
    const lang = localStorage.getItem("lang") || "tj";
    applyLanguage(lang);
});