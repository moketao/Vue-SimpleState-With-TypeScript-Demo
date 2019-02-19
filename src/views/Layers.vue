<template>
  <div class="layers">
    <treeselect
      :multiple="true"
      :options="options"
      :always-open="true"
      :value = "value"
      @input = "updateValue"
    >
      <label slot="option-label" slot-scope="{ node, shouldShowCount, count, labelClassName, countClassName }" :class="labelClassName">
        {{ node.isBranch ? 'Branch' : 'Leaf' }}: {{ node.label }}
        <span v-if="shouldShowCount" :class="countClassName">({{ count }})</span>
      </label>
    </treeselect>
    <div class="result">{{ value }}</div>
  </div>
</template>
<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  components: { Treeselect },
  data() {
    return {
      value: this.$root.$data.layersSel,
      options: this.$root.$data.layers,
    }
  },
  watch: {
    valueFun:function(){
      return this.$root.$data.layersSel;
    }
  },
  methods: {
    updateValue(v){
      this.value = this.$root.$data.layersSel = v;
    }
  },
  mounted(){

  }
}
</script>
<style scoped>
.result{
  padding-top: 100px;
  width: 100%;
  text-align: center;
}
</style>
