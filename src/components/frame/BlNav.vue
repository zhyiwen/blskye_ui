<template>
  <div class="bl-nav">
    <div class="nav-logo">
      <img
        src="../../assets/img/logo.png"
        alt=""
      >
    </div>
    <ul class="nav-menu">
      <li>
        <router-link to="/"><i class="fa fa-home fa-fw"></i><span>首页</span></router-link>
      </li>
      <li>
        <router-link to="/grid"><i class="fa fa-desktop fa-fw"></i><span>响应式设计</span></router-link>
      </li>
      <li>
        <router-link to="/text"><i class="fa fa-font fa-fw"></i><span>文字排版</span></router-link>
      </li>
      <li>
        <router-link to="/btn"><i class="fa fa-bold fa-fw"></i><span>按钮</span></router-link>
      </li>
      <li>
        <router-link to="/input"><i class="fa fa-pencil fa-fw"></i><span>输入框</span></router-link>
      </li>
      <li>
        <router-link to="/tags"><i class="fa fa-tag fa-fw"></i><span>标签</span></router-link>
      </li>
      <li>
        <router-link to="/list"><i class="fa fa-list fa-fw"></i><span>列表</span></router-link>
      </li>
      <li>
        <router-link to="/timeline"><i class="fa fa-sitemap fa-fw"></i><span>时间轴</span></router-link>
      </li>
      <li>
        <router-link to="/table"><i class="fa fa-table fa-fw"></i><span>表格</span></router-link>
      </li>
      <li>
        <router-link to="/todolist"><i class="fa fa-list-alt fa-fw"></i><span>todolist</span></router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.bl-nav {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 250px;
  background: #8a69c4;
  background: linear-gradient(to bottom, #8a69c4, #463a74);
  text-align: left;
  .nav-menu {
    margin: 0;
    height: calc(100% - 90px);
    overflow: auto;
    box-sizing: border-box;
    padding: 10px;
    li {
      font-size: 1rem;
      a {
        display: block;
        padding: 10px 5px;
        border-radius: 4px;
        text-decoration: none;
        color: #c6b9e6;
        .fa {
          margin-left: 10px;
          margin-right: 5px;
        }
        &.router-link-exact-active {
          background: rgba($color: #fff, $alpha: 0.2);
          color: #fff;
        }
      }
    }
  }
  .nav-logo {
    width: 100%;
    height: 90px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>

