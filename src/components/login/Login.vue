<template>
    <div id="app">
        <el-form>
            <div>
                <h2 style="margin-top:200px">云相册</h2>
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
              <el-input
              refix-icon="el-icon-unlock"
              v-model="seccode"
              style="width:14%"
              maxlength="4"
              placeholder="请输入验证码"
              @keydown.enter.native="submit">
              </el-input>
              <el-button
              style="width:5.7%;height: 38px;"
              id="code"
              @click="createCode">
              {{ checkCode}}
              </el-button>
            </el-form-item>
            <el-form-item>
              <!-- <router-link :to="{name:'regist'}"> -->
              <el-button type="primary" style="width:20%" @click="submit" round>登录</el-button>
              <!-- </router-link> -->
            </el-form-item>
            <el-form-item>
              <el-col>
                <span style="margin-right: 120px;"><router-link to="/edit">忘记密码?</router-link></span>
                <span><router-link to="/regist">点击注册账号</router-link></span>
              </el-col>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
// 在全局定义验证码
var code
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: '',
      seccode: '',
      checkCode: ''
    }
  },
  mounted () {
    this.createCode()
  },
  methods: {
    // 图片验证码
    createCode () {
      code = ''
      // 验证码的长度
      var codeLength = 4
      // 随机数
      var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      // 循环操作
      for (var i = 0; i < codeLength; i++) {
        // 取得随机数的索引(0~35)
        var index = Math.floor(Math.random() * 36)
        // 根据索引取得随机数加到code上
        code += random[index]
      }
      // 把code值赋给验证码
      this.checkCode = code
    },
    submit () {
      if (this.userName === null || this.userName === '') {
        this.$message.error('用户名不能为空，请输入用户名')
        return
      }
      if (this.password === null || this.password === '') {
        this.$message.error('密码不能为空，请输入密码')
        return
      }
      if (this.seccode !== this.checkCode) {
        this.$message.error('验证码错误！')
        this.createCode()
        return false
      }
      var url = '/api/user/login'
      this.$http.get(url, {params: {userName: this.userName, password: this.password}}).then(res => {
        if (res != null) {
          if (res.body.returnCode === 200) {
            this.$message.success(res.body.returnDesc)
            // 设置登录人信息，null当前页面关闭清除
            this.$cookies.set('userName', this.userName, null)
            this.$router.push({ path: '/Index' })
          } else {
            this.$message.error(res.body.returnResult)
          }
        } else {
          this.$message.error(res.error)
        }
      })
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
  color: #2d3a4b;
  /* background:#E6E6FA; */
  margin-top: 60px;
  height: 40%;
}
#code{
    font-size: 15px;
    letter-spacing:2px;
    color: #053d84;
    background: #f2f2f5;
}
</style>
