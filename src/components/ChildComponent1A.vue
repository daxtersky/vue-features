<template>
  <div class="wrapper">
    <p>{{ regionName }}</p>
    <p>Tax level {{ regionTaxes }}%</p>
    <button @click="$emit('weWantTaxesLower')">Lower taxes</button>
    <p>population {{ population }}</p>
  </div>
</template>

<script>
export default {
  props: {
    regionName: String,
    regionTaxes: Number,
    population: Number
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  text-align: center;
  color: $white-smoke;
  background-color: $medium-sea-green;
}
</style>
