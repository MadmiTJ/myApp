// ====== ELEMENTS ======
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answersBox");
const nextBtn = document.getElementById("nextBtn");

// ====== LANGUAGE ======
let lang = localStorage.getItem("lang") || "tj";
let totalQuestions = parseInt(localStorage.getItem("quizCount")) || 5;

let currentIndex = 0;
let score = 0;
let selected = null;
let userAnswers = [];

// ====== UI TEXT ======
const uiText = {
  tj: {
    q: "Саволи",
    of: "аз",
    next: "Давом додан",
    result: "Натиҷаи шумо",
    restart: "Аз нав оғоз",
    back: "Назад"
  },
  ru: {
    q: "Вопрос",
    of: "из",
    next: "Продолжить",
    result: "Ваш результат",
    restart: "Начать заново",
    back: "Назад"
  },
  ar: {
    q: "السؤال",
    of: "من",
    next: "التالي",
    result: "نتيجتك",
    restart: "إعادة الاختبار",
    back: "رجوع"
  },
  fa: {
    q: "سوال",
    of: "از",
    next: "ادامه",
    result: "نتیجه شما",
    restart: "شروع دوباره",
    back: "بازگشت"
  }
};

// ====== QUESTIONS (мисол 3 савол барои намуна) ======
const questions_tj = [
{
question: "Панҷ рукни Ислом кадомҳоянд?",
options: ["Намоз, Руза, Ҳаҷ, Закот, Шаҳодат", "Ҷиҳод, Ҳаҷ, Намоз", "Фақат Намоз"],
correct: 0
},
{
question: "Намози фарз дар як рӯз чанд вақт аст?",
options: ["3", "5", "6"],
correct: 1
},
{
question: "Сураи аввалини Қуръон кадом аст?",
options: ["Бақара", "Фотиҳа", "Ихлос"],
correct: 1
},
{
question: "Китоби муқаддаси мусулмонон чӣ ном дорад?",
options: ["Инҷил", "Қуръон", "Таврот"],
correct: 1
},
{
question: "Моҳи рӯза чӣ ном дорад?",
options: ["Шаъбон", "Рамазон", "Муҳаррам"],
correct: 1
},
{
question: "Закот чӣ аст?",
options: ["Намоз", "Садақаи воҷиб", "Рӯза"],
correct: 1
},
{
question: "Қибла ба кадом самт аст?",
options: ["Мадина", "Макка", "Қудс"],
correct: 1
},
{
question: "Пайғамбари Ислом кист?",
options: ["Мусо (а)", "Муҳаммад (с)", "Исо (а)"],
correct: 1
},
{
question: "Ҳаҷ дар куҷо анҷом мешавад?",
options: ["Макка", "Мадина", "Қоҳира"],
correct: 0
},
{
question: "Шаҳодат чист?",
options: ["Гувоҳӣ ба ягонагии Аллоҳ", "Намоз", "Закот"],
correct: 0
}
];

const questions_ru = [
{
question: "Пять столпов Ислама?",
options: ["Намаз, Пост, Хадж, Закят, Шахада", "Только Намаз", "Джихад"],
correct: 0
},
{
question: "Сколько обязательных молитв в день?",
options: ["3", "5", "6"],
correct: 1
},
{
question: "Первая сура Корана?",
options: ["Бакара", "Фатиха", "Ихлас"],
correct: 1
},
{
question: "Священная книга мусульман?",
options: ["Библия", "Коран", "Тора"],
correct: 1
},
{
question: "Месяц поста называется?",
options: ["Шаабан", "Рамадан", "Мухаррам"],
correct: 1
},
{
question: "Закят это?",
options: ["Молитва", "Обязательная милостыня", "Пост"],
correct: 1
},
{
question: "Куда обращаются во время намаза?",
options: ["Медина", "Мекка", "Иерусалим"],
correct: 1
},
{
question: "Пророк Ислама?",
options: ["Муса", "Мухаммад (с)", "Иса"],
correct: 1
},
{
question: "Где совершается хадж?",
options: ["Мекка", "Каир", "Стамбул"],
correct: 0
},
{
question: "Что такое шахада?",
options: ["Свидетельство веры", "Намаз", "Пост"],
correct: 0
}
];

const questions_ar = [
{
question: "ما هي أركان الإسلام الخمسة؟",
options: ["الصلاة والصوم والحج والزكاة والشهادة", "الصلاة فقط", "الجهاد"],
correct: 0
},
{
question: "كم عدد الصلوات المفروضة في اليوم؟",
options: ["3", "5", "6"],
correct: 1
},
{
question: "ما هي أول سورة في القرآن؟",
options: ["البقرة", "الفاتحة", "الإخلاص"],
correct: 1
},
{
question: "ما هو كتاب المسلمين المقدس؟",
options: ["الإنجيل", "القرآن", "التوراة"],
correct: 1
},
{
question: "ما اسم شهر الصيام؟",
options: ["شعبان", "رمضان", "محرم"],
correct: 1
},
{
question: "ما هي الزكاة؟",
options: ["صلاة", "صدقة واجبة", "صوم"],
correct: 1
},
{
question: "إلى أين يتجه المسلمون في الصلاة؟",
options: ["المدينة", "مكة", "القدس"],
correct: 1
},
{
question: "من هو نبي الإسلام؟",
options: ["موسى", "محمد ﷺ", "عيسى"],
correct: 1
},
{
question: "أين يؤدى الحج؟",
options: ["مكة", "القاهرة", "دمشق"],
correct: 0
},
{
question: "ما هي الشهادة؟",
options: ["الإقرار بوحدانية الله", "صلاة", "زكاة"],
correct: 0
}
];

