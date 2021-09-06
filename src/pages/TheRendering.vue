<template>
    <h1>Declarative rendering</h1>
    <p>Just like in Angular, Vue allows to declaratively render data in the DOM with template syntax. </p>
    <p>This is rendered text {{ renderedString }} placed between double curly braces: { { <u>variable-here</u> } } thanks to text interpolation.</p>
    <p>Now, we can also change our data with special HTML attributes:</p>
    <p class="term">
      <strong>Directive</strong>
      <span>
       - attributes with prefix <code>v:</code> provided by Vue, apply special behaviour to the rendered DOM.
      </span>
    </p>

    <h3>Conditionals</h3>
    <ul>
        <li><code>v:bind</code> - to dynamically change HTML attributes by Vue</li>
        <li><code>v:if</code> and <code>v:show</code> - to show or hide HTML elements</li>
        <li>Never use <code>v:if</code> and <code>v:for</code> together in one HTML tag</li>
    </ul>

    <h3>Loops</h3>
      <ul>
        <li><code>v:for</code> - to loop through a list of items (in array for example)</li>
        <li>Always remember to add <code>v:key</code> directive, because each item should have unique key due to performance reasons.</li>
      </ul>
      <ol>
        <li v-for="item of ['Example', 'of', 'v-for', 'loop', 'iteration']" :key="item">{{ item }}</li>
      </ol>

    <h3>Events</h3>
    <ul>
      <li><code>v:on</code> - event listener</li>
    </ul>
    <button class="button" v-on:click="onClick">Button</button>
    <span v-if="isButtonClicked" class="pl-5">Button is clicked!</span>

    <h3>v:model</h3>
    <ul>
      <li>
        <code>v:model</code> - a common feature with Angular: double binding!
        <input type="text" v-model="vModelInputValue">
        <span>{{ vModelInputValue }}</span>
        </li>
      <li>
        <code>:value</code> and <code>@input</code> (for inputs) are the same as above
        <input type="text" :value="inputValue" @input="onInputValueChange">
        <span>{{ inputValue }}</span>
      </li>
    </ul>

    <h3>Modifiers</h3>
    <p>Vue directives can be used with postfixes, which specialize their behaviour.</p>
    <ul>
      <li><code>v-on:submit.prevent="onSubmit"</code> the same as <code>preventDefault()</code> in plain JavaScript</li>
    </ul>

    <h3>Shorthands</h3>
    <p>A shorter way to use Vue directives.</p>
    <ul>
      <li><code>v:key</code> to <code>:key</code></li>
      <li><code>v-bind:href="url..."</code> to <code>:href="url..."</code></li>
      <li><code>v-on:click="onClick"</code> to <code>@click="onClick</code></li>
    </ul>

    <h3>Other</h3>
    <ul>
      <li><code>v-html</code></li>
      <li><code>v-once</code></li>
    </ul>
</template>

<script>
export default {
  data: function () {
    return {
      renderedString: 'rendered Hello World!',
      isButtonClicked: false,
      inputValue: '',
      vModelInputValue: ''
    }
  },
  methods: {
    onClick () {
      this.isButtonClicked = true
    },
    onInputValueChange (e) {
      this.inputValue = e.target.value
    }
  }
}
</script>

<style lang="scss" scoped>
.pl-5 {
  padding-left: 5px;
}

</style>
