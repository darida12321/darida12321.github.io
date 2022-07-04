<template>
  <div id="links">
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/project">project</router-link>
    <router-link to="/cv">cv</router-link>
    <router-link to="/contact">contact</router-link>
  </div>
  <hr/>
</template>

<style scoped>
#links {
  width: 40rem;
  height: 3rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

a {
  width: 7rem;
  height: 2rem;
  color: var(--text-color);
  text-decoration: none;
  text-align: center;
  font-size: 2rem;
  line-height: 2rem;
}

</style>
