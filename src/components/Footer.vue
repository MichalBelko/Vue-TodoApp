<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <router-link to="/about"><span class="about">About</span></router-link>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  text-align: center;
  margin-top: 30px;
}
footer :is(a) {
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0;
  color: crimson;
}
</style>
