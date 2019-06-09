<template>
    <el-breadcrumb separator="/">
  <el-breadcrumb-item v-for="(item, index) in info" :key="index">
      {{item}}
  
  </el-breadcrumb-item>

</el-breadcrumb>
</template>

<script>
export default {
    data() {
        return {
            info:[],
        }
    },
    
    watch: {
        $route:function(){
            this.getRoute()
        }

        
    },
    methods: {
            getRoute(){
        const arr =  this.$route.matched;
            let info = [];

            arr.forEach(v =>{
                info.push(v.meta)
              
            })
            this.info = info 
            }
    },
    mounted() {
        this.getRoute()
    },
}
</script>

<style>

</style>
