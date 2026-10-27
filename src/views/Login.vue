<template>
  <div :class="['container', { active: isActive }]">

    <!-- INSCRIPTION -->
    <div class="form-container sign-up">
      <form>
        <h1>Créer un compte</h1>

        <div class="social-icons">
          <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>

        <span>Ou utilisez votre email pour vous inscrire</span>

        <input type="text" placeholder="Nom">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Mot de passe">

        <a href="#">Mot de passe oublié ?</a>

        <button type="button"  @click="goToDashboard">S'inscrire</button>
      </form>
    </div>

    <!-- CONNEXION -->
    <div class="form-container sign-in">
      <form>
        <h1>Connexion</h1>

        <div class="social-icons">
          <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>

        <span>Ou utilisez votre email et mot de passe</span>

        <input type="email" placeholder="Email">
        <input type="password" placeholder="Mot de passe">

        <a href="#">Mot de passe oublié ?</a>

        <button type="button"  @click="goToDashboard">Se connecter</button>
      </form>
    </div>

    <!-- PANNEAU BLEU -->
    <div class="toggle-container">
      <div class="toggle">

        <!-- GAUCHE -->
        <div class="toggle-panel toggle-left">
          <h1>TWIGE</h1>
          <p>
            Nous sommes heureux de vous revoir !<br>
            Connectez-vous pour continuer <br>votre apprentissage
            et développer<br> vos compétences en programmation.
          </p>
          <button class="hidden" @click="isActive = false">
            Se connecter
          </button>
        </div>

        <!-- DROITE -->
        <div class="toggle-panel toggle-right">
          <h1>TWIGE</h1>
          <p>
            Bienvenue sur TWIGE, la plateforme <br>dédiée à l'éducation
            et au développement <br>des compétences numériques <br>
              des jeunes burundais. <br>
            Rejoignez-nous et construisons l'avenir ensemble.
          </p>
          <button class="hidden" @click="isActive = true">
            S'inscrire
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isActive = ref(false)
const router = useRouter()

const goToDashboard = () => {
  router.push('/Dashboard')
}
</script>

<style scoped>
body{
  background: linear-gradient(135deg, #c9d6ff, #e2e2e2);
  display:flex;
  align-items:center;
  justify-content:center;
  height:100vh;
  font-family: 'Montserrat', sans-serif;
}

.container{
  padding: 0;
  margin: 70px;
  margin-left: 300px;
  background-color:#fff;
  border-radius:30px;
  box-shadow:0 5px 15px rgba(0,0,0,0.35);
  position:relative;
  overflow:hidden;
  width:768px;
  max-width:100%;
  min-height:480px;
}


.container a{
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;

}


.form-container{
  position:absolute;
  top:0;
  height:100%;
  transition: all 0.6s ease-in-out;
}

.sign-in{
  left:0;
  width:50%;
  z-index:2;
}

.container.active .sign-in{
  transform: translateX(100%);
}

.sign-up{
  left:0;
  width:50%;
  opacity:0;
  z-index:1;
}

.container.active .sign-up{
  transform: translateX(100%);
  opacity:1;
  z-index:5;
}

.container form{
  background:#fff;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:0 40px;
  height:100%;
}

.container input{
  background:#eee;
  border:none;
  margin:8px 0;
  padding:10px 15px;
  border-radius:8px;
  width:100%;
}

.container button{
  background:#512da8;
  color:#fff;
  padding:10px 45px;
  border:none;
  border-radius:8px;
  margin-top:10px;
  cursor:pointer;
}

.container button.hidden{
  background:transparent;
  border:1px solid #fff;
  color:#fff;
}

.toggle-container{
  position:absolute;
  top:0;
  left:50%;
  width:50%;
  height:100%;
  overflow:hidden;
  transition: all 0.6s ease-in-out;
  border-radius:150px 0 0 100px;
}

.container.active .toggle-container{
  transform: translateX(-100%);
  border-radius:0 150px 100px 0;
}

.toggle{
  background: linear-gradient(to right, #5c6bc0, #512da8);
  color:#fff;
  position:relative;
  left:-100%;
  width:200%;
  height:100%;
  transition: all 0.6s ease-in-out;
}

.container.active .toggle{
  transform: translateX(50%);
}

.toggle-panel{
  position:absolute;
  width:50%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:0 30px;
  text-align:center;
}

.toggle-panel h1{
  font-size:32px;
  font-weight:800;
  letter-spacing:2px;
}

.toggle-left{
  transform: translateX(-200%);
}

.container.active .toggle-left{
  transform: translateX(0);
}

.toggle-right{
  right:0;
}
</style>