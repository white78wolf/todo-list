<template>
  <div>
    <h1>Todo App - Todos</h1>
    <router-link to="/">Home</router-link>
    <hr>
    <TodoList
      :todos="todos"
      @remove-todo="removeTodo"
    />
  </div>
</template>

<script>
  import TodoList from '@/components/TodoList'

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
      TodoList
    },
    methods: {
      removeTodo (id) {
        this.todos = this.todos.filter(t => t.id !== id)
      }
    }
  }
</script>
