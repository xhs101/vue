<template>
    <el-form style="text-align: center">
        <div>
            <h2>修改密码</h2>
        </div>
        <el-form-item>
            <el-input
            prefix-icon="el-icon-user"
            v-model="account"
            placeholder="请输入账号"
            name="account"
            type="text"
            auto-complete="on"
            style="width:20%"
            maxlength="20">
        </el-input>
      </el-form-item>
      <el-form-item>
          <el-input
          prefix-icon="el-icon-unlock"
          v-model="password"
          placeholder="请输入新密码"
          name="password"
          auto-complete="on"
          style="width:20%"
          show-password
          maxlength="20">
          </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
        prefix-icon="el-icon-unlock"
        v-model="showpassword"
        type="password"
        placeholder="确认密码"
        name="showpassword"
        auto-complete="on"
        style="width:20%"
        maxlength="20">
      </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
        prefix-icon="el-icon-user"
        v-model="name"
        placeholder="请输入用户名"
        name="name"
        type="text"
        auto-complete="on"
        style="width:20%"
        maxlength="20">
      </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:8%" @click="Editpwd" round>修改</el-button>
        <router-link to="/">
          <el-button type="primary" style="width:8%;margin-left: 50px;" @click="rest" round>返回登录</el-button>
        </router-link>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'edituser',
  data () {
    return {
      account: '',
      password: '',
      showpassword: '',
      name: ''
    }
  },
  methods: {
    rest () {},
    Editpwd () {
      if (this.account === null || this.account === '') {
        this.$message.error('账号不能为空，请输入账号！')
        return
      }
      if (this.password === null || this.password === '') {
        this.$message.error('密码不能为空，请输入密码！')
        return
      }
      if (this.showpassword !== this.password) {
        this.$message.error('二次输入的密码不一致，重新输入！')
        return
      }
      if (this.name === null || this.name === '') {
        this.$message.error('用户名不能为空，请输入用户名！')
        return
      }
      var url = '/api/user/updatePwd'
      var data = {
        account: this.account,
        password: this.password,
        name: this.name
      }
      this.$http.post(url, data).then(res => {
        if (res != null) {
          if (res.body.returnCode === 200) {
            this.$message.success(res.body.returnDesc)
            this.$router.push({ path: '/' })
          } if (res.body.returnCode === -1) {
            this.$message.error(res.body.returnResult)
          } if (res.body.returnCode === '0') {
            this.$message(res.body.solution)
          }
        } else {
          this.$message.error(res.error)
        }
      })
    }
  }
}
</script>
