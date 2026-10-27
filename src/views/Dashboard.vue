<template>
  <div class="dashboard">
    <!-- Header -->
    <div class="dashboard-header">
      <div class="header-content">
        <h1><Icon name="book" size="28px" /> Bibliothèque de Cours</h1>
        <p>Explorez nos 10+ cours complets et progressifs</p>
      </div>
      <div class="header-stats">
        <div class="stat-item">
          <span class="stat-value">{{ lessons.length }}</span>
          <span class="stat-label">Cours</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ totalChapters }}</span>
          <span class="stat-label">Chapitres</span>
        </div>
      </div>
    </div>

    <!-- Search and Filter -->
    <div class="filter-section">
      <input
        type="text"
        placeholder="Rechercher un cours..."
        v-model="searchQuery"
        class="search-input"
      />
      <div class="search-icon"><Icon name="search" size="20px" /></div>
      <select v-model="selectedLevel" class="level-filter">
        <option value="">Tous les niveaux</option>
        <option value="débutant">Débutant</option>
        <option value="intermédiaire">Intermédiaire</option>
        <option value="avancé">Avancé</option>
      </select>
    </div>

    <!-- Lessons Grid -->
    <div class="lessons-grid">
      <div
        v-for="lesson in filteredLessons"
        :key="lesson.id"
        class="course-card"
        @click="$router.push(`/lesson/${lesson.id}`)"
      >
        <div class="course-header">
          <div class="course-number">{{ String(lesson.id).padStart(2, '0') }}</div>
          <div class="course-dots">⋯</div>
        </div>
        <h2 class="course-title">{{ lesson.title }}</h2>
        <p class="course-description">
          Apprenez {{ lesson.chapters.length }} concepts clés dans ce module
        </p>
        <div class="course-meta">
          <span class="chapter-badge">{{ lesson.chapters.length }} chapitres</span>
          <span class="difficulty">
            <span v-if="lesson.id <= 3" class="difficulty-badge difficulty-easy"><span class="dot">●</span> Facile</span>
            <span v-else-if="lesson.id <= 6" class="difficulty-badge difficulty-medium"><span class="dot">●</span> Moyen</span>
            <span v-else class="difficulty-badge difficulty-hard"><span class="dot">●</span> Difficile</span>
          </span>
        </div>
        <button class="course-btn">Démarrer <Icon name="arrow-right" size="16px" style="margin-left: 4px;" /></button>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredLessons.length === 0" class="empty-state">
      <p>Aucun cours ne correspond à votre recherche.</p>
      <button @click="resetFilter" class="reset-btn">Réinitialiser</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { lessons } from '../data/lessons.js'
import Icon from '../components/Icon.vue'

const searchQuery = ref('')
const selectedLevel = ref('')

const filteredLessons = computed(() => {
  return lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesSearch
  })
})

const totalChapters = computed(() => {
  return lessons.reduce((sum, lesson) => sum + lesson.chapters.length, 0)
})

const resetFilter = () => {
  searchQuery.value = ''
  selectedLevel.value = ''
}
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding-bottom: 50px;
  font-family: 'Poppins', sans-serif;
}

/* Dashboard Header */
.dashboard-header {
  background: linear-gradient(135deg, #512da8, #5c6bc0);
  color: white;
  padding: 50px 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.header-content h1 {
  font-size: 2.5em;
  margin-bottom: 0.5rem;
  font-weight: 900;
}

.header-content p {
  font-size: 1.1em;
  opacity: 0.9;
  font-weight: 300;
}

.header-stats {
  display: flex;
  gap: 3rem;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2.5em;
  font-weight: 900;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.95em;
  opacity: 0.9;
}

/* Filter Section */
.filter-section {
  max-width: 1200px;
  margin: 40px auto 40px;
  padding: 0 2rem;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
}

.search-input {
  flex: 1;
  min-width: 250px;
  padding: 15px 2rem;
  border: 2px solid white;
  border-radius: 25px;
  font-size: 1em;
  background: white;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #512da8;
  box-shadow: 0 0 0 3px rgba(81, 45, 168, 0.1);
}

.level-filter {
  padding: 15px 2rem;
  border: 2px solid white;
  border-radius: 25px;
  font-size: 1em;
  background: white;
  color: #333;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.level-filter:focus {
  outline: none;
  border-color: #512da8;
}

/* Lessons Grid */
.lessons-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.course-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.course-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #512da8, #5c6bc0);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.course-card:hover::before {
  transform: scaleX(1);
}

.course-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(81, 45, 168, 0.15);
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.course-number {
  font-size: 2.5em;
  font-weight: 900;
  color: #512da8;
  opacity: 0.3;
}

.course-dots {
  font-size: 1.5em;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.course-card:hover .course-dots {
  opacity: 1;
}

.course-title {
  color: #512da8;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  font-size: 1.2em;
}

.course-description {
  color: #666;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-size: 0.95em;
  line-height: 1.5;
}

.course-meta {
  display: flex;
  gap: 10px;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.chapter-badge {
  background: #f0f0f0;
  color: #512da8;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85em;
  font-weight: 600;
}

.difficulty {
  font-size: 0.85em;
  padding: 5px 10px;
}

.difficulty-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85em;
}

.dot {
  display: inline-block;
  font-size: 1.2em;
  line-height: 1;
}

.difficulty-easy {
  background: rgba(76, 175, 80, 0.15);
  color: #2e7d32;
}

.difficulty-medium {
  background: rgba(255, 152, 0, 0.15);
  color: #e65100;
}

.difficulty-hard {
  background: rgba(244, 67, 54, 0.15);
  color: #c62828;
}

.search-icon {
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.5;
  pointer-events: none;
}

.course-btn {
  background: linear-gradient(135deg, #512da8, #5c6bc0);
  color: white;
  border: none;
  padding: 12px 2rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.course-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(81, 45, 168, 0.3);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 60px 2rem;
  color: #666;
}

.empty-state p {
  font-size: 1.2em;
  margin-bottom: 2rem;
}

.reset-btn {
  background: linear-gradient(135deg, #512da8, #5c6bc0);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1em;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(81, 45, 168, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 30px 1.5rem;
  }

  .header-content h1 {
    font-size: 1.8em;
  }

  .header-stats {
    width: 100%;
    justify-content: center;
  }

  .filter-section {
    flex-direction: column;
    margin: 20px 1.5rem;
  }

  .search-input,
  .level-filter {
    width: 100%;
  }

  .lessons-grid {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .dashboard-header {
    padding: 20px 1rem;
  }

  .header-content h1 {
    font-size: 1.5em;
  }

  .header-content p {
    font-size: 0.95em;
  }

  .stat-value {
    font-size: 2em;
  }

  .filter-section {
    padding: 0 1rem;
    margin: 15px 0;
  }

  .course-card {
    padding: 20px;
  }

  .course-title {
    font-size: 1.1em;
  }

  .course-number {
    font-size: 2em;
  }
}
</style>