<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #ffffff;
  margin-top: 60px;
}

.autocomplete-items {
  position: absolute;
  border: 1px solid #cccccc;
  border-bottom: none;
  border-top: none;
  z-index: 2;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}

.autocomplete-items div {
  color: #2c3e50;
  padding: 10px;
  cursor: pointer;
  background-color: #ffffff;
  border-bottom: 1px solid #d4d4d4;
}

/*when hovering an item:*/
.autocomplete-items div:hover {
  background-color: #eeeeee;
}

/*when navigating through the items using the arrow keys:*/
.autocomplete-active {
  background-color: #cddddd !important;
  color: #ffffff;
}
</style>
