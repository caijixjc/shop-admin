<template>
   <div>
       <!-- 搜索框和新增删除 -->
       <el-row type="flex" justify="space-between" class="a">
           <div>
                <el-button type="primary">新增</el-button>
                 <el-button type="danger" @click="handleDeleteMore">删除</el-button>
            </div>
            <div class="input-search">
                <el-input placeholder="请输入内容" class="input-with-select" v-model="seacthValue">
    
                <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
                </el-input>
            </div>
        </el-row>
   
   <!-- 商品列表 -->
         <!-- data：表格的数据 -->
        <!-- tooltip-effect：工具栏的效果 -->
        <!-- selection-change：选择表格每一项时候就触发的事件 -->
        <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">

      <!-- type="selection"表格可以选择方块 -->
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <!-- label每一列的标题文字 -->
    <!-- width当前列的宽度 -->

    <el-table-column
      label="标题"
      width="300">

      <!-- 自定义模板 -->
                <!-- template的slot-scoped的值模板的变量名scope -->
                <!-- scope.row每一项数据的对象 -->

      <template slot-scope="scope">
          <el-row type="flex" align="middle">
              <img :src="scope.row.imgurl" class="goods-img">
              <div>
                  {{scope.row.title}}
              </div>
          </el-row>
      </template>
    </el-table-column>
    <el-table-column
      prop="categoryname"
      label="类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sell_price"
      label="价格"
      show-overflow-tooltip>
    </el-table-column>
    
                <!-- 删除编辑 -->
         <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>


  </el-table>
   
    <!-- 分页 -->
     <!-- :current-page="currentPage4"
     前往第几页 -->
     <!-- :page-sizes="[100, 200, 300, 400]"
        每页显示个数选择器的选项设置
      -->
      <!-- :page-size="100"
        每页显示条目个数，支持 
       -->
       <!-- layout="total, sizes, prev, pager, next, jumper"
       
        -->
        <!-- total
        总条目数
         -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageSizi"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>


   </div>


</template>

<script>
export default {
    data() {
        return {
     
            tableData: [
    
            ],
       
        pageIndex: 1,
        selectGoods:[],//选中的商品
        total:0,//总条数
        seacthValue:'',//搜索关键字
        pageSizi:5     //显示总条数
      
    }
  },

   mounted() {
            this.getList()
      },
   methods: {

       getList(){

           this.$axios({
                url:`http://localhost:8899/admin/goods/getlist?pageIndex=${this.pageIndex}&pageSize=${this.pageSizi}&searchvalue=${this.seacthValue}`,
                method: "GET"
            }).then(res => {
                console.log(res.data);
                const data = res.data;
                this.tableData = data.message;
                this.total = data.totalcount
            })
       },

    //    选择每一项时触发
      handleSelectionChange(val) {
        // this.multipleSelection = val;
            this.selectGoods= val
      },
      //编辑事件
       handleEdit(row) {
        console.log(row);
      },
      //删除单个商品
      handleDelete(row) {
        const id = row.id;
        this.$axios({
            url:`http://localhost:8899/admin/goods/del/${id}`,
            method:"GET"
        }).then(res=>{
            const {message,status} = res.data;
            if(status===0){
                this.$message.success(message);
                    this.getList()
            }else{
                this.$message.error(message);
            }
        })
        
      },
      //删除多条
      handleDeleteMore(){
          console.log(123);
        //   console.log(v);
          const arr = this.selectGoods.map(v =>{
                return v.id
          });
            const ids = arr.join(",")
            console.log(ids);
            this.$axios({
            url:`http://localhost:8899/admin/goods/del/${ids}`,
            method:"GET"
        }).then(res=>{
            const {message,status} = res.data;
            if(status===0){
                this.$message.success(message);
                    this.getList()
            }else{
                this.$message.error(message);
            }
        })
      },
      //每条页数
       handleSizeChange(val) {
          this.pageSizi=val;
            this.getList()
      },
    //   当前页
      handleCurrentChange(val) {
          this.pageIndex=val
          this.getList()
      },
      //搜索
      handleSearch(){
          this.getList()
      },
      //回车搜索
      handleEnter(){
          this.getList()
      }
     
    }
}
</script>

<style>
.el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .input-search{
      width:200px;
  }
.a{
    margin-top: 20px;
}
.goods-img{
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    margin-right: 5px;
}
</style>
