<template>
  <div class="about">
    <HeaderBar title="我的"></HeaderBar>
    <h1>This is an my page</h1>
    <router-link to="/">click to home</router-link>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderBar from '@/components/common/HeaderBar.vue'

@Component({
  components: {
    HeaderBar
  }
})
export default class HomeMy extends Vue {}
</script>
