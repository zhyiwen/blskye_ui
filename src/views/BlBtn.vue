<template>
  <div>
    <button class="bl-btn bl-btn-primary" type="button">主要按钮</button>
    <button class="bl-btn" type="button">标准按钮</button>
    <button class="bl-btn bl-btn-link" type="button">链接按钮</button>
    
    <div class="bl-btn-group">
      <button class="bl-btn">按钮组</button>
      <button class="bl-btn">第二个</button>
      <button class="bl-btn">第三个</button>
    </div>
    
    <button class="bl-btn bl-btn-lg bl-btn-primary" type="button">大尺寸按钮</button>
    <button class="bl-btn bl-btn-primary" type="button">默认大小按钮</button>
    <button class="bl-btn bl-btn-sm bl-btn-primary" type="button">较小的按钮</button>
    <button class="bl-btn bl-btn-mini bl-btn-primary" type="button">迷你按钮</button>
    
    <button class="bl-btn bl-btn-block bl-btn-info" type="button">块状按钮</button>
    <button class="bl-btn bl-btn-block bl-btn-danger" type="button">块状按钮</button>
    
    <button class="bl-btn" type="button">默认</button>
    <button class="bl-btn bl-btn-primary" type="button">主要</button>
    <button class="bl-btn bl-btn-info" type="button">信息</button>
    <button class="bl-btn bl-btn-success" type="button">成功</button>
    <button class="bl-btn bl-btn-warning" type="button">警告</button>
    <button class="bl-btn bl-btn-danger" type="button">危险</button>
    <br>
    <button class="bl-btn bl-btn-plain" type="button">默认</button>
    <button class="bl-btn bl-btn-plain bl-btn-primary" type="button">主要</button>
    <button class="bl-btn bl-btn-plain bl-btn-info" type="button">信息</button>
    <button class="bl-btn bl-btn-plain bl-btn-success" type="button">成功</button>
    <button class="bl-btn bl-btn-plain bl-btn-warning" type="button">警告</button>
    <button class="bl-btn bl-btn-plain bl-btn-danger" type="button">危险</button>
  </div>
</template>

<style lang="scss" scoped>
.bl-btn {
  margin-right: 5px;
  margin-bottom: 20px;
}
.bl-btn-group .bl-btn{
  margin-right: 0;
}
</style>
