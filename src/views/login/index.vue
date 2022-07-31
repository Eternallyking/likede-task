<template>
  <div class="login-container">
    <div class="app">
      <div class="from">
        <div>
          <img
            class="from-login"
            src="http://likede2-admin.itheima.net/img/logo.595745bd.png"
            alt=""
          />
        </div>
        <div class="from-content">
          <el-input v-model="Account" placeholder="请输入账号">
            <template #prefix>
              <i class="el-icon el-icon-mobile"></i>
            </template>
          </el-input>
          <el-input
            type="password"
            v-model="password"
            placeholder="请输入密码"
          >
          <template #prefix>
              <i class="el-icon el-icon-lock"></i>
            </template>
            <template #suffix>
              <i class="el-icon el-icon-lock"></i>
            </template>
            </el-input>
          <el-input
            v-model="Verification"
            placeholder="请输入验证码"
          >
          <template #prefix>
              <i class="el-icon el-icon-document-checked"></i>
            </template>
            <template #suffix>
              <img src="../../img/login.png" alt="">
            </template></el-input>
          <el-button type="primary">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      Account: "admin",
      password: "admin",
      Verification: "",
    };
  },
  watch: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.login-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url(../../img/login.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.from {
  position: absolute;
  width: 518px;
  height: 388px;
  top: 50%;
  left: 50%;
  margin-top: -194px;
  margin-left: -259px;
  padding: 76px 35px 0;
  background: #fff;
  -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
  box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
  border-radius: 10px;
}
.from-login {
  position: absolute;
  width: 96px;
  height: 96px;
  top: -46px;
  left: 50%;
  margin-left: -48px;
}
.el-input {
  margin-bottom: 24px;
}
.el-button {
  width: 100%;
  height: 52px;
  background: linear-gradient(262deg, #2e50e1, #6878f0);
  opacity: 0.91;
  border-radius: 8px;
  color: #fff;
  text-shadow: 0 7px 22px #cfcfcf;
}
.el-input__suffix-inner img{
  // width: 75px;
  height: 38px;
}
.el-icon::before{
  padding: 3px 2px 3px 7px;
}
</style>
