import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home.vue"
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'
import intro from './markdown/intro.md'
import './index.scss'
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
const history=createWebHashHistory()
const md = String => h(Markdown, { content:String, key: String })

export const router=createRouter({
history:history,
routes:[{path: '/',component:Home},
{path:'/doc',component:Doc,children: [
                {path:'',redirect:'/doc/intro'},
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabsDemo}
]}]
})
router.afterEach(()=>{
console.log('路由切换了')
})