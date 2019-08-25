<template>
  <div>
    <el-form>
      <div>
        <h2>欢迎注册账号</h2>
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
        <el-input
        prefix-icon="el-icon-unlock"
        v-model="password"
        placeholder="请输入密码"
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
        prefix-icon="el-icon-mobile"
        v-model="phone"
        placeholder="请输入联系电话"
        name="phone"
        v-enter-number
        auto-complete="on"
        style="width:20%"
        maxlength="11">
      </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
        prefix-icon="el-icon-message"
        v-model="email"
        placeholder="请输入邮箱"
        name="email"
        auto-complete="on"
        style="width:20%"
        maxlength="32">
      </el-input>
      </el-form-item>
      <el-form-item>
        <el-date-picker
        v-model="birthday"
        type="date"
        name="birthday"
        style="width:20%"
        placeholder="选择生日">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-input
        prefix-icon="el-icon-location-information"
        v-model="address"
        placeholder="请输入联系地址"
        name="address"
        type="text"
        auto-complete="on"
        style="width:20%"
        maxlength="100">
      </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:8%" @click="regist" round>注册</el-button>
        <router-link to="/">
          <el-button type="primary" style="width:8%;margin-left: 50px;" @click="rest" round>返回登录</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'regist',
  data () {
    return {
      account: '',
      name: '',
      password: '',
      showpassword: '',
      phone: '',
      email: '',
      birthday: '',
      address: '',
      par: ''
    }
  },
  methods: {
    // 登录
    rest () {},
    // 注册
    regist () {
      if (this.account === null || this.account === '') {
        this.$message.error('账号不能为空，请输入账号')
        return
      }
      if (this.name === null || this.name === '') {
        this.$message.error('用户名不能为空，请输入用户名')
        return
      }
      if (this.password === null || this.password === '') {
        this.$message.error('密码不能为空，请输入密码')
        return
      }
      if (this.password !== this.showpassword) {
        this.$message.error('二次输入的密码不一致，请重新输入')
        return
      }
      if (this.phone === null || this.phone === '') {
        this.$message.error('联系电话不能为空，请输入联系电话')
        return
      }
      if (this.phone !== '') {
        var reg = /^1[3456789]\d{9}$/
        if (!reg.test(this.phone)) {
          this.$message.error('请输入有效的手机号码')
          return
        }
      }
      if (this.email === null || this.email === '') {
        this.$message.error('邮箱不能为空，请输入邮箱')
        return
      }
      if (this.email !== '') {
        var em = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (!em.test(this.email)) {
          this.$message.error('请输入有效的邮箱')
        }
      }
      if (this.birthday === null || this.birthday === '') {
        this.$message.error('生日不能为空，请选择生日')
        return
      }
      if (this.address === null || this.address === '') {
        this.$message.error('联系地址不能为空，请输入联系地址')
        return
      }
      var url = '/api/user/regist'
      let data = {
        account: this.account,
        name: this.name,
        password: this.password,
        phone: this.phone,
        email: this.email,
        birthday: this.birthday,
        addres: this.address
      }
      this.$http.post(url, data).then(res => {
        if (res != null) {
          if (res.body.returnCode === 200) {
            this.$message.success(res.body.returnDesc)
            this.$router.push({ path: '/' })
          } else {
            this.$message.error(res.body.returnResult)
          }
        } else {
          this.$message.error(res.error)
        }
      })
    }
  }
}
</script>
