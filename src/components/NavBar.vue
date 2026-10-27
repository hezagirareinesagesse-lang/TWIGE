<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="logo">TWIGE</router-link>

      <!-- Menu hamburger (mobile) -->
      <div class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Menu de navigation -->
      <ul class="nav-menu" :class="{ active: isMenuOpen }">
        <li>
          <router-link to="/" class="nav-link" @click="closeMenu">Accueil</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link" @click="closeMenu">About</router-link>
        </li>
        <li>
          <router-link to="/dashboard" class="nav-link" @click="closeMenu">Lessons</router-link>
        </li>
        <li>
          <a href="#quiz" class="nav-link" @click="closeMenu">Quiz</a>
        </li>

        <!-- Boutons d'authentification -->
        <li v-if="!isAuthenticated" class="auth-section">
          <router-link to="/login" class="nav-link auth-btn connexion" @click="closeMenu">
            Connexion
          </router-link>
        </li>
        <li v-else class="auth-section">
          <button class="nav-link auth-btn deconnexion" @click="logout">
            Déconnexion
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)
const isAuthenticated = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const logout = () => {
  isAuthenticated.value = false
  closeMenu()
  router.push('/')
}

// Émettre un événement pour indiquer l'authentification
const setAuthenticated = (auth) => {
  isAuthenticated.value = auth
}

// Exposer la méthode pour être appelée depuis d'autres composants
defineExpose({ setAuthenticated })
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  background: linear-gradient(135deg, #512da8, #5c6bc0);
  padding: 0.8rem 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Poppins', sans-serif;
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  color: white;
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.logo:hover {
  transform: scale(1.05);
  text-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}

/* Menu de navigation */
.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  border: none;
  background: transparent;
  font-family: inherit;
}

/* Effet dégradé au hover */
.nav-link:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.15);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 70%;
}

/* Boutons d'authentification */
.auth-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.4);
  padding: 0.6rem 1.2rem;
}

.auth-btn:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
  border-color: white;
  box-shadow: 0 6px 15px rgba(81, 45, 168, 0.3);
}

.connexion {
  color: white;
}

.deconnexion {
  background: linear-gradient(135deg, rgba(255, 100, 100, 0.3), rgba(255, 50, 50, 0.2));
  border-color: rgba(255, 100, 100, 0.5);
  color: #ffcccc;
}

.deconnexion:hover {
  background: linear-gradient(135deg, rgba(255, 100, 100, 0.5), rgba(255, 50, 50, 0.3));
  border-color: #ffcccc;
}

/* Hamburger Menu (Mobile) */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  z-index: 10;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(10px, 10px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }

  .logo {
    font-size: 1.5rem;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: linear-gradient(135deg, #512da8, #5c6bc0);
    width: 100%;
    text-align: center;
    transition: left 0.3s ease;
    gap: 0;
    padding: 2rem 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-link {
    display: block;
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  .hamburger {
    display: flex;
  }

  .auth-section {
    width: 100%;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  .auth-btn {
    width: 80%;
    padding: 0.8rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 1rem;
  }

  .logo {
    font-size: 1.3rem;
    letter-spacing: 1px;
  }

  .nav-menu {
    top: 65px;
  }

  .nav-link {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}

/* Lien actif */
.router-link-active {
  background: rgba(255, 255, 255, 0.15);
}
</style>
