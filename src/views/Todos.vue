<template>
  <div>
    <h1>Todo App - Todos</h1>
    <router-link to="/">Home</router-link>
    <hr>
    <AddTodo @add-todo="addTodo" />
    <TodoList
      v-if="unfinishedTodos.length"
      :todos="unfinishedTodos"
      @remove-todo="removeTodo"
    />
    <p v-else>Nothing to do yet</p>
    <hr>
    <TodoList
      v-if="completedTodos.length"
      :todos="completedTodos"
      @remove-todo="removeTodo"
    />
    <p v-else-if="unfinishedTodos.length">A journey of a thousand miles begins with a single step</p>
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
  },
  computed: {
    completedTodos () {
      return this.todos.filter(t => t.completed)
    },
    unfinishedTodos () {
      return this.todos.filter(t => !t.completed)
    }
  }
}
</script>
