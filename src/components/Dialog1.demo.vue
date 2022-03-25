<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="toggle">Click me</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false"
            :ok="f1" :cancel="f2">
      <template v-slot:content>
        <strong>你好</strong>
        <div>hi</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
  </div>
</template>
<script lang="ts">
import {Button, Dialog} from '../lib/index'
import {ref} from "vue";
export default{
components:{
Button,Dialog
},
  setup(){
    const x=ref(false)
    const toggle=()=>{
      x.value=!x.value
    }
    const f1=()=>{
      return false
    }
    const f2=()=>{
    }
    return{
    f1,f2,toggle,x}
  }
}
</script>