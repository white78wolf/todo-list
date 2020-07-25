<template>
  <div id="app">
    <button @click="toggle">Home / Todos</button>
    <div v-if="isHome">
      <Home />
    </div>
    <div v-else>
      <Todos />
    </div>
  </div>
</template>

<script>
import Home from '@/components/Home'
import Todos from '@/components/Todos'

export default {
  name: 'App',
  components: {
    Home, Todos
  },
  data () {
    return {
      isHome: true
    }
  },
  methods: {
    toggle () {
      this.isHome = !this.isHome
    }
  }
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
</style>
