<template>
  <nav class="nav">
    <img class="nav__logo" alt="Vue logo" src="@/assets/logo.png">
    <div class="nav__links">
      <router-link class="nav__link link" to="/">Intro</router-link>
      <router-link class="nav__link link" to="/rendering">Rendering</router-link>
      <router-link class="nav__link link" to="/components">Components</router-link>
      <router-link class="nav__link link" to="/hooks">Lifecycle hooks</router-link>
      <router-link class="nav__link link" to="/slots">Slots</router-link>
      <router-link class="nav__link link" to="/vue-router">Vue Router</router-link>

      <router-link class="nav__link link" to="/glossary">Glossary</router-link>
    </div>
    </nav>
  <article class="content">
    <router-view/>
  </article>
  <footer class="footer">
    <a class="footer__link link" href="https://vuejs.org/" target="_blank">Vue.js documentation</a>
    <a class="footer__link link" href="https://mikey-studio.xyz/" target="_blank">&copy; 2021 Mikey
         Studio</a>
    <a class="footer__link link" href="https://github.com/daxtersky/vue-features" target="_blank">Project
          repo</a>
  </footer>
</template>

<style src="./main.scss" lang="scss" />
