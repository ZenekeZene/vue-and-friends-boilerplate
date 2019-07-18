<template>
  <main class="app">
    <img src="/static/logo.png" alt="Logo of boilerplate" class="app__logo">
    <router-view/>
	<github-item></github-item>
  </main>
</template>

<script>
import GithubItem from './components/GithubItem';

export default {
	name: 'App',
	components: {
		GithubItem,
	},
};
</script>
