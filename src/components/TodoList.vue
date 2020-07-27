<template>
  <ul>
    <TodoItem
      v-for="(todo, idx) of todos"
      :todo="todo"
      :key="todo.id"
      :index="idx"
      @remove-item="removeTodo"
    />
  </ul>
</template>

<script>
  import TodoItem from '@/components/TodoItem'

  export default {
    data() {
      return {
        todos: [{
            id: 1,
            title: 'Learn Vue.js',
            completed: false
          },
          {
            id: 2,
            title: 'Think of your own project',
            completed: false
          },
          {
            id: 3,
            title: 'Do it',
            completed: false
          }
        ]
      }
    },
    components: {
      TodoItem
    },
    methods: {
      removeTodo (id) {
        this.todos = this.todos.filter(t => t.id !== id)
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    max-width: 600px;
  }
</style>
