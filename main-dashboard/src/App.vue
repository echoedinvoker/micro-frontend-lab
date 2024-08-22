<template>
  <div class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/mdi">MDI</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: flex-start;
  gap: 1em;
}
</style>
