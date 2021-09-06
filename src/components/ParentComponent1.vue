<template>
  <div class="parent">
    <p>{{ country }}</p>
    <div class="children">
      <child-component-1a class="child-component" region-name="Kashubia" :regionInfo="regionInfo[0]" />
      <ChildComponent1B class="child-component" region-name="Silesia"  :regionInfo="regionInfo[1]" />
    </div>
  </div>
</template>

<script>
import ChildComponent1A from '@/components/ChildComponent1A.vue'
import ChildComponent1B from '@/components/ChildComponent1B.vue'

export default {
  components: {
    'child-component-1a': ChildComponent1A, // shorthand possible
    ChildComponent1B
  },
  props: { country: String },
  data () {
    return {
      regionInfo: [
        { population: '72 000', taxes: '19' },
        { population: '102 000', taxes: '19' }
      ]
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
  height: 260px;
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
  padding-left: 8px;
  width: 170px;
}

</style>
