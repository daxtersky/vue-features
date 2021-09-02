<template>
  <h1>Components</h1>
  <div class="components-wrapper">
    <BasicComponent1 />
    <basic-component-2 />
  </div>
</template>

<script>
import BasicComponent1 from '@/components/BasicComponent1.vue'
import BasicComponent2 from '@/components/BasicComponent2.vue'

export default {
  components: {
    BasicComponent1,
    BasicComponent2
  }
}
</script>

<style lang="scss" scoped>
.components-wrapper {
  display: grid;
  gap: 10px;
  grid-auto-flow: column;
}
</style>
