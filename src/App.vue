<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 120px;
    text-align: center;
    color: #2c3e50;
}

ol {
	display: inline-flex;
    flex-direction: column;
    padding: 1rem;
}
</style>
