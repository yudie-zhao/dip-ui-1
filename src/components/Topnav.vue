<template>
    <div class="topnav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
      <span class="toggleAside"  @click="toggleMenu"></span>
    </div>
</template>
<script lang="ts">
import {inject,Ref} from "vue";

export default{
setup(){
  const menuVisible=inject<Ref<boolean>>('menuVisible')
  const toggleMenu=()=>{
    menuVisible.value=!menuVisible.value
  }
  return {toggleMenu}
}
}
</script>
<style lang="scss">
.topnav {
  background: pink;
  display:flex;
  padding: 16px;
  position:fixed;;
  z-index:10;
  top:0;
  left:0;
  width:100%;
  justify-content: center;
  align-items:center;
 > .toggleAside{
    width:24px;
    height:24px;
    background:red;
    position:absolute;
    top:50%;
    left:14px;
    transform:translateY(-50%);
    display:none;
  }
> .logo {
  max-width: 6em;
  margin-right: auto;
}
  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li {
      margin: 0 1em;
    }
  }
  @media (max-width:500px){
    >.menu{
      display:none
    }
    >.logo{
      margin:0 auto
    }
    >.toggleAside{
      display:inline-block;
    }
  }
  }
</style>