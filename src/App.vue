<template>
  <div id="app">
    <router-view class="first"/>
    <router-view class="secnd" name="main"/>
  </div>
</template>

<script>
import './style.min.css'
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lag="sass">
#app {

}
</style>
