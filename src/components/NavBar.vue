<template>
  <div id="navbar">
    <div id="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/project">Projects</router-link>
      <router-link to="/cv">CV</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <hr id="dividor"/>
  </div>
</template>

<style scoped>
#links {
  width: 50rem;
  height: 3rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

a {
  width: 9rem;
  height: 2rem;
  color: var(--text-color);
  text-decoration: none;
  text-align: center;
  font-size: 2rem;
  line-height: 2rem;
}

.router-link-active::after {
  content: "";
  display: block;
  width: calc(9rem - 0.3rem);
  height: 0;
  background: var(--primary-color);
  border: 0.15rem solid var(--primary-color);
  border-radius: 0.15rem;
  margin-top: 0.5rem;
}

#dividor {
  background: var(--base-color-light);
  border: 0.15rem solid var(--base-color-light);
  border-radius: 0.15rem;
  width: calc(50rem - 0.3rem);
  height: 0;
  margin: auto;
  margin-top: 0.5rem;
}
</style>
