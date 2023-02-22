<template>
  <div class="reward-container">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'


@Component({
  components: {}
})
export default class RewardNotice extends Vue {


  closeHanle() {
    this.$emit('on-close')
  }

  mounted() {}
}
</script>

<style lang="scss" scoped>
</style>
