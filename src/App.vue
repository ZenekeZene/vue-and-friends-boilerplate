<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <h1>Vue and friends Boilerplate</h1>
	<p>We have:</p>
	<ol>
		<li>Vue</li>
		<li>Webpack</li>
		<li>Babel</li>
	</ol>

	<ol>
		<li>ESLint</li>
		<li>Stylelint</li>
		<li>Prettier</li>
		<li>Editorconfig</li>
	</ol>
	<ol>
		<li>PostCSS</li>
		<li>SASS</li>
		<li>Autoprefixer</li>
	</ol>

	<ol>
		<li>Pug</li>
		<li>Jest</li>
		<li>Husky</li>
	</ol>

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
