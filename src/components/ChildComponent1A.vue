<template>
  <div class="wrapper">
    <p class="center">{{ regionName }}</p>
    <div class="one-line">
      <button class="button" @click="lowerTaxes">Lower taxes</button>
      <p>Tax level {{ regionTaxes }}%</p>
    </div>
    <div class="one-line">
      <button class="button" @click="$emit('weWantMoreBenefits')">Raise benefits</button>
      <div class="one-row">
        <p>child benefit {{ childBenefitPln }}</p>
        <p>population {{ familySituation.population }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    regionName: String,
    regionTaxes: Number,
    familySituation: Object
  },
  methods: {
    lowerTaxes (val) {
      this.$emit('weWantTaxesLower', val)
    }
  },
  computed: {
    childBenefitPln: function () {
      return `${this.familySituation.childBenefit} PLN`
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  color: $white-smoke;
  background-color: $medium-sea-green;
}
</style>
