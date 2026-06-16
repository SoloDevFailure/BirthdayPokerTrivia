const quizQuestions = [
  { id: 1, type: "choice", categoryId: "who_is_richer", categoryName: "Who Is Richer?", categoryColors: ["#d91844", "#9b1231"], optionA: "Option 1", optionB: "Option 2", optionAEmoji: "💎", optionBEmoji: "👑", prompt: "Gabe Newell or Taylor Swift", correctAnswer: "A" },
  { id: 2, type: "choice", categoryId: "who_is_richer", categoryName: "Who Is Richer?", categoryColors: ["#d91844", "#9b1231"], optionA: "Option 1", optionB: "Option 2", optionAEmoji: "💎", optionBEmoji: "👑", prompt: "Belle Delphine or Chris Hemsworth", correctAnswer: "B" },
  { id: 3, type: "choice", categoryId: "who_is_richer", categoryName: "Who Is Richer?", categoryColors: ["#d91844", "#9b1231"], optionA: "Option 1", optionB: "Option 2", optionAEmoji: "💎", optionBEmoji: "👑", prompt: "Anthony Albanese or Guy Sebastian", correctAnswer: "B" },
  { id: 4, type: "choice", categoryId: "who_is_richer", categoryName: "Who Is Richer?", categoryColors: ["#d91844", "#9b1231"], optionA: "Option 1", optionB: "Option 2", optionAEmoji: "💎", optionBEmoji: "👑", prompt: "Elon Musk or New Zealand", correctAnswer: "A" },
  { id: 5, type: "choice", categoryId: "who_is_richer", categoryName: "Who Is Richer?", categoryColors: ["#d91844", "#9b1231"], optionA: "Option 1", optionB: "Option 2", optionAEmoji: "💎", optionBEmoji: "👑", prompt: "Kanye or Post Malone", correctAnswer: "A" },
  { id: 6, type: "choice", categoryId: "who_is_richer", categoryName: "Who Is Richer?", categoryColors: ["#d91844", "#9b1231"], optionA: "Option 1", optionB: "Option 2", optionAEmoji: "💎", optionBEmoji: "👑", prompt: "The NRL or OnlyFans", correctAnswer: "B" },
  { id: 7, type: "choice", categoryId: "who_is_richer", categoryName: "Who Is Richer?", categoryColors: ["#d91844", "#9b1231"], optionA: "Option 1", optionB: "Option 2", optionAEmoji: "💎", optionBEmoji: "👑", prompt: "Conor McGregor or MrBeast", correctAnswer: "B" },
  { id: 8, type: "choice", categoryId: "true_false", categoryName: "True or False", categoryColors: ["#7f36ba", "#4b1766"], optionA: "True", optionB: "False", optionAEmoji: "✅", optionBEmoji: "❌", prompt: "The PlayStation 2 is still the best-selling video game console of all time.", correctAnswer: "A" },
  { id: 9, type: "choice", categoryId: "true_false", categoryName: "True or False", categoryColors: ["#7f36ba", "#4b1766"], optionA: "True", optionB: "False", optionAEmoji: "✅", optionBEmoji: "❌", prompt: "The movie Die Hard was based on a novel.", correctAnswer: "A" },
  { id: 10, type: "choice", categoryId: "true_false", categoryName: "True or False", categoryColors: ["#7f36ba", "#4b1766"], optionA: "True", optionB: "False", optionAEmoji: "✅", optionBEmoji: "❌", prompt: "In Back to the Future, the time machine was originally going to be a refrigerator instead of a DeLorean.", correctAnswer: "A" },
  { id: 11, type: "choice", categoryId: "true_false", categoryName: "True or False", categoryColors: ["#7f36ba", "#4b1766"], optionA: "True", optionB: "False", optionAEmoji: "✅", optionBEmoji: "❌", prompt: "The actor who played Hagrid in the Harry Potter films was over 7 feet tall in real life.", correctAnswer: "B" },
  { id: 12, type: "choice", categoryId: "true_false", categoryName: "True or False", categoryColors: ["#7f36ba", "#4b1766"], optionA: "True", optionB: "False", optionAEmoji: "✅", optionBEmoji: "❌", prompt: "The movie Top Gun was filmed entirely using real military aircraft with no models or special effects.", correctAnswer: "B" },
  { id: 13, type: "choice", categoryId: "true_false", categoryName: "True or False", categoryColors: ["#7f36ba", "#4b1766"], optionA: "True", optionB: "False", optionAEmoji: "✅", optionBEmoji: "❌", prompt: "The movie Jaws was the first film ever to earn over $100 million at the box office.", correctAnswer: "B" },
  { id: 14, type: "choice", categoryId: "beer_racehorse", categoryName: "Beer or Racehorse?", categoryColors: ["#0d7dd8", "#174c8d"], optionA: "Beer", optionB: "Racehorse", optionAEmoji: "🍺", optionBEmoji: "🐎", prompt: "Young Henrys", correctAnswer: "A" },
  { id: 15, type: "choice", categoryId: "beer_racehorse", categoryName: "Beer or Racehorse?", categoryColors: ["#0d7dd8", "#174c8d"], optionA: "Beer", optionB: "Racehorse", optionAEmoji: "🍺", optionBEmoji: "🐎", prompt: "Asahi", correctAnswer: "A" },
  { id: 16, type: "choice", categoryId: "beer_racehorse", categoryName: "Beer or Racehorse?", categoryColors: ["#0d7dd8", "#174c8d"], optionA: "Beer", optionB: "Racehorse", optionAEmoji: "🍺", optionBEmoji: "🐎", prompt: "Black Caviar", correctAnswer: "B" },
  { id: 17, type: "choice", categoryId: "beer_racehorse", categoryName: "Beer or Racehorse?", categoryColors: ["#0d7dd8", "#174c8d"], optionA: "Beer", optionB: "Racehorse", optionAEmoji: "🍺", optionBEmoji: "🐎", prompt: "Kingston Town", correctAnswer: "B" },
  { id: 18, type: "choice", categoryId: "beer_racehorse", categoryName: "Beer or Racehorse?", categoryColors: ["#0d7dd8", "#174c8d"], optionA: "Beer", optionB: "Racehorse", optionAEmoji: "🍺", optionBEmoji: "🐎", prompt: "Hawkers", correctAnswer: "A" },
  { id: 19, type: "choice", categoryId: "beer_racehorse", categoryName: "Beer or Racehorse?", categoryColors: ["#0d7dd8", "#174c8d"], optionA: "Beer", optionB: "Racehorse", optionAEmoji: "🍺", optionBEmoji: "🐎", prompt: "Moon Dog", correctAnswer: "A" },
  { id: 20, type: "choice", categoryId: "beer_spell", categoryName: "Beer or D&D Spell?", categoryColors: ["#b05b12", "#6f3510"], optionA: "Beer", optionB: "D&D Spell", optionAEmoji: "🍺", optionBEmoji: "🧙", prompt: "Mage Hand", correctAnswer: "B" },
  { id: 21, type: "choice", categoryId: "beer_spell", categoryName: "Beer or D&D Spell?", categoryColors: ["#b05b12", "#6f3510"], optionA: "Beer", optionB: "D&D Spell", optionAEmoji: "🍺", optionBEmoji: "🧙", prompt: "Range", correctAnswer: "A" },
  { id: 22, type: "choice", categoryId: "beer_spell", categoryName: "Beer or D&D Spell?", categoryColors: ["#b05b12", "#6f3510"], optionA: "Beer", optionB: "D&D Spell", optionAEmoji: "🍺", optionBEmoji: "🧙", prompt: "Magic Missile", correctAnswer: "B" },
  { id: 23, type: "choice", categoryId: "beer_spell", categoryName: "Beer or D&D Spell?", categoryColors: ["#b05b12", "#6f3510"], optionA: "Beer", optionB: "D&D Spell", optionAEmoji: "🍺", optionBEmoji: "🧙", prompt: "Revel", correctAnswer: "A" },
  { id: 24, type: "choice", categoryId: "beer_spell", categoryName: "Beer or D&D Spell?", categoryColors: ["#b05b12", "#6f3510"], optionA: "Beer", optionB: "D&D Spell", optionAEmoji: "🍺", optionBEmoji: "🧙", prompt: "White Rabbit", correctAnswer: "A" },
  { id: 25, type: "choice", categoryId: "beer_spell", categoryName: "Beer or D&D Spell?", categoryColors: ["#b05b12", "#6f3510"], optionA: "Beer", optionB: "D&D Spell", optionAEmoji: "🍺", optionBEmoji: "🧙", prompt: "Fixation", correctAnswer: "A" },
  { id: 26, type: "choice", categoryId: "tool_ikea", categoryName: "Tool Brand or IKEA?", categoryColors: ["#f2b705", "#2257a6"], optionA: "Tool Brand", optionB: "IKEA", optionAEmoji: "🔧", optionBEmoji: "🛋️", prompt: "BAHCO", correctAnswer: "A" },
  { id: 27, type: "choice", categoryId: "tool_ikea", categoryName: "Tool Brand or IKEA?", categoryColors: ["#f2b705", "#2257a6"], optionA: "Tool Brand", optionB: "IKEA", optionAEmoji: "🔧", optionBEmoji: "🛋️", prompt: "PAX", correctAnswer: "B" },
  { id: 28, type: "choice", categoryId: "tool_ikea", categoryName: "Tool Brand or IKEA?", categoryColors: ["#f2b705", "#2257a6"], optionA: "Tool Brand", optionB: "IKEA", optionAEmoji: "🔧", optionBEmoji: "🛋️", prompt: "MAFELL", correctAnswer: "A" },
  { id: 29, type: "choice", categoryId: "tool_ikea", categoryName: "Tool Brand or IKEA?", categoryColors: ["#f2b705", "#2257a6"], optionA: "Tool Brand", optionB: "IKEA", optionAEmoji: "🔧", optionBEmoji: "🛋️", prompt: "KALLAX", correctAnswer: "B" },
  { id: 30, type: "choice", categoryId: "tool_ikea", categoryName: "Tool Brand or IKEA?", categoryColors: ["#f2b705", "#2257a6"], optionA: "Tool Brand", optionB: "IKEA", optionAEmoji: "🔧", optionBEmoji: "🛋️", prompt: "VITTSJÖ", correctAnswer: "B" },
  { id: 31, type: "choice", categoryId: "tool_ikea", categoryName: "Tool Brand or IKEA?", categoryColors: ["#f2b705", "#2257a6"], optionA: "Tool Brand", optionB: "IKEA", optionAEmoji: "🔧", optionBEmoji: "🛋️", prompt: "FELO", correctAnswer: "A" },
  { id: 32, type: "choice", categoryId: "costs_more", categoryName: "What Costs More?", categoryColors: ["#1b9a5b", "#0f6b42"], optionA: "Option A", optionB: "Option B", optionAEmoji: "💰", optionBEmoji: "💸", prompt: "Warhammer 40,000 Warlord Titan (Forge World resin kit) or 2003 Toyota Corolla Ascent at 240,000km with rego", correctAnswer: "B" },
  { id: 33, type: "choice", categoryId: "costs_more", categoryName: "What Costs More?", categoryColors: ["#1b9a5b", "#0f6b42"], optionA: "Option A", optionB: "Option B", optionAEmoji: "💰", optionBEmoji: "💸", prompt: "One night in the Royal Suite at the Burj Al Arab or gaming PC with Intel Core Ultra 9 285K, RTX 5090, OLED monitor and sim racing setup", correctAnswer: "A" },
  { id: 34, type: "choice", categoryId: "costs_more", categoryName: "What Costs More?", categoryColors: ["#1b9a5b", "#0f6b42"], optionA: "Option A", optionB: "Option B", optionAEmoji: "💰", optionBEmoji: "💸", prompt: "2 x VIP Taylor Swift Eras Tour tickets at original sale price or 2018 Sea-Doo Spark 2UP with trailer from Facebook Marketplace", correctAnswer: "B" },
  { id: 35, type: "choice", categoryId: "costs_more", categoryName: "What Costs More?", categoryColors: ["#1b9a5b", "#0f6b42"], optionA: "Option A", optionB: "Option B", optionAEmoji: "💰", optionBEmoji: "💸", prompt: "Pikachu Illustrator PSA 10 or a family trip to Japan for four including flights and accommodation", correctAnswer: "A" },
  { id: 36, type: "choice", categoryId: "costs_more", categoryName: "What Costs More?", categoryColors: ["#1b9a5b", "#0f6b42"], optionA: "Option A", optionB: "Option B", optionAEmoji: "💰", optionBEmoji: "💸", prompt: "Louis Vuitton Neverfull MM or Milwaukee M18 18-piece combo kit with Packout radio redemption", correctAnswer: "B" },
  { id: 37, type: "price", categoryId: "price_is_right", categoryName: "The Price Is Right", categoryColors: ["#139b63", "#0f6b42"], categoryEmoji: "💵", prompt: "How much does a carton of Corona Extra and a pack of Winfield Blue 25s cost?", answer: 135 },
  { id: 38, type: "price", categoryId: "price_is_right", categoryName: "The Price Is Right", categoryColors: ["#139b63", "#0f6b42"], categoryEmoji: "💵", prompt: "How much for a STIHL MS 182 C-BE Petrol Chainsaw (non sale price)?", answer: 599 },
  { id: 39, type: "price", categoryId: "price_is_right", categoryName: "The Price Is Right", categoryColors: ["#139b63", "#0f6b42"], categoryEmoji: "💵", prompt: "How much is the Yeti Tundra 45 + Rambler jug?", answer: 650 },
  { id: 40, type: "price", categoryId: "price_is_right", categoryName: "The Price Is Right", categoryColors: ["#139b63", "#0f6b42"], categoryEmoji: "💵", prompt: "How much does a Bugaboo Fox 5 pram package cost (non sale price)?", answer: 1899 },
  { id: 41, type: "price", categoryId: "price_is_right", categoryName: "The Price Is Right", categoryColors: ["#139b63", "#0f6b42"], categoryEmoji: "💵", prompt: "How much is the buy-in to the World Series of Poker Main Event? (AUD)", answer: 16000 }
];

