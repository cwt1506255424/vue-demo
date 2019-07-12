<template>
    <div>Menu1_1
        <el-button type="primary" v-if="permission.includes('menu1_1_add')">主要按钮</el-button>
        <el-button type="success" v-if="permission.includes('menu1_1_test')">成功按钮</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    computed: {
        permission(){
            return this.$store.state.permission
        }
    },
}
</script>

