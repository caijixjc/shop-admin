
  <template>
    <div class="form-wrapper">
      <el-form ref="form" :model="form" label-width="80px" class="from" :rules="rules">
  <el-form-item label="账号" prop=username>
    <el-input v-model="form.username" type="username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="form.password" type="password" ></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    </div>
 
  

 </template>
<script>
  export default {
    data() {
      return {
        form: {
          username:'',
          password:''
        },
        rules:{
          username:[
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        }
      }
    },
    methods: {
      onSubmit() {
        const data={
          uname:this.form.username,
          upwd:this.form.password
        }
        this.$axios({
          url:"http://localhost:8899/admin/account/login",
          method:"POST",
          data,
        }).then(res=>{
          console.log(res);
          const {message,status}=res.data
          if(status===0){
            this.$router.push('/');
          }else{
            this.$message.error(message);
          }
        })
      }
    }
  }
</script>

<style>

.from-wrapper{
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;

}
.from{
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -95px;
}
  
</style>