const state = {
  playerName: "",
  answers: {},
  unlockedCount: 1,
  lastUnlockedCount: 1,
  submitted: false
};

const els = {
  screens: document.querySelectorAll("[data-screen]"),
  nameForm: document.querySelector("[data-name-form]"),
  nameInput: document.querySelector("#playerName"),
  playerPill: document.querySelector("[data-player-pill]"),
  categoryList: document.querySelector("[data-category-list]"),
  progressText: document.querySelector("[data-progress-text]"),
  progressPercent: document.querySelector("[data-progress-percent]"),
  progressBar: document.querySelector("[data-progress-bar]"),
  submit: document.querySelector("[data-submit]"),
  resultName: document.querySelector("[data-result-name]"),
  resultScore: document.querySelector("[data-result-score]"),
  resultTotal: document.querySelector("[data-result-total]"),
  resultCorrect: document.querySelector("[data-result-correct]"),
  resultIncorrect: document.querySelector("[data-result-incorrect]"),
  resultAccuracy: document.querySelector("[data-result-accuracy]"),
  categoryScores: document.querySelector("[data-category-scores]"),
  review: document.querySelector("[data-review]"),
  playAgain: document.querySelector("[data-play-again]"),
  backResults: document.querySelector("[data-back-results]"),
  reviewList: document.querySelector("[data-review-list]")
};

