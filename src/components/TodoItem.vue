<template>
  <li>
    <span
      :class="{ completed: todo.completed }"
      class="checkbox-and-title"
    >
      <button
        v-if="!todo.completed"
        @click="$emit('change-status', todo.id)"
        class="checkbox"
      >
        <checkbox-blank-outline-icon />
      </button>

      <button
        v-else
        @click="$emit('change-status', todo.id)"
        class="checkbox"
      >
        <checkbox-marked-outline-icon />
      </button>
      {{todo.title}}
    </span>

    <button
      @click="$emit('remove-item', todo.id)"
      class="delete-button"
    >
      <delete-icon title="Delete the task"/>
    </button>
  </li>
</template>

<script>
import DeleteIcon from 'vue-material-design-icons/Delete.vue'
import CheckboxBlankOutlineIcon from 'vue-material-design-icons/CheckboxBlankOutline.vue'
import CheckboxMarkedOutlineIcon from 'vue-material-design-icons/CheckboxMarkedOutline.vue'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  components: {
    DeleteIcon,
    CheckboxBlankOutlineIcon,
    CheckboxMarkedOutlineIcon
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
.checkbox-and-title {
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: left;
}
.checkbox {
  margin-right: 1rem;
  color: #444;
  cursor: pointer;
  border: none;
  background-color: #fff;
}
.checkbox:hover {
  border-radius: 5px;
  background-color: #ccc;
}
.completed {
  text-decoration: line-through;
  color: #777;
}
.delete-button {
  border: none;
  background-color: #fff;
  color: #444;
  cursor: pointer;
}
.delete-button:hover {
  background-color: #ccc;
  border-radius: 5px;
}
</style>
