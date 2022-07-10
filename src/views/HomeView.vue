<script setup>
import NavBar from '@/components/NavBar.vue'
import GithubIcon from '../assets/icons/github.svg'
import FacebookIcon from '../assets/icons/facebook.svg'
import MessengerIcon from '../assets/icons/messenger.svg'
</script>

<template>
  <NavBar/>
  <h1>Hello, I am Daniel Mihalik</h1>
  <hr/>
  <h2>
    I am a student at <span>Imperial</span> doing
    <span>programming</span> and <span>web development</span>
  </h2>
  <div id="contact-me">
    Contact me
  </div>
  <div id="socials">
    <img :src="GithubIcon" alt="" class="icon">
    <img :src="FacebookIcon" alt="" class="icon">
    <img :src="MessengerIcon" alt="" class="icon">
  </div>
</template>

<style scoped>
h1 {
  margin: 6rem auto 0 auto;
  text-align: center;
  font-weight: 200;
  font-size: 3rem;
  line-height: 3rem;
}

hr {
  margin: 2rem auto 2rem auto;
  width: 41rem;
  background: var(--text-color);
  border: 0.15rem solid var(--text-color);
  border-radius: 0.15rem;
}

h2 {
  margin: 1rem auto 3rem auto;
  text-align: center;
  font-weight: 200;
  font-size: 3rem;
  line-height: 3rem;
  width: 40rem;
}

span {
  color: var(--primary-color);
}

#contact-me {
  margin: 3rem auto;
  width: 20rem;
  height: 4rem;
  font-size: 3rem;
  line-height: 4rem;
  text-align: center;
  background: var(--primary-color);
  border-radius: 1rem;
  cursor: pointer;
}

#socials {
  margin: 4rem auto;
  width: 30rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.icon {
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}
</style>
