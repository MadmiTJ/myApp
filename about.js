const translations = {

tj: {
aboutTitle: "Оиди барнома",
aboutText: "Барнома барои санҷиши дониши исломӣ бо чор забон: тоҷикӣ, русӣ, арабӣ ва форсӣ.",
featuresTitle: "Имкониятҳо",
f1: "Интихоби миқдори савол",
f2: "Намоиши натиҷа бо ҷавобҳои дуруст ва нодуруст",
f3: "Дастгирии 4 забон (tj, ru, ar, fa)",
f4: "Интерфейси зебо ва замонавӣ",
versionTitle: "Версия",
developerName: "ҶУМЪАСАИД АРБОБОВ",
developerBirth: "Соли таваллуд: 200X"
},

ru: {
aboutTitle: "О программе",
aboutText: "Приложение для проверки исламских знаний на четырёх языках: таджикский, русский, арабский и персидский.",
featuresTitle: "Возможности",
f1: "Выбор количества вопросов",
f2: "Показ результатов с правильными и неправильными ответами",
f3: "Поддержка 4 языков (tj, ru, ar, fa)",
f4: "Красивый современный интерфейс",
versionTitle: "Версия",
developerName: "ДЖУМАСАИД АРБОБОВ",
developerBirth: "Год рождения: 200X"
},

ar: {
aboutTitle: "حول البرنامج",
aboutText: "تطبيق لاختبار المعرفة الإسلامية بأربع لغات: الطاجيكية، الروسية، العربية والفارسية.",
featuresTitle: "المميزات",
f1: "اختيار عدد الأسئلة",
f2: "عرض النتائج مع الإجابات الصحيحة والخاطئة",
f3: "دعم 4 لغات (tj, ru, ar, fa)",
f4: "واجهة جميلة وحديثة",
versionTitle: "الإصدار",
developerName: "جُمَعْسَعِيد أَرْبُوبُوف",
developerBirth: "سنة الميلاد: 200X"
},

fa: {
aboutTitle: "درباره برنامه",
aboutText: "این برنامه برای سنجش دانش اسلامی به چهار زبان: تاجیکی، روسی، عربی و فارسی طراحی شده است.",
featuresTitle: "امکانات",
f1: "انتخاب تعداد سوالات",
f2: "نمایش نتایج با پاسخ‌های درست و نادرست",
f3: "پشتیبانی از 4 زبان (tj, ru, ar, fa)",
f4: "رابط کاربری زیبا و مدرن",
versionTitle: "نسخه",
developerName: "جمعه‌سعید اربوبوف",
developerBirth: "سال تولد: 200X"
}

};

function setLanguage(lang) {

document.documentElement.lang = lang;

document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
        el.innerText = translations[lang][key];
    }
});

if (lang === "ar" || lang === "fa") {
    document.body.style.direction = "rtl";
} else {
    document.body.style.direction = "ltr";
}

}

function goBack(){
    window.location.href = "main.html";
}

const savedLang = localStorage.getItem("lang") || "tj";
setLanguage(savedLang);