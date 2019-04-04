<template>
  <div class="bl-container">
    <div class="row">
      <div class="col-16">
        <div class="box">col-16</div>
      </div>
      <div class="col-8">
        <div class="box">col-8</div>
      </div>
      <div class="col-12">
        <div class="box">col-12</div>
      </div>
      <div class="col-12">
        <div class="box">col-12</div>
      </div>
      <div class="col-8">
        <div class="box">col-8</div>
      </div>
      <div class="col-8">
        <div class="box">col-8</div>
      </div>
      <div class="col-8">
        <div class="box">col-8</div>
      </div>
      <div class="col-2">
        <div class="box">col-2</div>
      </div>
      <div class="col-2">
        <div class="box">col-2</div>
      </div>
      <div class="col-2">
        <div class="box">col-2</div>
      </div>
      <div class="col-2">
        <div class="box">col-2</div>
      </div>
      <div class="col-2">
        <div class="box">col-2</div>
      </div>
      <div class="col-2">
        <div class="box">col-2</div>
      </div>
      <div class="col-2">
        <div class="box">col-2</div>
      </div>
      <div class="col-2">
        <div class="box">col-2</div>
      </div>
      <div class="col-2">
        <div class="box">col-2</div>
      </div>
      <div class="col-2">
        <div class="box">col-2</div>
      </div>
      <div class="col-2">
        <div class="box">col-2</div>
      </div>
      <div class="col-2">
        <div class="box">col-2</div>
      </div>
    </div>
    <div class="row-flex row-flex-center row-flex-top">
      <div class="col-4">
        <div class="box height-100">col-4</div>
      </div>
      <div class="col-4">
        <div class="box height-50">col-4</div>
      </div>
      <div class="col-4">
        <div class="box height-120">col-4</div>
      </div>
      <div class="col-4">
        <div class="box height-80">col-4</div>
      </div>
    </div>
    <div class="row-flex row-flex-space-around row-flex-middle">
      <div class="col-4">
        <div class="box height-100">col-4</div>
      </div>
      <div class="col-4">
        <div class="box height-50">col-4</div>
      </div>
      <div class="col-4">
        <div class="box height-120">col-4</div>
      </div>
      <div class="col-4">
        <div class="box height-80">col-4</div>
      </div>
    </div>
    <div class="row-flex row-flex-space-between row-flex-bottom">
      <div class="col-4">
        <div class="box height-100">col-4</div>
      </div>
      <div class="col-4">
        <div class="box height-50">col-4</div>
      </div>
      <div class="col-4">
        <div class="box height-120">col-4</div>
      </div>
      <div class="col-4">
        <div class="box height-80">col-4</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  height: 50px;
  background: #f2f2f2;
  border: 1px solid #dedede;
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
  color: #999;
  font-size: 0.8rem;
}
.height-100{height: 100px; line-height: 100px;}
.height-50{height: 50px; line-height: 50px;}
.height-120{height: 120px; line-height: 120px;}
.height-80{height: 80px; line-height: 80px;}
</style>
