<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">show</Button>
  </div>
</template>
<script lang="ts">
import {Button,openDialog} from '../lib/index'
import {h} from "vue";
export default{
  components:{
    Button
  },
  setup(){
    const showDialog=()=>{
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  }
}
</script>