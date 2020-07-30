<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      v-model="title"
    >
    <button
      type="submit"
      class="add-button"
    ><plus-circle-icon /></button>
  </form>
</template>

<script>
import PlusCircleIcon from 'vue-material-design-icons/PlusCircle.vue'

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
        document.getElementsByTagName('input')[0].focus()
      }
    }
  },
  components: {
    PlusCircleIcon
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
  padding-left: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.add-button {
  color: #444;
  width: 8rem;
  cursor: pointer;
}
</style>
