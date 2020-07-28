<template>
  <ul>
    <TodoItem
      v-for="(todo, idx) of todos"
      :todo="todo"
      :key="todo.id"
      :index="idx"
      @remove-item="$emit('remove-todo', todo.id)"
    />
  </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  props: ['todos'],
  components: {
    TodoItem
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    padding-left: 0;
  }
</style>
