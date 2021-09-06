<template>
  <div class="wrapper">
    <p>{{ regionName }}</p>
    <p>population {{ regionInfo.population }}</p>
    <p>taxes {{ regionInfo.taxes }}%</p>
  </div>
</template>

<script>
export default {
  props: ['regionName', 'regionInfo']
}
</script>

<style lang="scss" scoped>
.wrapper {
  color: $madison;
  background-color: $white-smoke;
}
</style>
