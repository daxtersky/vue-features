<template>
  <h1>Lifecycle hooks</h1>
  <p>Lifecycle hooks are functions that are called in different phases of the component life.</p>
  <ol>
    <li>Before create - is conveived by it' parents ;)</li>
    <li>Created - all injections are accesible now</li>
    <li>Before mount</li>
    <li>Mounted - <code>template</code>'s' and <code>el</code>'s are build within the component</li>
    <li>Before update - when data changes, before re-render</li>
    <li>Updated - when data changes, after re-render</li>
    <li>Before unmount</li>
    <li>Unmounted</li>
  </ol>
  <p>Check your browser's console to see all the components lifecycle hooks.</p>
</template>

<script>
export default {
  beforeCreate: function () {
    console.log('-------')
    console.log('beforeCreate')
  },
  created: function () {
    console.log('Component is created and alive!')
  },
  beforeMount: function () {
    console.log('beforeMount')
  },
  mounted: function () {
    console.log('mounted')
  },
  beforeUpdate: function () {
    console.log('beforeUpdate')
  },
  updated: function () {
    console.log('updated')
  },
  beforeUnmount: function () {
    console.log('beforeUnmount')
  },
  unmounted: function () {
    console.log('Component is unmounted and ended its life :(')
    console.log('------')
  }
  // destroyed
}
</script>

<style lang="scss" scoped>
</style>
