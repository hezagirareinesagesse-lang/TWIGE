<script setup>
import Icon from '../components/Icon.vue'
</script>

<template>
  <div class="about-page">
    <!-- Section héro -->
    <section class="hero">
      <div class="hero-content">
        <h1>À propos de TWIGE</h1>
        <p class="subtitle">Transformez votre avenir à travers l'éducation numérique</p>
      </div>
    </section>

    <!-- Notre mission -->
    <section class="mission">
      <div class="container">
        <div class="mission-content">
          <h2>Notre Mission</h2>
          <p>
            TWIGE est une plateforme éducative dédiée à l'apprentissage de la programmation pour les jeunes 
            burundais et africains. Nous croyons que tout le monde a le droit d'accéder à une éducation de 
            qualité, quelle que soit sa situation socio-économique.
          </p>
        </div>
        <div class="mission-grid">
          <div class="mission-card">
            <div class="icon"><Icon name="target" /></div>
            <h3>Accessibilité</h3>
            <p>Une plateforme accessible à tous, gratuitement ou à faible coût</p>
          </div>
          <div class="mission-card">
            <div class="icon"><Icon name="book" /></div>
            <h3>Qualité</h3>
            <p>Des contenus pédagogiques de haute qualité en français</p>
          </div>
          <div class="mission-card">
            <div class="icon"><Icon name="zap" /></div>
            <h3>Opportunités</h3>
            <p>Créer des opportunités d'emploi dans le domaine tech</p>
          </div>
          <div class="mission-card">
            <div class="icon"><Icon name="trending-up" /></div>
            <h3>Impact</h3>
            <p>Transformer la vie des jeunes à travers la technologie</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos valeurs -->
    <section class="values">
      <div class="container">
        <h2>Nos Valeurs</h2>
        <div class="values-grid">
          <div class="value-item">
            <h3>Excellence</h3>
            <p>Nous nous efforçons de fournir le meilleur contenu éducatif possible</p>
          </div>
          <div class="value-item">
            <h3>Innovation</h3>
            <p>Nous utilisons les dernières technologies pour améliorer l'apprentissage</p>
          </div>
          <div class="value-item">
            <h3>Inclusion</h3>
            <p>Chacun a sa place dans notre communauté d'apprenants</p>
          </div>
          <div class="value-item">
            <h3>Transparence</h3>
            <p>Nous sommes honnêtes sur nos objectifs et notre progression</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistiques -->
    <section class="stats">
      <div class="container">
        <div class="stat-item">
          <h3>10+</h3>
          <p>Leçons complètes</p>
        </div>
        <div class="stat-item">
          <h3>50+</h3>
          <p>Chapitres détaillés</p>
        </div>
        <div class="stat-item">
          <h3>100+</h3>
          <p>Questions de quiz</p>
        </div>
        <div class="stat-item">
          <h3>2024+</h3>
          <p>Étudiants inscrits</p>
        </div>
      </div>
    </section>

    <!-- Équipe -->
    <section class="team">
      <div class="container">
        <h2>Notre Équipe</h2>
        <p class="team-intro">Des passionnés dédiés à l'éducation</p>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-image"><Icon name="user" size="40px" /></div>
            <h3>Jean Niyongabo</h3>
            <p>Fondateur & Directeur</p>
          </div>
          <div class="team-member">
            <div class="member-image"><Icon name="book" size="40px" /></div>
            <h3>Marie Habimana</h3>
            <p>Instructrice Lead</p>
          </div>
          <div class="team-member">
            <div class="member-image"><Icon name="user" size="40px" /></div>
            <h3>Pierre Nkurunziza</h3>
            <p>Responsable Tech</p>
          </div>
          <div class="team-member">
            <div class="member-image"><Icon name="user" size="40px" /></div>
            <h3>Alice Kayiranga</h3>
            <p>Développeuse</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Appel à l'action -->
    <section class="cta">
      <div class="container">
        <h2>Prêt à commencer votre voyage ?</h2>
        <p>Rejoignez des milliers d'apprenants qui transforment leur avenir</p>
        <router-link to="/dashboard" class="cta-btn">Commencer maintenant</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Héro */
