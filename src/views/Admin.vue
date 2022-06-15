<template>
    <div id="admin">
        <div class="admin_head">
            <div class="admin_title">
                <span>后台管理系统</span>
            </div>
            <div class="admin_user">
                <button>退出登录</button>
            </div>
        </div>
        <div class="admin_catalog">
            <div>
                <span>系统管理</span>
                <div @click="ContentCut(1)"
                    :class="[is_admin_btn_color[0] ? 'admin_btn_stylr_0' : 'admin_btn_stylr_1']">
                    博客大数据</div>
                <div @click="ContentCut(2)"
                    :class="[is_admin_btn_color[1] ? 'admin_btn_stylr_0' : 'admin_btn_stylr_1']">
                    博客管理</div>
                <div @click="ContentCut(3)"
                    :class="[is_admin_btn_color[2] ? 'admin_btn_stylr_0' : 'admin_btn_stylr_1']">
                    友链管理</div>
            </div>
            <div>
                <span>文章管理</span>
                <div @click="ContentCut(4)"
                    :class="[is_admin_btn_color[3] ? 'admin_btn_stylr_0' : 'admin_btn_stylr_1']">
                    文章发布</div>
                <div @click="ContentCut(5)"
                    :class="[is_admin_btn_color[4] ? 'admin_btn_stylr_0' : 'admin_btn_stylr_1']">
                    文章列表</div>
                <div @click="ContentCut(6)"
                    :class="[is_admin_btn_color[5] ? 'admin_btn_stylr_0' : 'admin_btn_stylr_1']">
                    分类管理</div>
                <div @click="ContentCut(7)"
                    :class="[is_admin_btn_color[6] ? 'admin_btn_stylr_0' : 'admin_btn_stylr_1']">
                    评论管理</div>
                <div @click="ContentCut(8)"
                    :class="[is_admin_btn_color[7] ? 'admin_btn_stylr_0' : 'admin_btn_stylr_1']">
                    留言管理</div>
            </div>
        </div>
        <div class="admin_content">
            <component :is="admin_content"></component>
        </div>
    </div>
</template>

<script>
import ArticleList from '../components/Admin/ArticleList.vue'//文章列表
import BigData from '../components/Admin/BigData.vue'//大数据管理
import Classify from '../components/Admin/Classify.vue'//分类管理
import Comment from '../components/Admin/Comment.vue'//评论管理
import EtPost from '../components/Admin/EtPost.vue'//文章发布
import Links from '../components/Admin/Links.vue'//友链管理
import Message from '../components/Admin/Message.vue'//留言管理
import System from '../components/Admin/System.vue'//博客管理
// import Vue from 'vue'

export default {
    name: "admin",
    data() {
        return {
            admin_page_num: 1,//#后端页面内容编号
            admin_content: 'BigData',//后端页面内容
            is_admin_btn_color: [
                true, false, false, false, false, false, false, false
            ]
        }
    },
    components: {
        ArticleList,
        BigData,
        Classify,
        Comment,
        EtPost,
        Links,
        Message,
        System
    },
    methods: {
        ContentCut: function (page) {//切换页面事件
            if (this.admin_page_num != page) {
                this.admin_page_num = page;
                switch (page) {
                    case 1:
                        this.admin_content = "BigData";
                        break;
                    case 2:
                        this.admin_content = "System";
                        break;
                    case 3:
                        this.admin_content = "Links";
                        break;
                    case 4:
                        this.admin_content = "EtPost";
                        break;
                    case 5:
                        this.admin_content = "ArticleList";
                        break;
                    case 6:
                        this.admin_content = "Classify";
                        break;
                    case 7:
                        this.admin_content = "Comment";
                        break;
                    case 8:
                        this.admin_content = "Message";
                        break;
                }
                this.is_admin_btn_color = [
                    false, false, false, false, false, false, false, false
                ];
                this.is_admin_btn_color[page - 1] = true;
            }
        },
    },
    mounted() {
    }
}

</script>

<style scoped>
@import "../../static/styles/Admin.css";
</style>

