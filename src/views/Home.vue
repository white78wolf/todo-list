<template>
  <div>
    <h1>Todo App - Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid quod eaque veniam possimus amet magni
      deleniti, corrupti excepturi nostrum perspiciatis sit et eveniet quos molestias tenetur ipsum iusto odit?</p>
    <hr>
    <router-link to="/todos">
      <button class="anchor-button">Todos</button>
    </router-link>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
a:visited {
  color: #777;
}
.anchor-button {
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  background: #eee;
  width: 7rem;
  height: 3rem;
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
