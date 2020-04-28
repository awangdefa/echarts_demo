<template>
  <el-container class="frame" v-cloak>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col :span="24">
            <el-menu background-color="#293c55" active-text-color="#fff" text-color="#ddd">
              <el-menu-item>
                <span slot="title">
                  <router-link to="/echarts/bar"><span class="font">柱状图</span></router-link>
                </span>
              </el-menu-item>
              <el-menu-item>
                <span slot="title">
                  <router-link to="/echarts/line"><span class="font">折线图</span></router-link>
                </span>
              </el-menu-item>
              <el-menu-item>
                <span slot="title">
                  <router-link to="/echarts/guage"><span class="font">仪表盘</span></router-link>
                </span>
              </el-menu-item>
              <el-menu-item>
                <span slot="title">
                  <router-link to="/echarts/radar"><span class="font">雷达图</span></router-link>
                </span>
              </el-menu-item>
              <el-menu-item>
                <span slot="title">
                  <router-link to="/echarts/pie"><span class="font">饼图</span></router-link>
                </span>
              </el-menu-item>
              <el-menu-item>
                <span slot="title">
                  <router-link to="/echarts/scatter"><span class="font">散点图</span></router-link>
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
  background-color: #293c55;
  color: white;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #293c55;
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

.font {
  color: white;
}
</style>