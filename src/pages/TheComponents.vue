<template>
  <h1>Vue Components</h1>
  <p>
    Components in Vue.js are registered within an app thanks to module system, hence we can import/export them within each other.
  </p>
  <p>Each component is a reusable Vue instance and it accepts some options (Options API):</p>
  <ul>
    <li>data - variables used in a component, it has to be a function so each component's instance can maintain independed copy of data object</li>
    <li>props - for communication between components, more about it below</li>
    <li>methods - functions of a component</li>
    <li>computed</li>
    <li>watch</li>
    <li>root options like <code>el</code></li>
    <li>lifecycle hooks - described in <router-link class="link" to="/hooks">next chapter</router-link></li>
  </ul>

  <h3>Communication between components</h3>
  <ol>
    <li>Parent - child</li>
    <li>Siblings</li>
    <li>Grandparent - child</li>
  </ol>
  <p></p>

  <div class="components-wrapper">
    <ParentComponent1 country="Poland"/>
  </div>

</template>

<script>
import ParentComponent1 from '@/components/ParentComponent1' // or ParentComponent1.vue

export default {
  components: {
    ParentComponent1
  },
  props: ['country']
}
</script>

<style lang="scss" scoped>
.components-wrapper {
  margin-block: 30px;
}
</style>
