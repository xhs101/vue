<template>
    <div id="app">
        <el-form>
            <div>
                <h3 style="margin-top:200px">云相册</h3>
            </div>
            <el-form-item>
                <el-input
                prefix-icon="el-icon-user"
                v-model="userName"
                placeholder="请输入用户名"
                name="username"
                type="text"
                validate-event
                auto-complete="on"
                style="width:20%"
                maxlength="20">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input
                prefix-icon="el-icon-unlock"
                v-model="password"
                placeholder="请输入密码"
                name="password"
                style="width:20%"
                maxlength="20"
                show-password>
                </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width:20%" @click="submit" round>登录</el-button>
            </el-form-item>
            <el-form-item>
              <el-col>
                <span style="margin-right: 120px;"><router-link to="www.baidu.com">忘记密码?</router-link></span>
                <span><router-link to="/regist">点击注册账号</router-link></span>
              </el-col>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: ''

    }
  },
  methods: {
    submit () {
      if (this.userName === null || this.userName === '') {
        this.$message.error('用户名不能为空，请输入用户名')
        return
      }
      if (this.password === null || this.password === '') {
        this.$message.error('密码不能为空，请输入密码')
      }
    }
    // regist () {
    //   this.$router.push({ path: '/regist' })
    // }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
