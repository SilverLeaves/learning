<template>
  <div id="app">
    <div class="keyboard"  style="background-color: rgb(3,6,3)">
      <group :group="-1"></group>
      <group :group="0"></group>
      <group :group="1"></group>
      <group :group="2"></group>
      <group :group="3"></group>
      <group :group="4"></group>
      <group :group="5"></group>
      <group :group="6"></group>
      <group :group="7"></group>
    </div>
  </div>
</template>

<script>
 
  import Group from './components/Group'
 
  import {
    notes
  } from './notes.js'
  const groupKeys = 12;
  const base = 2;
  export default {
    components: {
      Group
    },
    data() {
      return {}
    },
  }

</script>

<style>
  html,
  body {
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
  }

  .keyboard {
    display: flex;
    margin: 20px;
    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .control {
    text-align: center;
    margin-top: 50px;
  }

</style>
