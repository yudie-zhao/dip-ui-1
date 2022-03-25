<demo>
常规使用
</demo>
<template>
  <div>
    <Tabs v-model:selected="x">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2" disabled>内容2</Tab>
      <Tab title="导航3"> 内容3</Tab>
    </Tabs>
  </div>
</template>
<script lang="ts">
import {Tab, Tabs} from '../lib/index'
import {ref} from "vue";
export default{
  components:{
    Tab,Tabs
  },
  setup(){
    const x=ref('导航1')
    return {x}
  }
}
</script>