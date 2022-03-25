<template>
  <div>
  <div class="topnavAndBanner">
    <Topnav/>
    <div class="banner">
      <h1>dip UI</h1>
      <h2>一个很厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/yudie-zhao">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
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
$green:#02bcb0;
$border-radius:4px;
$color:#007974;
.topnavAndBanner{
  background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgba(183,233,230,1) 100%);
  clip-path:ellipse(80% 60% at 50% 40%)
}
.features{
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
        flex-direction:column;
        justify-content: center;
        align-items:center;
        >h3{
          font-size:28px;
      }
        >svg{
          width:64px;
          height:64px;
        }
      >p{
        font-size:18px;
      }
    }
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  color:$color;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >.actions{
    padding: 8px 0;
    > a{
      margin:0 8px;
      background: $green;
      color:white;
      display: inline-block;
      padding: 8px 24px;
      border-radius:$border-radius;
      &:hover{
        text-decoration: none;
      }
    }
  }
}
</style>