<template>
  <div class="bl-todolist">
    <div class="bl-todolist-hd">
      <div class="bl-input-group">
        <input
          type="text"
          class="bl-input"
          placeholder="请输入关键字"
          v-model="inputValue"
          @keyup.enter="handleSubmit"
        >
        <div class="bl-input-group-r">
          <button class="bl-btn bl-btn-primary" @click="handleSubmit">搜索</button>
        </div>
      </div>
    </div>
    <div class="bl-todolist-bd">
      <ul class="bl-list-group bl-list-group-hover">
        <li class="bl-list-group-item" v-for="(item,index) of list" :key="index">
          <div class="checkbox checkbox-info">
            <input
              type="checkbox"
              :id="'checkbox'+index"
            >
            <label :for="'checkbox'+index">
              {{item}}
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      inputValue:'',
      list:[]
    }
  },
  methods:{
    handleSubmit(){
      this.list.push(this.inputValue);
      this.inputValue = "";
    }
  }
}
</script>

