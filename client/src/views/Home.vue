<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container-heading">
      <div class="heading-item">
        <p class="paragraph">Welcome To</p>
        <h1 class="heading animated tada">GO BLOGS</h1>
        <p class="paragraph">the only blog where your nonsense posts are valuable</p>
      </div>
    </div>

    <div class="footer-copyright py-3 text-center animated rubberBand">
      © 2018 Copyright:
      <a href=""> GoBlogs.com </a>
    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Bangers|Changa|Faster+One|Graduate|Merienda|Press+Start+2P');

.container-heading {
  display: flex;
  justify-content: center;
  height: 85vh;
  background: dodgerblue;
  background: -webkit-linear-gradient(to bottom,lightblue, dodgerblue);
  background: linear-gradient(to bottom, lightblue, dodgerblue);
}

.heading-item {
  align-self: center;
  padding: 0px;
}

.heading {
  font-family: 'Press Start 2P', cursive;
  font-size: 5vw;
  margin: 0px;
}

.paragraph {
  font-family: 'Merienda', cursive;
  font-size: 2.5vw;
}

</style>



<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

