<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title">
    <button type="submit">Add new task</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      title: ""
    }
  },
  methods: {
    onSubmit () {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title.trim(),
          completed: false
        }
        this.$emit('add-todo', newTodo)
        this.title = ""
      }
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}
form input {
  width: 100%;
  margin-right: 10px;
}
</style>
