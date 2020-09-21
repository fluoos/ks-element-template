<template>
  <div :class="['title-bar-warp', bottemLine? 'small-line-bottom':'']" :style="`background:${bgColor}`">
    <div class="title" :style="{'color':`${textColor}`}">ks-cli的element模板</div>
    <div class="item-right">
      <el-popover
        placement="bottom"
        trigger="click">
        <div>
          下拉框
        </div>
        <div class="user-warp" slot="reference">
          <p class="user-label">老师</p><i class="el-icon-caret-bottom"></i>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HeaderBar extends Vue {
  @Prop() private title!: string
  @Prop() private bottemLine!: boolean
  @Prop() private bgColor?: string
  @Prop() private textColor?: string
}
</script>

<style scoped lang="scss">
.title-bar-warp{
  width: 100%;
  height:$bar-title-height;
  line-height:$bar-title-height;
  background: #fff;
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;
  .title{
    text-align: left;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    letter-spacing: 1px;
    color: #1F2329;
    font-weight: 500;
  }

  .item-right{
    position: absolute;
    height:$bar-title-height;
    right: 0;
    top: 0;
    padding-right: 32px;
    display: flex;
    align-items: center;
    z-index: 100;

    .user-warp{
      display: flex;
      align-items: center;
      cursor: pointer;
      i{
        color: #69758A;
        font-size: 14px;
      }
    }

    .user-label{
      margin: 0 8px 0 28px;
      width: 37px;
      height: 37px;
      line-height: 37px;
      text-align: center;
      border: 1px solid #4A7EE5;
      background: linear-gradient(90deg, #5E93FF 0%, #5D92FF 100%);
      border-radius: 50%;
      font-size: 13px;
      font-weight: 500;
      color: #FFFFFF;
    }
  }
}
</style>
