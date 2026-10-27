<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1 class="logo">TWIGE</h1>
        <p class="tagline">Apprendre aujourd'hui. Construire le Burundi de demain.</p>
        <p class="mini">Une plate-forme éducative pour inspirer la jeunesse</p>
        <button class="start-btn" @click="$router.push('/login')">
          Commencer l'aventure
        </button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2>Pourquoi TWIGE ?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon"><Icon name="book" /></div>
            <h3>Contenu Premium</h3>
            <p>Des leçons détaillées et progressives pour tous les niveaux</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon"><Icon name="target" /></div>
            <h3>Apprentissage Ciblé</h3>
            <p>Atteindre vos objectifs grâce à des exercices pratiques</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon"><Icon name="user" /></div>
            <h3>Communauté Active</h3>
            <p>Apprendre ensemble avec d'autres passionnés</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon"><Icon name="award" /></div>
            <h3>Certifications</h3>
            <p>Validez vos compétences avec nos certificats reconnus</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Courses Preview -->
    <section class="courses-preview">
      <div class="container">
        <h2>Nos Cours Disponibles</h2>
        <div class="lessons-container">
          <div
            v-for="lesson in lessons.slice(0, 6)"
            :key="lesson.id"
            class="lesson-card"
            @click="$router.push(`/lesson/${lesson.id}`)"
          >
            <div class="lesson-badge">Leçon {{ lesson.id }}</div>
            <h3>{{ lesson.title }}</h3>
            <p>{{ lesson.chapters.length }} chapitres</p>
            <div class="lesson-footer">
              <span class="chapter-count">{{ lesson.chapters.length }} modules</span>
              <button class="lesson-btn">Commencer</button>
            </div>
          </div>
        </div>
        <div class="see-all">
          <router-link to="/dashboard" class="see-all-btn">Voir tous les cours <Icon name="arrow-right" size="18px" style="margin-left: 8px;" /></router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Prêt à transformer votre avenir ?</h2>
        <p>Rejoignez des milliers d'étudiants qui apprennent déjà sur TWIGE</p>
        <div class="cta-buttons">
          <button class="cta-primary" @click="$router.push('/login')">S'inscrire maintenant</button>
          <router-link to="/about" class="cta-secondary">En savoir plus</router-link>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="stat">
          <h3>10+</h3>
          <p>Cours Disponibles</p>
        </div>
        <div class="stat">
          <h3>50+</h3>
          <p>Chapitres</p>
        </div>
        <div class="stat">
          <h3>100+</h3>
          <p>Questions Quiz</p>
        </div>
        <div class="stat">
          <h3>∞</h3>
          <p>Opportunités</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { lessons } from '../data/lessons.js'
import Icon from '../components/Icon.vue'
</script>

<style scoped>
.home {
  font-family: 'Poppins', sans-serif;
  color: white;
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #512da8, #5c6bc0);
  position: relative;
  overflow: hidden;
  color: white;
}

.overlay {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  top: -150px;
  right: -150px;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(30px);
  }
}

.hero-content {
  text-align: center;
  z-index: 2;
  animation: fadeInDown 1s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo {
  font-size: 75px;
  font-weight: 900;
  letter-spacing: 4px;
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
}

.tagline {
  font-size: 24px;
  margin-bottom: 15px;
  opacity: 0.95;
  font-weight: 500;
}

.mini {
  font-size: 16px;
  margin-bottom: 40px;
  opacity: 0.85;
}

.start-btn {
  padding: 16px 50px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  background: white;
  color: #512da8;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.start-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Features Section */
.features {
  padding: 80px 0;
  background: white;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.features h2 {
  font-size: 2.5em;
  text-align: center;
  color: #512da8;
  margin-bottom: 50px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  padding: 40px 2rem;
  background: linear-gradient(135deg, rgba(81, 45, 168, 0.05), rgba(92, 107, 192, 0.05));
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: #512da8;
  box-shadow: 0 15px 40px rgba(81, 45, 168, 0.1);
}

.feature-icon {
  font-size: 3em;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #512da8;
  margin-bottom: 1rem;
  font-size: 1.3em;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Courses Preview */
.courses-preview {
  padding: 80px 0;
  background: linear-gradient(135deg, #c9d6ff, #e2e2e2);
  color: #333;
}

.courses-preview h2 {
  font-size: 2.5em;
  text-align: center;
  color: #512da8;
  margin-bottom: 50px;
}

.lessons-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
}

.lesson-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.lesson-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.lesson-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #512da8, #5c6bc0);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85em;
  font-weight: 600;
}

.lesson-card h3 {
  color: #512da8;
  margin-bottom: 10px;
  padding-right: 60px;
}

.lesson-card p {
  color: #666;
  margin-bottom: 20px;
}

.lesson-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chapter-count {
  color: #999;
  font-size: 0.9em;
}

.lesson-btn {
  padding: 8px 20px;
  background: linear-gradient(135deg, #512da8, #5c6bc0);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9em;
  transition: all 0.3s ease;
}

.lesson-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.see-all {
  text-align: center;
}

.see-all-btn {
  display: inline-block;
  padding: 15px 40px;
  background: linear-gradient(135deg, #512da8, #5c6bc0);
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.see-all-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(81, 45, 168, 0.3);
}

/* CTA Section */
.cta-section {
  padding: 80px 2rem;
  background: linear-gradient(135deg, #512da8, #5c6bc0);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5em;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2em;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-primary {
  padding: 15px 40px;
  background: white;
  color: #512da8;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.05em;
  transition: all 0.3s ease;
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-secondary {
  padding: 15px 40px;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05em;
  transition: all 0.3s ease;
  display: inline-block;
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

/* Stats Section */
.stats {
  padding: 60px 2rem;
  background: white;
  color: #333;
}

.stats .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
}

.stat h3 {
  font-size: 2.5em;
  color: #512da8;
  margin-bottom: 0.5rem;
}

.stat p {
  color: #666;
  font-size: 1.1em;
}

/* Responsive */
@media (max-width: 768px) {
  .logo {
    font-size: 50px;
  }

  .tagline {
    font-size: 18px;
  }

  .mini {
    font-size: 14px;
  }

  .features h2,
  .courses-preview h2,
  .cta-section h2 {
    font-size: 2em;
  }

  .lessons-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .home {
    min-height: auto;
  }

  .logo {
    font-size: 36px;
  }

  .tagline {
    font-size: 16px;
  }

  .mini {
    font-size: 12px;
  }

  .start-btn {
    padding: 12px 30px;
    font-size: 14px;
  }

  .features h2,
  .courses-preview h2,
  .cta-section h2 {
    font-size: 1.5em;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
  }
}
</style>
