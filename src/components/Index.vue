<template>
  <el-container style="height: 800px; border: 1px solid #eee; background-color:#DCDCDC" >
    <el-aside width="230px" style="background-color: #ADD8E6">
      <el-menu :default-openeds="['5', '6']">
        <el-submenu index="1">
          <!-- <template slot="title"><i class="el-icon-menu"></i>首页</template> -->
           <el-menu-item index="1-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-picture-outline"></i>我的相册</template>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 15px;background-color:#87CEFA">
        <el-dropdown>
          <i class="el-icon-s-custom" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <router-link to = "/">
                <el-dropdown-item>查看个人信息</el-dropdown-item>
            </router-link>
            <router-link to = "/">
                <el-dropdown-item>退出登录</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
        <span >欢迎您:{{userName}}</span>
      </el-header>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      // 获取登录人信息
      userName: this.$cookies.get('userName')
    }
  },
  methods: {
    editUser () {
      this.$router.push({ path: '/edit' })
    }
  }
}
</script>
