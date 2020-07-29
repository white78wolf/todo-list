<template>
  <li>
    <span :class="{ completed: todo.completed }">
      <input type="checkbox">
      <strong>{{index + 1}}.</strong>
      {{todo.title}}
    </span>
    <button @click="$emit('remove-item', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  }
}
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
}
input {
  margin-right: 1rem;
}
.completed {
  text-decoration: line-through;
  color: #777;
}
</style>
