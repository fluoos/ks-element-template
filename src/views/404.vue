<template>
  <div class="page-not-found">
    <div class="not-found">
      <img src="@/assets/images/404.jpg" />
      <el-col class="align-center">
        <p>抱歉，您访问的页面不存在</p>
        <el-button type="primary" @click="goBack">返回首页</el-button>
      </el-col>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class NotFound extends Vue {
  goBack () {
    this.$router.replace('/index')
  }
}
</script>
<style lang="scss">
.text-center {
  text-align: center;
}
.page-not-found {
  height: 100%;
  background: #fff;
  position: relative;
  text-align: center;
}
.page-not-found img {
  width: 480px;
}
.not-found p {
  color: #304362;
}
.not-found {
  position: relative;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
</style>
