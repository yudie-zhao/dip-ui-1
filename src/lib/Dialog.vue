<template>
  <template v-if="visible">
    <Teleport to="body">
    <div class="dip-dialog-overlay" @click="closeOnClickOverlay"></div>
    <div class="dip-dialog-wrapper">
      <div class="dip-dialog">
      <header>
        <slot name="title"/>
      <span class="dip-dialog-close" @click="close"></span></header>
      <main>
       <slot name="content"/>
      </main>
      <footer>
        <Button level="main" @click="ok">Ok</Button>
        <Button @click="cancel">Cancel</Button>
      </footer>
      </div>
    </div>
    </Teleport>
  </template>
</template>
<script lang="ts">
import Button from './Button.vue'
export default{
  components:{Button},
  props:{
    visible:{
      type:Boolean,
      default:false
    },
    closeOnClickOverlay:{
      type:Boolean,
      default:true
    },
    ok:{
      type:Function
    },
    cancel:{
      type:Function
    }
    },
    setup(props,context){
      const close=()=>{
        context.emit('update:visible',false)
      }
      const closeOnClickOverlay=()=>{
        if(props.closeOnClickOverlay){
          close()
        }
      }
      const ok=()=>{
      if(props.ok && props.ok()!== false){
        close()
      }
      }
      const cancel=()=>{
        props.cancel && props.cancel()
        close()
      }
      return{close,closeOnClickOverlay,ok,cancel}
    }
}
</script>
<style lang="scss">
$radius:4px;
$border-color:#d9d9d9;
.dip-dialog{
  border-radius:$radius;
  background:white;
  box-shadow:0 0 3px fade_out(black,0.5);
  min-width:15em;
  max-width:90%;
  &-overlay{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background:fade_out(black,0.5);
    z-index:10;
  }
  &-wrapper{
    position:fixed;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    z-index:11;
  }
  >header{
    padding:12px 16px;
    border-bottom:1px solid $border-color;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:20px;
  }
  >main{
    padding:12px 16px;
  }
  >footer{
    border-top:1px solid $border-color;
    padding:12px 16px;
    text-align:right;
  }
  &-close{
    position:relative;
    cursor:pointer;
    width:16px;
    height:16px;
    display:inline-block;
    &::before,
    &::after{
      content:'';
      position:absolute;
      height:1px;
      background:black;
      width:100%;
      left:50%;
      top:50%;
    }
    &::before{
      transform:translate(-50%,-50%) rotate(-45deg)
    }
    &::after{
      transform:translate(-50%,-50%) rotate(45deg)
    }
  }
}
</style>