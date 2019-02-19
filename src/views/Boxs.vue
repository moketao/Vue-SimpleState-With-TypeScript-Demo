<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>{{computedValue}}</div>
    <div class="click" @click="onClick">[{{ computedValue }}]</div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
@Component({
  props: {
    propMessage: String,
  },
  components: {
    HelloWorld,
  }
})
export default class Boxs extends Vue {
  value = null
  get computedValue () {
    return this.$root.$data.layersSel;
  }
  onClick(){
    alert(this.computedValue);
  }
  created() {
  }
}
</script>
<style>
.click{
  padding: 10px;
  background-color: #c8e6d8;
  cursor: pointer;
}
</style>

