<template>
  <div>
    <h1>Todo App - Todos</h1>
    <router-link to="/">Home</router-link>
    <hr>
    <TodoList />
  </div>
</template>

<script>
  import TodoList from '@/components/TodoList'

  export default {
    components: {
      TodoList
    }
  }
</script>
