<template>
  <div id="app">

    <router-link to="/home">
      <div class="lll">首页</div>
    </router-link>
    <router-link to="/about">
      <div class="lll">关于</div>
    </router-link>
    <router-link to="/person">
      <div class="lll">个人</div>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
  text-decoration: none;
}
</style>
