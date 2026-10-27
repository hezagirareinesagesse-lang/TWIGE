<template>
  <div class="lesson-page">
    <div class="lesson-header">
      <h1><Icon name="book" size="35px" /> {{ lesson.title }}</h1>
    </div>

    <div class="lessons-container">
      <div
        v-for="chapter in lesson.chapters" 
        :key="chapter.id" 
        class="chapter"
      >
        <div 
          class="chapter-title"
          @click="toggleChapter(chapter.id)"
        >
          <span>{{ chapter.title }}</span>
          <Icon :name="activeChapter === chapter.id ? 'x-circle' : 'arrow-right'" size="20px" />
        </div>

        <div v-if="activeChapter === chapter.id" class="chapter-content">
          <div v-html="formatContent(chapter.content)" class="content-formatted"></div>
        </div>

      </div>

    </div>

    <!-- Boutons -->
    <div class="buttons">
      <button class="btn-back" @click="$router.back()">
        <Icon name="arrow-left" size="16px" /> Retour
      </button>

      <button 
        class="btn-quiz" 
        @click="$router.push(`/lesson/${lesson.id}/quiz`)"
      >
        <Icon name="quiz" size="16px" /> Quiz
      </button>
    </div>

  </div>
</template>
<script setup>
import { lessons } from '../data/lessons.js'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import Icon from '../components/Icon.vue'

const route = useRoute()
const lessonId = Number(route.params.id)

const lesson = lessons.find(l => l.id === lessonId)

const activeChapter = ref(null)

const toggleChapter = (id) => {
  activeChapter.value = activeChapter.value === id ? null : id
}

// Fonction pour parser le contenu Markdown
const formatContent = (content) => {
  let html = content
    // Objectif
    .replace(/\*\*Objectif :/g, '<div class="objective"><strong>Objectif :</strong>')
    .replace(/\.\n\n/g, '.</div>\n\n')
    
    // Titres numérotés
    .replace(/\*\*(\d+)\. ([^*]+)\*\*/g, '<div class="section-title"><span class="number">$1</span> $2</div>')
    
    // Listes avec tirets
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, (match) => '<ul class="content-list">' + match + '</ul>')
    
    // Code inline
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    
    // Gras
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    
    // Italic
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    
    // Astuce
    .replace(/^Astuce: (.+)$/gm, '<div class="astuce"><strong>💡 Astuce:</strong> $1</div>')
    .replace(/^Exercice: (.+)$/gm, '<div class="exercice"><strong>🎯 Exercice:</strong> $1</div>')
    
    // Paragraphes
    .replace(/\n\n/g, '</p><p>')
    
  return '<p>' + html + '</p>'
}
</script>

<style scoped>
/* Page Layout */
.lesson-page {
  min-height: 100vh;
  padding: 100px 20px 40px;
  background: linear-gradient(135deg, #c9d6ff, #e2e2e2);
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Header */
.lesson-header {
  width: 100%;
  max-width: 800px;
  margin-bottom: 50px;
  text-align: center;
}

.lesson-header h1 {
  font-size: 2.5em;
  color: #512da8;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

/* Lessons Container */
.lessons-container {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Chapter */
.chapter {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.chapter:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

/* Chapter Title */
.chapter-title {
  background: linear-gradient(90deg, #512da8, #5c6bc0);
  color: white;
  padding: 20px 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.chapter-title:hover {
  padding-left: 30px;
  background: linear-gradient(90deg, #5c3dbf, #6a76d3);
}

/* Chapter Content */
.chapter-content {
  padding: 30px;
  animation: slideDown 0.3s ease;
}

.content-formatted {
  line-height: 1.8;
  color: #333;
}

.content-formatted p {
  margin: 15px 0;
  font-size: 0.95em;
}

/* Objectif */
.objective {
  background: linear-gradient(135deg, rgba(81, 45, 168, 0.08), rgba(92, 107, 192, 0.08));
  border-left: 5px solid #512da8;
  padding: 15px 20px;
  border-radius: 8px;
  margin: 15px 0;
  font-weight: 500;
}

/* Section Titles */
.section-title {
  background: linear-gradient(90deg, #512da8, #5c6bc0);
  color: white;
  padding: 12px 18px;
  border-radius: 8px;
  margin: 20px 0 12px 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-title .number {
  background: rgba(255, 255, 255, 0.3);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9em;
}

/* Content List */
.content-list {
  list-style: none;
  padding: 0 0 15px 0;
  margin: 10px 0;
}

.content-list li {
  padding: 8px 10px 8px 28px;
  position: relative;
  color: #555;
  font-size: 0.95em;
  line-height: 1.6;
}

.content-list li:before {
  content: "▸";
  position: absolute;
  left: 8px;
  color: #5c6bc0;
  font-weight: bold;
  font-size: 1.2em;
}

/* Code */
.inline-code {
  background: #f4f4f4;
  color: #d63384;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  font-weight: 600;
}

/* Astuce */
.astuce {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 152, 0, 0.1));
  border-left: 5px solid #ffc107;
  padding: 15px 18px;
  border-radius: 8px;
  margin: 15px 0;
  font-size: 0.95em;
  color: #e65100;
}

.astuce strong {
  color: #f57f17;
}

/* Exercice */
.exercice {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(102, 187, 106, 0.1));
  border-left: 5px solid #4caf50;
  padding: 15px 18px;
  border-radius: 8px;
  margin: 15px 0;
  font-size: 0.95em;
  color: #2e7d32;
}

.exercice strong {
  color: #1b5e20;
}

/* Buttons */
.buttons {
  width: 100%;
  max-width: 900px;
  margin-top: 50px;
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-back,
.btn-quiz {
  padding: 12px 28px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95em;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-back {
  background: white;
  color: #512da8;
  border: 2px solid #512da8;
}

.btn-back:hover {
  background: #512da8;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(81, 45, 168, 0.3);
}

.btn-quiz {
  background: linear-gradient(90deg, #512da8, #5c6bc0);
  color: white;
}

.btn-quiz:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(81, 45, 168, 0.4);
}

/* Animations */
@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 1200px;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .lesson-page {
    padding: 100px 15px 20px;
  }

  .lesson-header h1 {
    font-size: 1.8em;
  }

  .chapter-content {
    padding: 20px;
  }

  .content-formatted p {
    font-size: 0.9em;
  }

  .buttons {
    flex-direction: column;
  }

  .btn-back,
  .btn-quiz {
    width: 100%;
    justify-content: center;
  }
}
</style>