import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Grid from './views/BlGrid.vue'
import Text from './views/BlText.vue'
import Btn from './views/BlBtn.vue'
import Tags from './views/BlTags.vue'
import List from './views/BlList.vue'
import Panel from './views/BlPanel.vue'
import Timeline from './views/BlTimeline.vue'
import Table from './views/BlTable.vue'
import Input from './views/BlInput.vue'
import Todolist from './views/BlTodolist.vue'
import Steps from './views/BlSteps.vue'

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
      path: "/panel",
      name: "panel",
      component: Panel
    },
    {
      path: "/input",
      name: "input",
      component: Input
    },
    {
      path: "/timeline",
      name: "timeline",
      component: Timeline
    },
    {
      path: "/todolist",
      name: "todolist",
      component: Todolist
    },
    {
      path: "/steps",
      name: "steps",
      component: Steps
    },
    {
      path: "/table",
      name: "table",
      component: Table
    }
  ]
});
