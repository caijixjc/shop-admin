<template>
    <div>
        <!-- el-row是布局组件
        type=fkex声明是flex布局,并且带有降级方案(如果浏览器不支持flex,会自动调用其他布局方式) -->
        <el-row type="flex" justify="space-between">
            <!-- 左边箭头 -->
            <div class="arrow"  @click="handleClick">
                <i class="el-icon-back" ></i>
            </div>
            <!-- 右边 -->
            <div>
                <div>admin 超级管理员 退出</div>
            </div>

        </el-row>



    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        handleClick(){
            this.$emit("click");
        }
    },
}
</script>

<style>
.arrow{
    cursor: pointer;
}
</style>
