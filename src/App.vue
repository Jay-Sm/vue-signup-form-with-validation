<template>
  <router-view></router-view>
</template>

<script setup>
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100vh;
  margin: 0px;
}

#app {
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 100%, 74%);
  background-image: url("./assets/images/bg-intro-desktop.png");
}
</style>