const questions_fa = [
{
question: "پنج رکن اسلام کدامند؟",
options: ["نماز، روزه، حج، زکات، شهادت", "فقط نماز", "جهاد"],
correct: 0
},
{
question: "چند نماز واجب در روز است؟",
options: ["3", "5", "6"],
correct: 1
},
{
question: "اولین سوره قرآن کدام است؟",
options: ["بقره", "فاتحه", "اخلاص"],
correct: 1
},
{
question: "کتاب مقدس مسلمانان چیست؟",
options: ["انجیل", "قرآن", "تورات"],
correct: 1
},
{
question: "ماه روزه چه نام دارد؟",
options: ["شعبان", "رمضان", "محرم"],
correct: 1
},
{
question: "زکات چیست؟",
options: ["نماز", "صدقه واجب", "روزه"],
correct: 1
},
{
question: "قبله مسلمانان کجاست؟",
options: ["مدینه", "مکه", "بیت المقدس"],
correct: 1
},
{
question: "پیامبر اسلام کیست؟",
options: ["موسی", "محمد (ص)", "عیسی"],
correct: 1
},
{
question: "حج در کجا انجام می‌شود؟",
options: ["مکه", "تهران", "دمشق"],
correct: 0
},
{
question: "شهادت چیست؟",
options: ["گواهی به یگانگی خدا", "نماز", "روزه"],
correct: 0
}
];
// ====== ACTIVE QUESTIONS ======
let activeQuestions =
  lang === "ru" ? questions_ru :
  lang === "ar" ? questions_ar :
  lang === "fa" ? questions_fa :
  questions_tj;

activeQuestions = activeQuestions.slice(0, totalQuestions);

// ====== LOAD QUESTION ======
function loadQuestion() {
  selected = null;
  answersBox.innerHTML = "";
  nextBtn.style.display = "none";

  let q = activeQuestions[currentIndex];

  questionNumber.innerHTML =
    `${uiText[lang].q} ${currentIndex + 1} ${uiText[lang].of} ${activeQuestions.length}`;

  questionText.innerHTML = q.question;

  q.options.forEach((option, index) => {
    let btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = option;

    btn.onclick = () => selectAnswer(index, btn);

    answersBox.appendChild(btn);
  });
}

// ====== SELECT ANSWER ======
function selectAnswer(index, btn) {
  if (selected !== null) return;

  selected = index;
  let correctIndex = activeQuestions[currentIndex].correct;
  let buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((b, i) => {
    if (i === correctIndex) {
      b.style.background = "#4CAF50";
      b.style.color = "#fff";
    }
    if (i === index && index !== correctIndex) {
      b.style.background = "#ff4d4d";
      b.style.color = "#fff";
    }
  });

  if (index === correctIndex) score++;

  userAnswers.push({
    question: activeQuestions[currentIndex].question,
    correct: correctIndex,
    selected: index,
    options: activeQuestions[currentIndex].options
  });

  nextBtn.style.display = "block";
  nextBtn.innerText = uiText[lang].next;
}

// ====== NEXT BUTTON ======
nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < activeQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function goBack() {
    window.location.href = "test.html";
}

// ====== SHOW RESULT ======
function showResult() {
  questionNumber.innerHTML = "";
  questionText.innerHTML =
    `${uiText[lang].result}: ${score} / ${activeQuestions.length}`;
  answersBox.innerHTML = "";
  document.getElementById("resultBox").innerHTML = "";
  nextBtn.style.display = "none";

  userAnswers.forEach(item => {
    let div = document.createElement("div");
    div.style.marginBottom = "15px";

    let correct = item.selected === item.correct;

    div.innerHTML = `
      <div style="font-weight:bold;color:${correct ? '#4CAF50' : '#ff4d4d'}">
      ${correct ? "✔" : "✖"} ${item.question}
      </div>
      ${
        correct
          ? `<div style="color:#4CAF50">${item.options[item.correct]}</div>`
          : `
            <div style="color:#ff4d4d">Интихоби шумо: ${item.options[item.selected]}</div>
            <div style="color:#4CAF50">Дуруст: ${item.options[item.correct]}</div>
          `
      }
    `;

    document.getElementById("resultBox").appendChild(div);
  });

  let restartBtn = document.createElement("button");
  restartBtn.className = "main-btn";
  restartBtn.innerText = uiText[lang].restart;
  restartBtn.onclick = () => location.reload();

  document.getElementById("resultBox").appendChild(restartBtn);
}

// ====== START ======
loadQuestion();