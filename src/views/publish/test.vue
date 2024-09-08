<template>
  <nav class="menu">
    <a v-for="Item in Menus" :key="Item">{{Item}}</a>
    <!-- <a>Products</a>
    <a>About</a> -->
  </nav>
  <div v-for="작명 in products" :key="작명">
    <h4>{{작명}}</h4>
    <p>,000 만원</p>
  </div>
  <!-- <div>
    <h4>{{products[1]}}</h4>
    <p>XX 만원</p>
  </div>
  <div>
    <h4>{{products[2]}}</h4>
    <p>XX 만원</p>
  </div>
  <div>
    <h4>{{products[3]}}</h4>
    <p>XX 만원</p>
  </div> -->
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      //여기에 데이터 보관함
      Menus : ['Home','Products','About','Contact'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸', '신길동원룸']
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.red {
  background: red;
}
.menu {
  padding: 15px;
  border-radius: 5px;
  background: darkslateblue;
}
.menu a {
  padding: 10px;
  color: #fff;
}
</style>
