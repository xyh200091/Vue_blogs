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
        <div class="login">
            <div class="login_beg">
                <span class="login_title">登录</span>
                <input type="password" placeholder="输入密码" class="login_pwd">
                <div class="code_box">
                    <input type="text" placeholder="验证码" class="login_code">
                    <img src="" alt="" class="code_img">
                </div>
                <span class="event_code">错误提示</span>
                <button class="login_btn">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'admin',
    components: {

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