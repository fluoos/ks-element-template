<template>
  <div class="home">
    <HeaderBar title="首页"></HeaderBar>
    <div>
      <router-link to="/my">click to my</router-link>
    </div>
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to ks-cli的PC模板"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderBar from '@/components/common/HeaderBar.vue'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HeaderBar,
    HelloWorld
  }
})
export default class HomeFirst extends Vue {}
</script>
