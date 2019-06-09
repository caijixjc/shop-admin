<template>
    <div>
<el-container>
  <el-aside width="auto">
    
      <Menu :isShow="isShow"> 
      </Menu>
    
    
  
    </el-aside>

  <el-container>

    <el-header>

      <Header @click="handleChangeShow">
      </Header>

    </el-header>

    <el-main>

      <mianbao>

        
      </mianbao>
      
<router-view></router-view>
    </el-main>

  </el-container>

</el-container>

    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Menu from '../components/Menu.vue';
import Mianbao from '../components/Mianbao.vue';
export default {
      data() {
        return {
            isShow:false,
        }
      },
      //注册组件
      components:{
        Header,
        Menu,
        Mianbao
      },
      methods: {
        //修改isShow
        handleChangeShow(){
          this.isShow=!this.isShow
        }
      },
}
</script>

<style>
.el-header, .el-footer {
      color: #333;
        text-align: center;
        line-height: 60px;
  
  }
  
  .el-aside {
    background-color: #D3DCE6;
  
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
 
 
  }
  
 div >.el-container {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
  }
  

  

</style>
