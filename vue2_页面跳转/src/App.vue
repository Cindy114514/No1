<template>
  <div id="app">
    <div class="sidebar">
      <router-view></router-view>
      <router-link to="/home">
        <div class="lll">首页</div>
      </router-link>
      <router-link to="/about">
        <div class="lll">关于</div>
      </router-link>
      <router-link to="/person">
        <div class="lll">个人</div>
      </router-link>
    </div>
    <router-view to="/home1"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 800px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sidebar {
  height: 790px;
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px 0;
  border-right: 1px solid #e9ecef;
}

.sidebar a {
  display: block;
  text-decoration: none;
}

.lll {
  font-size: 20px;
  line-height: 1.8;
  letter-spacing: 0.5px;
  color: #2c3e50;
  text-align: justify;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-left: 4px solid #3498db;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin: 15px 0;
  transition: all 0.3s ease;
}
</style>
