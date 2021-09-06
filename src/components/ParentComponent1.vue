<template>
  <div class="parent">
    <p>{{ country }}</p>
    <button @click="raiseTaxes">Raise taxes!</button>
    <p>Taxes {{ taxes }}%</p>
    <div class="children">
      <child-component-1a class="child-component" region-name="Kashubia" :region-taxes="taxes" :population="population" v-on:weWantTaxesLower="lowerTaxes" />
    </div>
  </div>
</template>

<script>
import ChildComponent1A from '@/components/ChildComponent1A.vue'

export default {
  components: {
    'child-component-1a': ChildComponent1A // shorthand possible
  },
  props: { country: String },
  data () {
    return {
      taxes: 19,
      population: 550000
    }
  },
  methods: {
    raiseTaxes () {
      this.taxes++
    },
    lowerTaxes () {
      this.taxes--
    }
  }
}
</script>

<style lang="scss" scoped>
.parent {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 550px;
  color: $white-smoke;
  font-weight: 800;
  background-color: $madison;
}

.children {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}
.child-component {
  font-size: 14px;
  padding: 8px;
  width: 170px;
}

</style>
