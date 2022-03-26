<template>
    <div class="topnav" ref="topnav">
      <router-link ref="topLogo" to="/" class="logo">
        <svg class="icon">
          <use xlink:href="#icon-langhua"></use>
        </svg>
      </router-link>
      <ul class="menu">
        <li>
          <router-link to="/doc">文档</router-link>
        </li>
      </ul>
      <svg v-if="toggleMenuButtonVisible" class="toggleAside"  @click="toggleMenu">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
</template>
<script lang="ts">
import {
  inject, onMounted, onUnmounted, ref,
  Ref
} from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject < Ref < boolean >> ("menuVisible");
    const topnav=ref<HTMLDivElement>(null)
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    const handleScroll=()=>{}
    onMounted(()=>{
      window.addEventListener("scroll", handleScroll);
    })
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return {
      toggleMenu,topnav
    };
  },
};
</script>
<style lang="scss">
$color:#32599b;
$blue:#7db3e7;
.topnav {
  color:$color;
  display:flex;
  padding: 16px;
  position:absolute;
  z-index:15;
  top:0;
  left:0;
  width:100%;
  justify-content: center;
  align-items:center;
 > .toggleAside{
    width:32px;
    height:32px;
    position:absolute;
    top:50%;
    left:16px;
    transform:translateY(-50%);
    display:none;
  }
> .logo {
  max-width: 6em;
  margin-right: auto;
  margin-left:1em;
  >svg{
    width:32px;
    height:32px;
  }
}
  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    font-size:20px;
    >li {
      margin-right:1em;
      >a{
        padding:0 13px;
        text-decoration: none;
        &:hover{
          color:$blue;
        }
      }
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