.hero {
  background: linear-gradient(135deg, #512da8, #5c6bc0);
  color: white;
  padding: 100px 2rem;
  text-align: center;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content h1 {
  font-size: 3.5em;
  margin-bottom: 1rem;
  font-weight: 900;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero .subtitle {
  font-size: 1.4em;
  opacity: 0.95;
  font-weight: 300;
}

/* Mission */
.mission {
  padding: 80px 0;
  background: white;
}

.mission-content {
  text-align: center;
  margin-bottom: 60px;
}

.mission-content h2 {
  font-size: 2.5em;
  color: #512da8;
  margin-bottom: 2rem;
}

.mission-content p {
  font-size: 1.1em;
  color: #555;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.mission-card {
  background: linear-gradient(135deg, rgba(81, 45, 168, 0.05), rgba(92, 107, 192, 0.05));
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.mission-card:hover {
  border-color: #512da8;
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(81, 45, 168, 0.1);
}

.mission-card .icon {
  font-size: 3em;
  margin-bottom: 1rem;
}

.mission-card h3 {
  color: #512da8;
  margin-bottom: 1rem;
  font-size: 1.3em;
}

.mission-card p {
  color: #666;
  line-height: 1.6;
}

/* Valeurs */
.values {
  padding: 80px 0;
  background: linear-gradient(135deg, #c9d6ff, #e2e2e2);
}

.values h2 {
  font-size: 2.5em;
  color: #512da8;
  text-align: center;
  margin-bottom: 4rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.value-item {
  background: white;
  padding: 40px 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
}

.value-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(81, 45, 168, 0.15);
}

.value-item h3 {
  color: #512da8;
  font-size: 1.5em;
  margin-bottom: 1rem;
}

.value-item p {
  color: #666;
  line-height: 1.7;
}

/* Statistiques */
.stats {
  background: linear-gradient(135deg, #512da8, #5c6bc0);
  color: white;
  padding: 60px 0;
}

.stats .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
}

.stat-item h3 {
  font-size: 2.5em;
  margin-bottom: 0.5rem;
  font-weight: 900;
}

.stat-item p {
  font-size: 1.1em;
  opacity: 0.9;
}

/* Équipe */
.team {
  padding: 80px 0;
  background: white;
}

.team h2 {
  font-size: 2.5em;
  color: #512da8;
  text-align: center;
  margin-bottom: 1rem;
}

.team-intro {
  text-align: center;
  color: #666;
  font-size: 1.1em;
  margin-bottom: 4rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.team-member {
  background: linear-gradient(135deg, rgba(81, 45, 168, 0.05), rgba(92, 107, 192, 0.05));
  padding: 40px 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(81, 45, 168, 0.1);
}

.member-image {
  font-size: 4em;
  margin-bottom: 1rem;
}

.team-member h3 {
  color: #512da8;
  font-size: 1.3em;
  margin-bottom: 0.5rem;
}

.team-member p {
  color: #666;
}

/* CTA */
.cta {
  background: linear-gradient(135deg, #512da8, #5c6bc0);
  color: white;
  padding: 80px 2rem;
  text-align: center;
}

.cta h2 {
  font-size: 2.5em;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.2em;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.cta-btn {
  display: inline-block;
  background: white;
  color: #512da8;
  padding: 15px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1.1em;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5em;
  }

  .hero .subtitle {
    font-size: 1.1em;
  }

  .mission-content h2,
  .values h2,
  .team h2,
  .cta h2 {
    font-size: 2em;
  }

  .hero {
    padding: 60px 1rem;
  }

  .mission,
  .values,
  .team,
  .cta {
    padding: 50px 1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .hero-content h1 {
    font-size: 2em;
  }

  .hero .subtitle {
    font-size: 1em;
  }

  .mission-content h2,
  .values h2,
  .team h2,
  .cta h2 {
    font-size: 1.5em;
  }

  .stat-item h3 {
    font-size: 2em;
  }
}
</style>
