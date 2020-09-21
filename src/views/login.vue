<template>
  <div class="login-page">
    <div class="logo-wrap">
      <img src="@/assets/images/main_logo.png">
    </div>
    <div class="content-warp">
      <el-col class="login-content">
        <el-col :span="11" class="login-left"></el-col>
        <el-col :span="13" class="login-main">
          <el-tabs v-model="activeName" @tab-click="handleTabClick" stretch>
            <el-tab-pane label="我是老师" name="teacher"></el-tab-pane>
            <el-tab-pane label="我是学生" name="student"></el-tab-pane>
          </el-tabs>
          <el-form :model="userForm" ref="userForm" :rules="rules" class="form-warp">
            <p class="form-title">账 号 / 手机号</p>
            <el-form-item prop="phoneNum">
              <el-input v-model="userForm.phoneNum" @keyup.native.13="onSubmit" placeholder="请输入正确的账号 / 手机号"></el-input>
            </el-form-item>
            <p class="form-title">密 码</p>
            <el-form-item prop="password">
              <el-input
                v-model="userForm.password"
                @keyup.native.13="onSubmit"
                :type="isLook? 'text':'password'"
                placeholder="6-18位，包含大小写字母、数字、特殊符号"
              >
              <i slot="suffix"
                :class="['el-input__icon','icon-eye',isLook? 'icon-eye-open':'']"
                @click="isLook = !isLook"></i>
              </el-input>
            </el-form-item>
            <div class="pwd-option-warp">
              <el-checkbox v-model="savePwd">记住密码</el-checkbox>
              <div class="forget-pwd"><span>忘记密码</span></div>
            </div>
            <el-form-item class="login-btn">
              <div class="submit-btn" @click="onSubmit">登 录</div>
              <el-col class="feek-back">意见反馈</el-col>
            </el-form-item>
          </el-form>
        </el-col>
      </el-col>
    </div>

    <el-col class="copy-right">Copyright ©2020 深圳市方直科技股份有限公司 版权所有</el-col>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  activeName = 'teacher'
  savePwd = false
  isLook = false

  userForm = {
    phoneNum: '',
    accountType: null,
    password: null,
    code: ''
  }

  rules = {
    phoneNum: [{ required: true, trigger: 'blur' }],
    password: [{ required: true, message: '密码不能为空' }]
  }

  handleTabClick () {
    console.log(this.activeName)
  }

  showPassword (item) {
    this[item] = this[item] === 'text' ? 'password' : 'text'
  }

  onSubmit () {
    // 登录提交
    sessionStorage.setItem('token', 'accessToken')
    sessionStorage.setItem('userInfo', JSON.stringify(this.userForm))
    this.$router.push('/').catch((e) => {
      console.log(e)
    })
  }
}
</script>
<style lang="scss" scoped>
.login-page {
  height: 100%;
  display: flex;
  flex-flow: column;
  background: url("../assets/images/login_bg.png") no-repeat center center;
  background-size: 100% 100%;
}

.logo-wrap{
  height: 65px;
  display: flex;
  align-items: center;
  img {
    margin-left: 20px;
    height: 38px;
    width: auto;
  }
}

.content-warp{
  flex: 1;
  position: relative;
}

.login-content {
  position: absolute;
  height: 560px;
  width: 1004px;
  background: #fff;
  top: 48%;
  left: 50%;
  transform: translate(-50%,-50%);
  box-shadow: 0px 6px 40px rgba(100, 100, 100, 0.16);
}

.login-left {
  height: 100%;
  background: url("../assets/images/login_left_bg.png") no-repeat center center;
  background-size: auto 100%;
}

.login-main {
  padding: 50px 110px;
}

.form-warp{
  padding-top: 22px;
  font-size: 14px;
  .form-title{
    padding: 6px 0 9px;
  }

  ::v-deep .el-input__suffix{
    height: 40px;
    width: 40px;
    .el-input__suffix-inner{
      height: 100%;
      width: 100%;
      display: block;
    }
  }
  .icon-eye{
    display: block;
    height: 40px;
    width: 40px;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: center center;
    background-image: url('../assets/images/icon_eye_close.png');
    cursor: pointer;
  }
  .icon-eye-open{
    background-image: url('../assets/images/icon_eye_open.png');
  }
}

.pwd-option-warp{
  display: flex;
  align-items: center;
  margin-top: 3px;
  font-size: 14px;
  line-height: 20px;
  .forget-pwd {
    flex: 1;
    text-align: right;
    color: $color-theme;
    cursor: pointer;
  }
}

.login-btn{
  margin-top: 58px;
  .submit-btn {
    text-align: center;
    color: #fff;
    width: 100%;
    font-size: 15px;
    height: 38px;
    line-height: 38px;
    border-radius: 4px;
    background-color: $color-theme;
    cursor: pointer;
  }

  .feek-back{
    margin-top: 60px;
    text-align: center;
    color: #2F56B5;
    font-size: 13px;
    cursor: pointer;
  }
}

.copy-right {
  color: #99a8bf;
  text-align: center;
  font-size: 14px;
  padding: 32px;
}
</style>
