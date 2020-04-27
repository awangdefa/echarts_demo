<template>
  <el-container class="frame" v-cloak>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col :span="24">
            <el-menu background-color="#545c64" active-text-color="#fff" text-color="#ddd">
              <el-menu-item>
                <span slot="title">
                  <router-link to="/echarts/bar">柱状图</router-link>
                </span>
              </el-menu-item>
              <el-menu-item>
                <span slot="title">
                  <router-link to="/echarts/line">折线图</router-link>
                </span>
              </el-menu-item>
              <el-menu-item>
                <span slot="title">
                  <router-link to="/echarts/guage">仪表盘</router-link>
                </span>
              </el-menu-item>
              <el-menu-item>
                <span slot="title">
                  <router-link to="/echarts/radar">雷达图</router-link>
                </span>
              </el-menu-item>
              <el-menu-item>
                <span slot="title">
                  <router-link to="/echarts/pie">饼图</router-link>
                </span>
              </el-menu-item>
              <el-menu-item>
                <span slot="title">
                  <router-link to="/echarts/scatter">散点图</router-link>
                </span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
[v-cloak] {
  display: none;
}

.frame {
  height: 100vh;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-row {
  background-color: red;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>