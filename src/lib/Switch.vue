<template>
<button class='dip-switch' @click="toggle" :class="{'dip-checked':value }"><span/>
</button>
</template>
<script lang="ts">

export default{
  props:{
    value:Boolean
  },
  setup(props,context){
    const toggle=()=>{
context.emit('update:value',!props.value)
    }
    return {toggle}
  }
}
</script>
<style lang="scss" >
$h: 22px;
$h2: $h - 4px;
.dip-switch{
  height:$h;
  width:$h*2;
  border:none;
  background:#bfbfbf;
  border-radius:$h/2;
  position:relative;
  >span{
    position:absolute;
    left:2px;
    top:2px;
    height:$h2;
    width:$h2;
    background:white;
    border-radius:$h2/2;
    transition:all 250ms;
  }
  &.dip-checked{
    background:#1890ff;
    >span{
      left:calc(100% - #{$h2} - 2px);
    }
  }

  &:focus{
    outline:none;
  }
  &:active{
    >span{
      width:$h2 + 4px;
    }
  }
  &.dip-checked.active{
    >span{
      width:$h2 + 4px ;
      margin-left:-4px;
    }
  }
}


</style>
