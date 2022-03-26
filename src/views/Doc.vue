<template>
  <div class="layout">
    <Topnav toggle-menu-button-visible class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch </router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button </router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog </router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs </router-link>
          </li>
        </ol>
      </aside>
      <main @click="toggleAsideVisible">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {
  inject,
  onMounted,
  onUnmounted,
  reactive,
  Ref,
  watchEffect
} from "vue";
import {
  debounce
} from '../utils/debounce';
export default {
  name: "Doc",
  components: {
    Topnav
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const data = reactive({
      listenerPageWidthFn: () => {},
      pageWidth: document.documentElement.clientWidth
    })
    const watchPageWidth = () => {
      const listenerPageWidth = debounce(() => {
        data.pageWidth = document.documentElement.clientWidth;
      }, 250);
      window.addEventListener("resize", listenerPageWidth);
      return listenerPageWidth;
    };
    const toggleAsideVisible = () => {
      if (data.pageWidth <= 900) {
        menuVisible.value = false;
      }
    }
    watchEffect(() => {
      if (data.pageWidth >= 900) {
        menuVisible.value = true;
      }
    })
    onMounted(() => {
      data.listenerPageWidthFn = watchPageWidth();
    })
    onUnmounted(() => {
      window.removeEventListener("resize", data.listenerPageWidthFn);
    })
    return {
      menuVisible,toggleAsideVisible
    }
  }
}
</script>
<style lang="scss" scoped>
$aside-index : 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  >.nav {
    flex-shrink: 0;
  }
  >.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width:500px){
      padding-left:0;
    }
  }
}
.content {
  display: flex;
  >aside {
    flex-shrink: 0;
  }
  >main {
    flex-grow: 1;
    padding: 16px;
    background: white;
    overflow:auto;
  }
}
aside {
  background:#e8f5fb;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;
  color:#32599b;
  >h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  >ol {
    >li {
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: #7db3e7;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>