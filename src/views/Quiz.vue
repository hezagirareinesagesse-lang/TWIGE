<template>
  <div class="quiz-page">
    <!-- User Info Section (Données mockées) -->
    <div class="user-info-section">
      <div class="user-card">
        <div class="user-avatar"><Icon name="user" size="40px" /></div>
        <div class="user-details">
          <h3>{{ mockUser.name }}</h3>
          <p class="user-email">{{ mockUser.email }}</p>
          <p class="user-status" :class="mockUser.isLoggedIn ? 'logged-in' : 'logged-out'">
            <Icon :name="mockUser.isLoggedIn ? 'check-circle' : 'x-circle'" size="14px" />
            {{ mockUser.isLoggedIn ? 'Connecté' : 'Non connecté' }}
          </p>
        </div>
      </div>
    </div>

    <div class="quiz-card" v-if="quiz">

      <h1><Icon name="target" size="28px" /> Quiz - Leçon {{ lessonId }}</h1>

      <!-- Barre de progression -->
      <p class="progress-text">
        Question {{ answeredCount }} / {{ quiz.questions.length }}
      </p>

      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: progressPercentage + '%' }"
        ></div>
      </div>

      <!-- Questions -->
      <div
        v-for="(q, index) in quiz.questions"
        :key="index"
        class="question"
        :class="{ answered: userAnswers[index] !== undefined }"
      >
        <div class="question-header">
          <h3>{{ index + 1 }}. {{ q.question }}</h3>
          <span v-if="score !== null" class="answer-indicator">
            <Icon :name="userAnswers[index] === q.answer ? 'check-circle' : 'x-circle'" size="20px" />
          </span>
        </div>

        <div
          v-for="(option, i) in q.options"
          :key="i"
          class="option"
          :class="{ 
            selected: userAnswers[index] === i,
            correct: score !== null && i === q.answer,
            incorrect: score !== null && userAnswers[index] === i && i !== q.answer
          }"
        >
          <label>
            <input
              type="radio"
              :name="'question' + index"
              :value="i"
              v-model="userAnswers[index]"
              class="radio-input"
              :disabled="score !== null"
            />
            <span>{{ option }}</span>
          </label>
        </div>

        <!-- Afficher la bonne réponse après soumission -->
        <div v-if="score !== null && userAnswers[index] !== q.answer" class="correct-answer">
          <Icon name="check-circle" size="16px" /> Bonne réponse : {{ quiz.questions[index].options[q.answer] }}
        </div>
      </div>

      <!-- Boutons d'action -->
      <div class="action-buttons">
        <button class="quiz-btn" @click="submitQuiz" v-if="score === null">
          <Icon name="check" size="16px" /> Valider
        </button>
        <button class="quiz-btn reset-btn" @click="resetQuiz" v-else>
          <Icon name="refresh" size="16px" /> Recommencer
        </button>
        <button class="quiz-btn back-btn" @click="$router.back()">
          <Icon name="arrow-left" size="16px" /> Retour
        </button>
      </div>

      <!-- Résultats détaillés -->
      <div v-if="score !== null" class="results-section">
        <div class="score-display">
          <h2>Résultat Final</h2>
          <div class="score-circle">
            <div class="score-percentage">{{ scorePercentage }}%</div>
            <div class="score-text">{{ score }} / {{ quiz.questions.length }}</div>
          </div>
        </div>

        <div class="feedback">
          <p v-if="scorePercentage >= 80" class="feedback-excellent">
            <Icon name="star" size="16px" /> Excellent ! Vous maîtrisez bien ce sujet !
          </p>
          <p v-else-if="scorePercentage >= 60" class="feedback-good">
            <Icon name="thumbs-up" size="16px" /> Bien ! Continuez comme ça !
          </p>
          <p v-else class="feedback-improve">
            <Icon name="activity" size="16px" /> Vous pouvez faire mieux, réessayez !
          </p>
        </div>

        <!-- Mock Data Display -->
        <div class="mock-data">
          <h3><Icon name="bar-chart" size="16px" /> Données de Test</h3>
          <div class="data-item">
            <span class="label">Utilisateur :</span>
            <span class="value">{{ mockUser.name }}</span>
          </div>
          <div class="data-item">
            <span class="label">Leçon :</span>
            <span class="value">Leçon {{ lessonId }}</span>
          </div>
          <div class="data-item">
            <span class="label">Date :</span>
            <span class="value">{{ currentDate }}</span>
          </div>
          <div class="data-item">
            <span class="label">Durée :</span>
            <span class="value">{{ duration }}</span>
          </div>
          <div class="data-item">
            <span class="label">Tentatives :</span>
            <span class="value">{{ attempts }}</span>
          </div>
        </div>
      </div>

    </div>

    <div v-else class="no-quiz">
      <h2><Icon name="x-circle" size="24px" /> Aucun quiz disponible pour cette leçon.</h2>
      <button class="quiz-btn" @click="$router.back()"><Icon name="arrow-left" size="16px" /> Retour</button>
    </div>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { quizzes } from '../data/quiz.js'
