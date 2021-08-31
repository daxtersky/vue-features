<template>
    <h1>Declarative rendering</h1>
    <p>Just like in Angular, Vue allows to declaratively render data in the DOM with template syntax. </p>
    <p>This is rendered text {{ renderedString }} placed between double braces: { { <u>variable-here</u> } } thanks to text interpolation.</p>
    <p>Now, we can also change our data with special HTML attributes:</p>
    <p class="term">
      <strong>Directive</strong>
      <span>
       - attributes with prefix <code>v:</code> provided by Vue, apply special behaviour to the rendered DOM.
      </span>
    </p>
    <h3>Conditionals and loops</h3>
    <ul>
        <li><code>v:bind</code> - to dynamically change HTML attributes by Vue</li>
        <li><code>v:if</code> and <code>v:show</code> - to show or hide HTML elements</li>
        <li><code>v:for</code> - to loop through a list of items (in array for example)</li>
    </ul>
    <h3>Events</h3>
    <ul>
      <li><code>v:on</code> - event listener</li>
    </ul>
    <h3>V:model</h3>
    <ul>
      <li><code>v:model</code> - a common feature with Angular: double binding!</li>
      <li><code>v:on</code> and <code>v:input</code> - this is the same as above</li>
    </ul>
    <h3>Other</h3>
    <ul>
      <li><code>v-html</code></li>
      <li><code>v-once</code></li>
      <li>...</li>
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
