<template>
  <div class="parent">
    <p>{{ country }}</p>
    <div class="one-line">
      <button class="button" @click="raiseTaxes">Raise taxes!</button>
      <p>Taxes {{ taxes }}%</p>
    </div>
    <div class="one-line">
      <button class="button" @click="lowerBenefits">Lower benefits!</button>
      <p>child benefit {{ familySituation.childBenefit }} PLN, population {{ familySituation.population }}</p>
    </div>
    <div class="children">
      <child-component-1a
        class="child-component"
        region-name="Kashubia"
        :region-taxes="taxes"
        :familySituation="familySituation"
        v-on:weWantTaxesLower="lowerTaxes"
        @weWantMoreBenefits="raiseBenefits"
      />
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
      familySituation: {
        childBenefit: 500,
        population: 550000
      }
    }
  },
  methods: {
    raiseTaxes () {
      this.taxes++
    },
    lowerTaxes () {
      this.taxes--
    },
    raiseBenefits () {
      this.familySituation.childBenefit += 100
      this.familySituation.population += (this.familySituation.childBenefit * 50)
    },
    lowerBenefits () {
      this.familySituation.childBenefit -= 100
      this.familySituation.population -= (this.familySituation.childBenefit * 50)
    }
  }
}
</script>

<style lang="scss" scoped>
.parent {
  display: flex;
  flex-direction: column;
  padding: 4px;
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
  // width: 240px;
}

</style>
