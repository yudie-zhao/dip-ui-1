<demo>
支持 size
</demo>
<template>
  <div>
    <div>
      <Button size="big">大大大</Button>
      <Button>普普通</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">普普通</Button>
      <Button theme="link" size="small">小小小</Button>
    </div>
    <div>
      <Button theme="text" size="big">大大大</Button>
      <Button theme="text">普普通</Button>
      <Button theme="text" size="small">小小小</Button>
    </div>
  </div>
</template>
<script lang="ts">
import {Button} from '../lib/index'
export default {
 components:{
   Button
 }
}
</script>