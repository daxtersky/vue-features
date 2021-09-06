<template>
  <div class="wrapper">
    <p>{{ regionName }}</p>
    <p>population {{ regionInfo.population }}</p>
    <p>taxes {{ regionInfo.taxes }}%</p>
  </div>
</template>

<script>
export default {
  props: {
    regionName: String,
    regionInfo: Object
  }
  // created: function () {
  //   console.log('region-info?', this.regionInfo)
  // }
}
</script>

<style lang="scss" scoped>
.wrapper {
  color: $white-smoke;
  background-color: $medium-sea-green;
}
</style>
