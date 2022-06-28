<template>
    <!-- 登录 -->
    <div class="login" v-show="login_box_show">
        <div class="login_beg">
            <span class="login_title">登录后台</span>
            <input type="text" placeholder="输入账号" class="login_user" id="username" @blur="varify_username()">
            <input type="password" placeholder="输入密码" class="login_pwd" id="password" @blur="varify_password()">
            <div class="code_box">
                <input type="text" placeholder="验证码" class="login_code" id="img_code" @blur="varify_img_code()">
                <img :src="code_img_path" class="code_img" id="code_img" @click="alter_code_img_path()">
            </div>
            <span class="error_hint">{{ error_hint }}</span>
            <button class="login_btn" @click="login_request()">登录</button>
        </div>
    </div>
</template>

<script>
import md5 from 'js-md5'
import axios from 'axios'
export default {
    name: 'admin',
    components: {
    },
    data() {
        return {
            // 图片验证码
            code_img_path: 'get/login/code/img',
            // 错误提示
            error_hint: "",
            // 登录框是否显示
            login_box_show: true,
        }
    },
    methods: {
        alter_code_img_path() {
            // 1、获取时间戳
            // 2、路径添加时间戳
            var time = Date.parse(new Date()) / 1000;
            this.code_img_path = "get/login/code/img?time=" + time;
        },
        login_request() {
            // 1、验证数据
            // 2、数据加密
            // 3、请求发送
            var username = this.varify_username();
            if (username) {
                var password = this.varify_password();
                if (password) {
                    var img_code = this.varify_img_code();
                    if (img_code) {
                        password = md5(password);
                        var time = Date.parse(new Date()) / 1000;
                        this.$http.post(
                            'login/admin', {
                            'username': username,
                            'password': password,
                            'img_code': img_code,
                            'time': time
                        }, { emulateJSON: true }
                        ).then((response) => {
                            if (response.data.code == 4000) {
                                this.login_box_show = false;
                            } else if (response.data.code == 4300) {
                                this.error_hint = response.data.info;
                            } else if (response.data.code == 4301) {
                                this.error_hint = response.data.info;
                            }
                            this.alter_code_img_path();
                            document.getElementById('password').value = '';
                            document.getElementById('img_code').value = '';
                        }, (error) => {
                            this.error_hint = "登录失败!!!"
                            this.alter_code_img_path();
                        }
                        )
                    }
                }
            }
        },
        varify_username() {
            var username = document.getElementById('username').value;
            var re = /^[a-zA-Z][0-9a-zA-Z]{4,19}$/;
            if (re.test(username)) {
                this.error_hint = "";
                return username;
            } else {
                this.error_hint = "请输入5~20位账号!!!";
            }
        },
        varify_password() {
            var password = document.getElementById('password').value;
            var re = /^[0-9a-zA-Z._@]{8,20}$/;
            if (re.test(password)) {
                this.error_hint = "";
                return password;
            } else {
                this.error_hint = "请输入8~20位密码!!!";
            }
        },
        varify_img_code() {
            var img_code = document.getElementById('img_code').value;
            var re = /^[0-9a-zA-Z]{4}$/;
            if (re.test(img_code)) {
                this.error_hint = "";
                return img_code;
            } else {
                this.error_hint = "请输入4位验证码!!!";
            }
        },
        verify_login() {
            // 1、获取cookie
            // 2、验证cookie
            // 3、反应登录
            this.$http.get('login/verify').then((response) => {
                if (response.data.code == 4000) {
                    this.login_box_show = false;
                } else {
                    this.login_box_show = true;
                }
            }, (error) => {
                this.login_box_show = true;
            })
        }
    },
    mounted() {
        this.verify_login();
        this.alter_code_img_path();
    },
}
</script>

<style scoped>
@import '../../../static/css/Admin_login.css'
</style>