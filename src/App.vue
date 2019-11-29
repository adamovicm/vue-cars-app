<template>
  <div class="container">
    <ul class="nav">
      <router-link to="cars" tag="li" class="nav-link">
        <a class="nav-link">Cars</a>
      </router-link>
    </ul>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>
