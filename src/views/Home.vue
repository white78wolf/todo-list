<template>
  <div>
    <h1>Todo App - Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid quod eaque veniam possimus amet magni
      deleniti, corrupti excepturi nostrum perspiciatis sit et eveniet quos molestias tenetur ipsum iusto odit?</p>
    <hr>
    <button class="anchor-button">
      <router-link to="/todos">Todos</router-link>
    </button>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
a:visited {
  color: #444;
}
.anchor-button {
  font-size: 1.5rem;
  border: none;
  border-radius: 10px;
  background: #eee;
  width: 7rem;
  height: 3rem;
}
.anchor-button:hover {
  cursor: pointer;
  background: #ccc;
}
</style>