const quizData = buildCategories(quizQuestions);
const allQuestions = quizData.flatMap((category) =>
  category.questions.map((question) => ({ ...question, category }))
);

function buildCategories(questions) {
  const categories = new Map();
  questions.forEach((question) => {
    if (!categories.has(question.categoryId)) {
      categories.set(question.categoryId, {
        id: question.categoryId,
        name: question.categoryName,
        colors: question.categoryColors,
        emoji: question.categoryEmoji || question.optionAEmoji,
        type: question.type,
        options: question.type === "choice"
          ? {
              A: { label: question.optionA, emoji: question.optionAEmoji },
              B: { label: question.optionB, emoji: question.optionBEmoji }
            }
          : null,
        questions: []
      });
    }
    categories.get(question.categoryId).questions.push(question);
  });
  return [...categories.values()];
}

function showScreen(name) {
  const current = document.querySelector(".screen.is-active");
  const next = document.querySelector(`[data-screen="${name}"]`);
  if (!next || current === next) {
    window.scrollTo({ top: 0, behavior: "instant" });
    return;
  }

  if (current) {
    current.classList.remove("is-active");
    current.classList.add("is-exiting");
    window.setTimeout(() => current.classList.remove("is-exiting"), 340);
  }

  next.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function getAnsweredCount() {
  return allQuestions.filter((question) => isQuestionAnswered(question)).length;
}

function isQuestionAnswered(question) {
  const answer = state.answers[question.id];
  if (question.type === "price") return Number.isFinite(answer);
  return answer === "A" || answer === "B";
}

function updateUnlockedCategories() {
  let unlocked = 1;
  quizData.forEach((category, index) => {
    const previous = quizData[index - 1];
    if (!previous) return;

    const previousComplete = previous.questions.every((question) => isQuestionAnswered(question));
    if (previousComplete) unlocked = index + 1;
  });
  state.unlockedCount = Math.max(state.unlockedCount, unlocked);
}

function updateProgress() {
  const answered = getAnsweredCount();
  const total = allQuestions.length;
  const percent = Math.round((answered / total) * 100);
  els.progressText.innerHTML = `<strong>${answered}</strong> / ${total} Questions Answered`;
  els.progressPercent.textContent = `${percent}%`;
  els.progressBar.style.width = `${percent}%`;
  els.submit.disabled = answered !== total;
}

function optionLabel(option) {
  return `${option.emoji} ${option.label}`;
}

function categorySubLabel(category) {
  if (category.type === "price") return "💵 Closest guess scores highest";
  return `${optionLabel(category.options.A)} · ${optionLabel(category.options.B)}`;
}

function renderQuiz() {
  const unlockedBefore = state.unlockedCount;
  updateUnlockedCategories();
  els.categoryList.innerHTML = "";

  quizData.forEach((category, index) => {
    const unlocked = index < state.unlockedCount;
    const newlyUnlocked = unlocked && index >= unlockedBefore && state.unlockedCount > unlockedBefore;
    const section = document.createElement("section");
    section.className = `category${unlocked ? "" : " is-locked"}${newlyUnlocked ? " is-newly-unlocked" : ""}`;
    section.style.setProperty("--cat-a", category.colors[0]);
    section.style.setProperty("--cat-b", category.colors[1]);

    const header = document.createElement("header");
    header.className = "category-header";
    header.innerHTML = `
      <span class="category-icon" aria-hidden="true">${unlocked ? category.emoji : "🔒"}</span>
      <span class="category-title">
        <strong>${unlocked ? category.name : `Category ${index + 1}`}</strong>
        <small>${unlocked ? categorySubLabel(category) : "Complete previous category to unlock"}</small>
      </span>
      ${newlyUnlocked ? `<span class="unlock-badge">Unlocked</span>` : ""}
    `;
    section.append(header);

    if (!unlocked) {
      const locked = document.createElement("div");
      locked.className = "locked-body";
      locked.innerHTML = `<strong>Category ${index + 1}</strong><span>Complete previous category to unlock</span>`;
      section.append(locked);
      els.categoryList.append(section);
      return;
    }

    const questions = document.createElement("div");
    questions.className = "question-list";
    category.questions.forEach((question) => {
      questions.append(
        question.type === "price"
          ? renderPriceQuestion(question)
          : renderChoiceQuestion(category, question)
      );
    });

    section.append(questions);
    els.categoryList.append(section);
  });

  updateProgress();
  state.lastUnlockedCount = state.unlockedCount;
}

function renderChoiceQuestion(category, question) {
  const row = document.createElement("div");
  row.className = "question-row";
  row.innerHTML = `
    <span class="question-number">${question.id}.</span>
    ${renderAnswerButton(category, question, "A")}
    ${renderAnswerButton(category, question, "B")}
  `;
  return row;
}

function renderAnswerButton(category, question, answer) {
  const option = category.options[answer];
  const selected = state.answers[question.id] === answer;
  return `
    <button
      class="answer-button${selected ? " is-selected" : ""}"
      type="button"
      data-question-id="${question.id}"
      data-answer="${answer}"
      aria-label="${question.id}. ${option.label}"
    >
      <span class="emoji" aria-hidden="true">${option.emoji}</span>
      <span class="label">${option.label}</span>
    </button>
  `;
}

function renderPriceQuestion(question) {
  const row = document.createElement("label");
  row.className = "price-question";
  row.innerHTML = `
    <span class="question-number">${question.id}.</span>
    <span class="price-prompt">${question.prompt}</span>
    <span class="money-input">
      <span aria-hidden="true">$</span>
      <input
        type="text"
        inputmode="decimal"
        autocomplete="off"
        placeholder="Enter amount"
        data-price-question-id="${question.id}"
        value="${formatInputValue(state.answers[question.id])}"
        aria-label="${question.id}. ${question.prompt}"
      >
    </span>
  `;
  return row;
}

function formatInputValue(value) {
  return Number.isFinite(value) ? String(value) : "";
}

function parseMoney(value) {
  const cleaned = value.replace(/\$/g, "").replace(/,/g, "").trim();
  if (cleaned === "") return null;

  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

function selectAnswer(questionId, answer) {
  state.answers[questionId] = answer;
  if (navigator.vibrate) navigator.vibrate(12);
  renderQuiz();
  requestAnimationFrame(() => {
    const selected = document.querySelector(`[data-question-id="${questionId}"][data-answer="${answer}"]`);
    if (!selected) return;
    selected.classList.add("just-selected");
    selected.addEventListener("animationend", () => selected.classList.remove("just-selected"), { once: true });
  });
}

function savePriceAnswer(questionId, value) {
  const unlockedBefore = state.unlockedCount;
  const parsed = parseMoney(value);
  if (parsed === null) {
    delete state.answers[questionId];
  } else {
    state.answers[questionId] = parsed;
  }
  updateUnlockedCategories();
  updateProgress();
  if (state.unlockedCount !== unlockedBefore) {
    state.unlockedCount = unlockedBefore;
    renderQuiz();
  }
}

function scorePriceQuestion(question, guess) {
  const error = Math.abs(guess - question.answer);
  const percentageError = error / question.answer;
  const score = Math.max(0, 100 - percentageError * 100);
  return { error, percentageError, score };
}

function calculateResult() {
  const choiceQuestions = allQuestions.filter((question) => question.type === "choice");
  const priceQuestions = allQuestions.filter((question) => question.type === "price");
  const correct = choiceQuestions.filter((question) => state.answers[question.id] === question.correctAnswer).length;
  const priceScores = priceQuestions.map((question) => scorePriceQuestion(question, state.answers[question.id]).score);
  const scoredQuestionTotal = correct * 100 + priceScores.reduce((sum, score) => sum + score, 0);
  const overallScore = scoredQuestionTotal / allQuestions.length;
  const categoryScores = quizData.map((category) => calculateCategoryScore(category));

  return {
    correct,
    total: allQuestions.length,
    choiceTotal: choiceQuestions.length,
    incorrect: choiceQuestions.length - correct,
    priceScore: average(priceScores),
    overallScore,
    accuracy: overallScore,
    categoryScores
  };
}

function calculateCategoryScore(category) {
  if (category.type === "price") {
    const scores = category.questions.map((question) =>
      scorePriceQuestion(question, state.answers[question.id]).score
    );
    return { name: category.name, score: average(scores), type: "price" };
  }

  const correct = category.questions.filter((question) => state.answers[question.id] === question.correctAnswer).length;
  return {
    name: category.name,
    score: (correct / category.questions.length) * 100,
    type: "choice"
  };
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function formatScore(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function formatMoney(value) {
  return `$${value.toLocaleString(undefined, {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2
  })}`;
}

function submitAnswers() {
  state.submitted = true;
  const result = calculateResult();
  els.resultName.textContent = state.playerName;
  els.resultScore.textContent = formatScore(result.overallScore);
  els.resultTotal.textContent = "100";
  els.resultCorrect.textContent = result.correct;
  els.resultIncorrect.textContent = result.incorrect;
  els.resultAccuracy.textContent = `${formatScore(result.accuracy)}%`;
  els.categoryScores.innerHTML = result.categoryScores
    .filter((category) => category.type === "price")
    .map((category) => `
      <div class="category-score">
        <span>${category.name} average</span>
        <strong>${formatScore(category.score)} / 100</strong>
      </div>
    `)
    .join("");
  showScreen("results");
}

function renderReview() {
  els.reviewList.innerHTML = "";
  allQuestions.forEach((question) => {
    els.reviewList.append(
      question.type === "price" ? renderPriceReview(question) : renderChoiceReview(question)
    );
  });
}

function renderChoiceReview(question) {
  const picked = state.answers[question.id];
  const isCorrect = picked === question.correctAnswer;
  const category = question.category;
  const correctAnswer = getChoiceReviewAnswer(question);
  const card = document.createElement("article");
  card.className = "review-card";
  card.innerHTML = `
    <div class="review-title">
      <span>${question.id}. ${question.prompt}</span>
      <span class="status-pill${isCorrect ? "" : " is-wrong"}">${isCorrect ? "Correct" : "Incorrect"}</span>
    </div>
    <small>${category.name}</small>
    <div class="review-answers">
      <span class="review-choice${picked === "A" ? " is-picked" : ""}">${category.options.A.emoji}</span>
      <span class="review-choice${picked === "B" ? " is-picked" : ""}">${category.options.B.emoji}</span>
    </div>
    <p class="review-meta">Correct Answer: ${correctAnswer}</p>
  `;
  return card;
}

function getChoiceReviewAnswer(question) {
  const option = question.category.options[question.correctAnswer];
  if (!option.label.startsWith("Option")) return option.label;

  const sides = question.prompt.split(" or ");
  if (sides.length < 2) return option.label;

  return question.correctAnswer === "A" ? sides[0].trim() : sides.slice(1).join(" or ").trim();
}

function renderPriceReview(question) {
  const guess = state.answers[question.id];
  const result = scorePriceQuestion(question, guess);
  const card = document.createElement("article");
  card.className = "review-card price-review-card";
  card.innerHTML = `
    <div class="review-title">
      <span>${question.id}. ${question.prompt}</span>
      <span class="status-pill">${formatScore(result.score)} pts</span>
    </div>
    <small>${question.category.name}</small>
    <dl class="price-review-grid">
      <div><dt>Player guess</dt><dd>${formatMoney(guess)}</dd></div>
      <div><dt>Correct answer</dt><dd>${formatMoney(question.answer)}</dd></div>
      <div><dt>Percentage error</dt><dd>${formatScore(result.percentageError * 100)}%</dd></div>
      <div><dt>Score awarded</dt><dd>${formatScore(result.score)} / 100</dd></div>
    </dl>
  `;
  return card;
}

function resetQuiz() {
  state.answers = {};
  state.unlockedCount = 1;
  state.lastUnlockedCount = 1;
  state.submitted = false;
  renderQuiz();
  showScreen("quiz");
}

els.nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.playerName = els.nameInput.value.trim() || "Player";
  els.playerPill.textContent = state.playerName;
  renderQuiz();
  showScreen("quiz");
});

els.categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-question-id]");
  if (!button) return;
  selectAnswer(button.dataset.questionId, button.dataset.answer);
});

els.categoryList.addEventListener("input", (event) => {
  const input = event.target.closest("[data-price-question-id]");
  if (!input) return;
  savePriceAnswer(input.dataset.priceQuestionId, input.value);
});

els.categoryList.addEventListener("blur", (event) => {
  const input = event.target.closest("[data-price-question-id]");
  if (!input) return;
  const parsed = parseMoney(input.value);
  input.value = parsed === null ? "" : String(parsed);
}, true);

els.submit.addEventListener("click", submitAnswers);

els.review.addEventListener("click", () => {
  renderReview();
  showScreen("review");
});

els.playAgain.addEventListener("click", resetQuiz);
els.backResults.addEventListener("click", () => showScreen("results"));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
