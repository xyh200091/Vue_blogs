<template>
    <div id="admin">
        <!-- 头部 -->
        <div class="head">
            <span>博客后台管理</span>
            <button>退出登录</button>
        </div>
        <!-- 主体 -->
        <div>
            <!-- 目录 -->
            <div></div>
            <!-- 内容 -->
            <div></div>
        </div>
        <!-- 登录 -->
        <login></login>
    </div>
</template>

<script>
import login from '@/components/Admin/Login.vue'


export default {
    name: 'admin',
    components: {
        login,
    },
    data: {

    },
    methods: {

    },
    mounted() {

    },
}
</script>

<style scoped>
@import './../../static/css/Admin.css'
</style>