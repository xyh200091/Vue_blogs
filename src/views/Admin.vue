<template>
    <div id="admin">
        <!-- 头部 -->
        <div class="head">
            <span class="head_title">博客后台管理</span>
            <button class="head_btn" @click="OutLogin">退出登录</button>
        </div>
        <!-- 主体 -->
        <div>
            <!-- 目录 -->
            <div></div>
            <!-- 内容 -->
            <div></div>
        </div>
        <!-- 登录 -->
        <login ref="login"></login>
    </div>
</template>

<script>
import login from '@/components/Admin/Login.vue'

export default {
    name: 'admin',
    components: {
        login,
    },
    data() {
        return {
        }
    },
    methods: {
        OutLogin() {
            var time = Date.parse(new Date()) / 1000;
            this.$http.get('login/out', {
                params: {
                    'time': time
                }
            }).then((response) => {
                this.$refs.login.verify_login();
            }, (error) => {
            }
            )
        }

    },
    mounted() {

    },
}
</script>

<style scoped>
@import './../../static/css/Admin.css'
</style>