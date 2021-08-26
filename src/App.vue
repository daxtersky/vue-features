<template>
  <div class="nav">
    <img class="nav__logo" alt="Vue logo" src="@/assets/logo.png">
    <div class="nav__links">
      <router-link class="nav__link" to="/">Home</router-link>
      <router-link class="nav__link" to="/basics">Basics</router-link>
    </div>
    </div>
  <div class="content">
    <router-view/>
  </div>
</template>

<style lang="scss">

body {
  margin: 0;padding: 0;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $madison;

  display: grid;
  grid-template-columns: 150px 1fr;

}

.nav {
  .nav__logo {
    height: 100px;
    width: 100px;
  }
  .nav__links {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .nav__link {
      font-weight: bold;
      color: $madison;
        &.router-link-exact-active {
          color: $medium-sea-green;
        }
    }
  }
}

.content {
  text-align: center;
  border: 1px solid $medium-sea-green;
}

</style>
