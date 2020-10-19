<template>
  <div>
    <p>这是我定义的数组</p>
    <div>{{this.arr}}</div>
    <button @click="changeArr">点击这里我就要修改数组里第一个</button>
    <p>这是我的对象</p>
    <div>{{this.haha}}</div>
    <button @click="changeObj">点击这里我就要添加对象的属性</button>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      arr: [0, 1, 2, 3, 4, 5, 6],
      haha: {
        name: "123",
        age: 12,
        story: "从前有座山",    
      }
    };
  },
  watch:{
     'arr':{
         handler:function(val,oldval){
            console.log('修改后',val,'修改前',oldval);
         },   
     },
     'haha':{
         handler:function(val,oldval){
            console.log('修改后',val,'修改前',oldval);
         }
     }
  },
 
  methods: {
    changeArr() {
        this.arr.push('12332') // 添加数组
        console.log("这是修改之后的数组", this.arr);
        // 可以给数组添加新元素
    },
    changeObj() {
        this.haha.content = "我是一个小和尚"; // 添加对象
        console.log("这是修改之后的对象", this.haha);    
        // 不能新给对象新添加属性
    }
  }
};
</script>