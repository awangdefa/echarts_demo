<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/bar">柱状图</router-link>
      <br />
      <router-link to="/line">折线图</router-link>
      <br />
      <router-link to="/guage">仪表盘</router-link>
      <br />
      <router-link to="/radar">雷达图</router-link>
      <br />
      <router-link to="/pie">饼图</router-link>
      <br />
      <router-link to="/scatter">散点图</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<style >
body {
  font-family: "微软雅黑";
  margin: 0px auto;
}
</style>
