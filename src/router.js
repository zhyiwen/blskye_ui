import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Grid from './views/BlGrid.vue'
import Text from './views/BlText.vue'
import Btn from './views/BlBtn.vue'
import Tags from './views/BlTags.vue'
import List from './views/BlList.vue'
import Timeline from './views/BlTimeline.vue'
import Table from './views/BlTable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/grid",
      name: "grid",
      component: Grid
    },
    {
      path: "/text",
      name: "text",
      component: Text
    },
    {
      path: "/btn",
      name: "btn",
      component: Btn
    },
    {
      path: "/tags",
      name: "tags",
      component: Tags
    },
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/timeline",
      name: "timeline",
      component: Timeline
    },
    {
      path: "/table",
      name: "table",
      component: Table
    }
  ]
});