import { ref, computed } from 'vue'
import Icon from '../components/Icon.vue'

const route = useRoute()
const lessonId = Number(route.params.id)

const quiz = quizzes.find(q => q.lessonId === lessonId)

const userAnswers = ref([])
const score = ref(null)
const startTime = ref(Date.now())
const attempts = ref(1)

// Données mockées pour tester
const mockUser = ref({
  id: 'user_001',
  name: 'Alice Nkurunziza',
  email: 'alice.nkurunziza@example.com',
  isLoggedIn: true,
  registrationDate: '2024-01-15',
  level: 'Intermédiaire'
})

// Date actuelle formatée
const currentDate = computed(() => {
  return new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
})

// Durée écoulée
const duration = computed(() => {
  const elapsed = Math.floor((Date.now() - startTime.value) / 1000)
  const minutes = Math.floor(elapsed / 60)
  const seconds = elapsed % 60
  return `${minutes}m ${seconds}s`
})

const submitQuiz = () => {
  let correct = 0

  quiz.questions.forEach((q, index) => {
    if (userAnswers.value[index] === q.answer) {
      correct++
    }
  })

  score.value = correct
}

const resetQuiz = () => {
  userAnswers.value = []
  score.value = null
  startTime.value = Date.now()
  attempts.value += 1
}

const answeredCount = computed(() => {
  return userAnswers.value.filter(a => a !== undefined).length
})

const progressPercentage = computed(() => {
  if (!quiz) return 0
  return (answeredCount.value / quiz.questions.length) * 100
})

const scorePercentage = computed(() => {
  if (score.value === null || !quiz) return 0
  return Math.round((score.value / quiz.questions.length) * 100)
})
</script>

