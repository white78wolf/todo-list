<template>
  <div>
    <h1>Todo App - Todos</h1>
    <router-link to="/">
      <button class="anchor-button">Home</button>
    </router-link>
    <hr>
    <AddTodo @add-todo="addTodo" />
    <TodoList
      v-if="unfinishedTodos.length"
      :todos="unfinishedTodos"
      @remove-todo="removeTodo"
      @change-status="changeStatus"
    />
    <p v-else>Nothing to do yet</p>
    <hr>
    <TodoList
      v-if="completedTodos.length"
      :todos="completedTodos"
      @remove-todo="removeTodo"
      @change-status="changeStatus"
    />
    <p v-else-if="unfinishedTodos.length">A journey of a thousand miles begins with a single step</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import api from '@/api/idb'

export default {
  data() {
    return {
      todos: []
    }
  },
  components: {
    TodoList, AddTodo
  },
  methods: {
    removeTodo (id) {
      api.deleteTodo(this.todos.find(t => t.id == id))
    },
    addTodo (newTodo) {
      api.saveTodo(newTodo)
    },
    changeStatus (id) {
      let changedStatusTodo = this.todos.find(t => t.id == id)
      changedStatusTodo.completed = !changedStatusTodo.completed
      api.saveTodo(changedStatusTodo)
    },
    loadTodos () {
      return api.getTodos()
    }
  },
  computed: {
    completedTodos () {
      return this.todos.filter(t => t.completed)
    },
    unfinishedTodos () {
      return this.todos.filter(t => !t.completed)
    }
  },
  mounted () {
    if (this.loadTodos())
      this.loadTodos().then(todos => this.todos = todos)
  },
  updated () {
    if (this.loadTodos())
      this.loadTodos().then(todos => this.todos = todos)
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
a:visited {
  color: #777;
}
.anchor-button {
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  background: #eee;
  width: 6rem;
  height: 2rem;
}
.anchor-button:hover {
  cursor: pointer;
  background: #ccc;
}
.anchor-button:focus {
  outline: none;
}
hr {
  border: none; /* Firefox */
  color: #ccc; /* color of line for another browsers */
  background-color: #ccc; /* color of line for Firefox and Opera */
  height: 1px; /* thickness of line */
}
</style>
