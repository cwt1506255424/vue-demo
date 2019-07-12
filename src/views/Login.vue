<template>
    <div class="login">
        <el-form label-position="right" label-width="70px">
            <el-form-item label="用户名:" prop="username">
                <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
                <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登 录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loginForm: {
                loginForm: '',
                password: ''
            }
        }
    },
    methods:{
        login(){//模拟一下登录
            const token = 'testToken';
            localStorage.setItem('token',token);//这个是axios拦截器注入用
            const permission = ['menu1','menu1_1','menu1_2','menu1_3','menu1_1_add','menu2','menu2_1','menu3','menu3_2']
            localStorage.setItem('permission',JSON.stringify(permission));
            this.$router.push('/');
        }
    }
}
</script>

<style lang="less" scoped>
.login{
    display: flex;
    height: 100vh;
    .el-form{
        width: 400px;
        margin: auto;
        .el-button{
            width: 100%;
        }
    }
}
</style>
