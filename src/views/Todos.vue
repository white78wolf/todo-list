<template>
  <div>
    <h1>Todo App - Todos</h1>
    <router-link to="/">Home</router-link>
    <hr>
    <AddTodo @add-todo="addTodo" />
    <TodoList
      :todos="todos"
      @remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'

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
    TodoList, AddTodo
  },
  methods: {
    removeTodo (id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo (newTodo) {
      this.todos.push(newTodo)
    }
  }
}
</script>
