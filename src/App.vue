<template>
  <nav class="nav">
    <img class="nav__logo" alt="Vue logo" src="@/assets/logo.png">
    <div class="nav__links">
      <router-link class="nav__link link" to="/">Home</router-link>
      <router-link class="nav__link link" to="/basics">Basics</router-link>
      <router-link class="nav__link link" to="/other">Other</router-link>
    </div>
    </nav>
  <section class="content">
    <router-view/>
  </section>
  <footer class="footer">
    <a class="footer__link link" href="https://mikey-studio.xyz/" target="_blank">&copy; 2021 Mikey
         Studio</a>
    <a class="footer__link link" href="https://github.com/daxtersky/vue-features" target="_blank">Project
          repo</a>
  </footer>
</template>

<style src="./main.scss" lang="scss" />
