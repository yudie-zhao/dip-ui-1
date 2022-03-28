<template>
  <div class="homeWrapper">
    <Topnav/>
    <div class="banner">
      <h1>dip UI</h1>
      <h2>一个很厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/yudie-zhao">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
         <h3>基于 Typescript </h3>
          <p>源代码采用 Typescript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default{
components:{Topnav}
}
</script>
<style lang="scss" scoped>
$blue:#7db3e7;
$border-radius:4px;
$color:#429fe8;
.homeWrapper{
  background:#e8f5fb;
  height:100%;
  width:100%;
  left:0;
  top:0;
  position:absolute;
  overflow-y:auto;
  >.features{
    margin:64px auto;
    padding:0 50px;
    @media (min-width:800px){
      width:800px;
      >ul{
        >li{
          width:50%;
        }
      }
    }
    @media (min-width:1200px){
      width:1200px;
      >ul{
        >li{
          width:33.333%
        }
      }
    }
    >ul{
      display:flex;
      flex-wrap:wrap;
      justify-content: center;
      >li{
        margin:16px 0;
        display:flex;
        width:300px;
        padding:0 40px;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        >h3{
          font-size:1.5em;
          color:$color;
        }
        >svg{
          width:64px;
          height:64px;
        }
        >p{
          font-size:14px;
          color:$color;
        }
      }
    }
  }
  >.banner {
    padding:140px 0 0 0;
    display: flex;
    color:$color;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    >h1,h2{
      margin:10px 0;

    }
    >.actions{
      padding: 20px 0;
      > a{
        margin:0 10px;
        background: $color;
        color:white;
        display: inline-block;
        padding: 8px 24px;
        border-radius:$border-radius;
        &:hover{
          text-decoration: none;
          background:$blue;
        }
      }
    }
  }
}
</style>