<style scoped>
/* Page & Card Layout */
.quiz-page {
  min-height: 100vh;
  padding: 60px 40px 40px;
  background: linear-gradient(135deg, #c9d6ff, #e2e2e2);
  font-family: 'Poppins', sans-serif;
  margin-top: 80px;
}

.quiz-card {
  max-width: 700px;
  margin: auto;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  padding: 35px;
  border-radius: 25px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

/* User Info Section */
.user-info-section {
  max-width: 700px;
  margin: auto auto 30px;
  padding: 0;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.user-avatar {
  font-size: 40px;
  min-width: 50px;
  text-align: center;
}

.user-details h3 {
  margin: 0 0 5px 0;
  color: #512da8;
  font-size: 18px;
}

.user-email {
  margin: 0;
  color: #666;
  font-size: 13px;
}

.user-status {
  margin: 5px 0 0 0;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  width: fit-content;
}

.user-status.logged-in {
  background: rgba(76, 175, 80, 0.15);
  color: #2e7d32;
}

.user-status.logged-out {
  background: rgba(244, 67, 54, 0.15);
  color: #c62828;
}

/* Quiz Title */
.quiz-card h1 {
  text-align: center;
  color: #512da8;
  margin: 0 0 25px 0;
  font-size: 28px;
}

/* Progress Bar */
.progress-text {
  font-weight: 600;
  margin-bottom: 8px;
  color: #512da8;
  font-size: 14px;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: #eee;
  border-radius: 20px;
  margin-bottom: 30px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #512da8, #5c6bc0);
  transition: width 0.4s ease;
}

/* Question Layout */
.question {
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  border: 1px solid rgba(81, 45, 168, 0.1);
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  gap: 10px;
}

.question-header h3 {
  margin: 0;
  color: #333;
  font-size: 16px;
  flex: 1;
}

.answer-indicator {
  font-size: 20px;
  min-width: 25px;
  text-align: center;
}

/* Options */
.option {
  display: block;
  padding: 14px 18px;
  margin-bottom: 12px;
  border-radius: 15px;
  cursor: pointer;
  background: white;
  border: 2px solid #ddd;
  transition: all 0.3s ease;
}

.option label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  margin: 0;
  font-size: 14px;
}

.radio-input {
  cursor: pointer;
  min-width: 18px;
}

.option:hover {
  transform: translateX(5px);
  border-color: #5c6bc0;
  background: rgba(92, 107, 192, 0.05);
}

/* Selected Option */
.option.selected {
  background: rgba(81, 45, 168, 0.1);
  border-color: #512da8;
}

.option.selected span {
  font-weight: 600;
  color: #512da8;
}

/* Correct Answer */
.option.correct {
  background: rgba(76, 175, 80, 0.15);
  border-color: #4caf50;
}

.option.correct span {
  color: #2e7d32;
  font-weight: 600;
}

/* Incorrect Answer */
.option.incorrect {
  background: rgba(244, 67, 54, 0.15);
  border-color: #f44336;
}

.option.incorrect span {
  color: #c62828;
  font-weight: 600;
}

/* Correct Answer Display */
.correct-answer {
  margin-top: 15px;
  padding: 12px;
  background: rgba(76, 175, 80, 0.15);
  border-left: 4px solid #4caf50;
  border-radius: 8px;
  color: #2e7d32;
  font-size: 14px;
  font-weight: 500;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 15px;
  margin-top: 25px;
}

.quiz-btn {
  flex: 1;
  padding: 12px 20px;
  border-radius: 30px;
  border: none;
  background: linear-gradient(90deg, #512da8, #5c6bc0);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
}

.quiz-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(81, 45, 168, 0.3);
}

.quiz-btn:active {
  transform: translateY(-1px);
}

.quiz-btn.reset-btn {
  background: linear-gradient(90deg, #ff9800, #f57c00);
}

.quiz-btn.reset-btn:hover {
  box-shadow: 0 10px 20px rgba(255, 152, 0, 0.3);
}

.quiz-btn.back-btn {
  background: linear-gradient(90deg, #607d8b, #455a64);
}

.quiz-btn.back-btn:hover {
  box-shadow: 0 10px 20px rgba(96, 125, 139, 0.3);
}

/* Results Section */
.results-section {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid rgba(81, 45, 168, 0.2);
}

.score-display {
  text-align: center;
  margin-bottom: 25px;
}

.score-display h2 {
  color: #512da8;
  margin-bottom: 20px;
  font-size: 22px;
}

.score-circle {
  width: 150px;
  height: 150px;
  margin: auto;
  border-radius: 50%;
  background: linear-gradient(135deg, #512da8, #5c6bc0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(81, 45, 168, 0.3);
  color: white;
}

.score-percentage {
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
}

.score-text {
  font-size: 14px;
  margin-top: 8px;
  opacity: 0.9;
}

/* Feedback Messages */
.feedback {
  text-align: center;
  margin: 20px 0;
  padding: 15px;
  border-radius: 15px;
  font-weight: 500;
  font-size: 15px;
}

.feedback p {
  margin: 0;
}

.feedback-excellent {
  background: rgba(76, 175, 80, 0.15);
  color: #2e7d32;
}

.feedback-good {
  background: rgba(33, 150, 243, 0.15);
  color: #1565c0;
}

.feedback-improve {
  background: rgba(255, 152, 0, 0.15);
  color: #e65100;
}

/* Mock Data Display */
.mock-data {
  margin-top: 25px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 15px;
  border: 1px solid rgba(81, 45, 168, 0.15);
}

.mock-data h3 {
  margin: 0 0 15px 0;
  color: #512da8;
  font-size: 16px;
}

.data-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(81, 45, 168, 0.1);
  font-size: 14px;
}

.data-item:last-child {
  border-bottom: none;
}

.data-item .label {
  font-weight: 600;
  color: #512da8;
}

.data-item .value {
  color: #666;
  font-weight: 500;
}

/* No Quiz Message */
.no-quiz {
  max-width: 700px;
  margin: auto;
  text-align: center;
  padding: 40px;
}

.no-quiz h2 {
  color: #512da8;
  margin-bottom: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .quiz-page {
    padding: 100px 20px 20px;
  }

  .quiz-card,
  .user-card {
    padding: 20px;
    border-radius: 15px;
  }

  .quiz-card h1 {
    font-size: 22px;
  }

  .action-buttons {
    flex-direction: column;
  }

  .quiz-btn {
    width: 100%;
  }

  .score-circle {
    width: 120px;
    height: 120px;
  }

  .score-percentage {
    font-size: 36px;
  }

  .user-card {
    flex-direction: column;
    text-align: center;
  }

  .user-details h3 {
    font-size: 16px;
  }

  .question-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>