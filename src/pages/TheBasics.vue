<template>
    <h1>Basics</h1>
    <h2>Rendering</h2>
    <p>Vue is rendering </p>
    <p>This is {{ renderedString }} in double { { braces } }</p>
    <code>code is here</code>
    <h3>Directives</h3>
    <ul>
        <li><code><v-bind>v:bind</v-bind></code></li>
    <!-- <li><code><v-bind>v:bind</v-bind></code></li> -->
    </ul>
</template>

<script>
export default {
  data: function () {
    return {
      renderedString: 'rendered Hello World!'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
