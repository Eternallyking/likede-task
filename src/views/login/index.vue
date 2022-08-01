<template>
  <div class="login-container">
    <div class="login-form">
      <el-form :model="loginFrom" :rules="loginFromRules">
        <!-- 图片 -->
        <img
          class="from-login"
          src="http://likede2-admin.itheima.net/img/logo.595745bd.png"
          alt=""
        />
        <!-- 账号 -->
        <el-form-item prop="loginName">
          <el-input
            v-model="loginFrom.loginName"
            type="text"
            placeholder="请输入账号"
            maxlength="18"
          >
            <template #prefix>
              <svg-icon icon-class="user" />
            </template>
          </el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item class="pass_icon" prop="password">
          <el-input
            v-model="loginFrom.password"
            :type="passwordtext"
            placeholder="请输入密码"
            maxlength="20"
          >
            <template #prefix>
              <svg-icon icon-class="password" />
            </template>
            <!-- 右边icon -->
            <template #suffix>
              <i @click="showVerificationcodefn" v-if="!showVerificationcode"
                ><svg-icon icon-class="eye"
              /></i>
              <i @click="noshowVerificationcode" v-else
                ><svg-icon icon-class="eye-open"
              /></i>
            </template>
            <!-- <template #suffix>
              <svg-icon icon-class="eye-open" />
            </template> -->
          </el-input>
        </el-form-item>

        <!-- 验证码 -->
        <el-form-item prop="code">
          <el-input
            v-model="loginFrom.code"
            placeholder="请输入验证码"
            maxlength="4"
          >
            <template #prefix>
              <i class="el-icon-message" />
            </template>
            <template #suffix>
              <img
                @click="Verificationcode"
                class="code-image"
                :src="img"
                alt=""
              />
            </template>
          </el-input>
        </el-form-item>

        <!-- 提交按钮 -->
        <el-button class="login-btn" type="primary" @click="loginfn"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import { Verificationcode } from '@/api/user'
// import { createNamespacedHelpers } from 'vuex'
// const { mapGetters } = createNamespacedHelpers('user')
export default {
  name: 'Login',
  data() {
    return {
      loginFrom: {
        clientToken: 0,
        code: '',
        loginName: 'admin',
        loginType: 0,
        password: 'admin'
      },
      loginFromRules: {
        loginName: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
            message: '账号不正确',
            trigger: 'blur'
          }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      passwordtext: 'password',
      showVerificationcode: false,
      img: ''
    }
  },

  created() {
    this.Verificationcode()
  },

  methods: {
    showVerificationcodefn() {
      this.showVerificationcode = !this.showVerificationcode
      this.passwordtext = 'text'
    },
    noshowVerificationcode() {
      this.showVerificationcode = !this.showVerificationcode
      this.passwordtext = 'password'
    },
    async Verificationcode() {
      try {
        this.loginFrom.clientToken = Math.floor(Math.random() * 100)
        const res = await Verificationcode(this.loginFrom.clientToken)
        this.img = 'http://likede2-admin.itheima.net/likede' + res.config.url
      } catch (error) {}
    },
    loginfn() {
      this.$store.dispatch('user/getToken', this.loginFrom)
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url(../../img/login.png);
  background-repeat: no-repeat;
  background-size: cover;
  .el-form-item {
    margin-bottom: 15px;
  }
  .el-form > img {
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
  }
  .login-form {
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
    .login-btn {
      width: 100%;
      height: 52px;
      background: linear-gradient(262deg, #2e50e1, #6878f0);
      opacity: 0.91;
      border-radius: 8px;
      color: #fff;
      text-shadow: 0 7px 22px #cfcfcf;
    }
    .el-form-item {
      width: 450px;
      height: 60px;
      .el-input,
      .el-input--prefix,
      ::v-deep .el-input__inner {
        height: 50px;
        right: 0;
        color: #999;
      }
      ::v-deep .el-input__suffix {
        cursor: pointer;
        right: 0;
      }
      ::v-deep .el-input__prefix {
        margin-top: 5px;
        margin-left: 5px;
      }
    }
    ::v-deep .pass_icon {
      cursor: pointer;
      .el-input__suffix {
        margin-top: 8px;
        margin-right: 10px;
      }
    }
  }
}
</style>
