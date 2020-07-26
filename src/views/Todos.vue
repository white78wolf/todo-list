<template>
    <div>
        <h1>Todo App - Todos</h1>
        <router-link to="/">Home</router-link>
        <hr>
        <ul
            v-for="(todo, idx) in todos"
            :key="todo.id"
            :index="idx"
        >
            <li><strong>{{todo.id}}</strong>. {{todo.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                todos: [
                    { id: 1, title: 'Learn Vue.js', completed: false },
                    { id: 2, title: 'Think of your own project', completed: false },
                    { id: 3, title: 'Do it', completed: false }
                ]
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>
