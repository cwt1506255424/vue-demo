<template>
    <el-container>
        <el-aside width="200px">
            <el-menu :default-active="$route.path" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" unique-opened router>
                <!-- 至多处理三层，有需要就继续判断下去。也可以使用递归，将子菜单封装成一个组件，取个名，自己调用自己 -->
                <template v-for="item in menuData">
                    <el-submenu :index="item.path" :key="item.code" v-if="item.children">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <!-- 循环子级 -->
                        <template v-for="childItem in item.children">
                            <el-submenu :index="childItem.path" :key="childItem.code" v-if="childItem.children">
                                <template slot="title">{{childItem.name}}</template>
                                <!-- 循环子级的子级 -->
                                <template v-for="sonItem in childItem.children">
                                    <el-menu-item :index="sonItem.path" :key="sonItem.code"> {{sonItem.name}}</el-menu-item>
                                </template>
                            </el-submenu>
                            <el-menu-item :index="childItem.path" :key="childItem.code" v-else> {{childItem.name}}</el-menu-item>
                        </template>
                    </el-submenu>
                    <el-menu-item :index="item.path" :key="item.code" v-else>
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header><el-link type="danger" href="#/login" :underline="false">退出</el-link></el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
import routes from '../router';

export default {
    data(){
        return {
            menuData: [],
        }
    },
    beforeRouteEnter (to, from, next) {
        const permission = localStorage.getItem('permission');
        if(!permission){//没有权限就直接退出
            next({ name: "login", replace: true });
        }
        const rightArr = JSON.parse(permission),
        //路由数据过滤无权限的页面并转为菜单数据
            transMenu = (arr, parebtPath = '/') => 
                arr.filter(item => rightArr.includes(item.meta.code)).map(item => ({
                    path: parebtPath + item.path,//路由对应的全路径
                    name: item.meta.name,//路由对应的中文名称
                    icon: item.meta.icon,//路由对应的icon图标
                    code: item.meta.code,//路由对应的权限code
                    children: item.children ? transMenu(item.children, `${parebtPath}${item.path}/`) : null,
                })),
            menu = transMenu(routes[0].children);
        if(!menu.length){//没有菜单权限
            next({ name: "login", replace: true });
        }
        next(vm => {
            if(!rightArr.includes(to.meta.code)){//当前url没权限就跳转到第一个菜单
                vm.$router.replace(menu[0].path);
            }
            vm.menuData = menu;
            vm.$store.commit("setPermission", rightArr);
        })
    }
};
</script>

<style lang="less" scoped>
.el-container {
    height: 100vh;
    .el-header,
    .el-footer {
        background-color: #c5c8ce;
        text-align: center;
        line-height: 60px;
    }
    .el-aside {
        background-color: #545c64;
        .el-menu{
            border-right: none;
        }
    }
    .el-main {
        background-color: #e9eef3;
        color: #333;
    }
}
</style>