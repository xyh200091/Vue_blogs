<template>
    <div id="classify">
        <div class="subpage_head">
            <div>分类管理</div>
            <span>文章管理 \ 分类管理</span>
        </div>
        <div class="classify_sort">
            <div class="classify_title">
                <span>分类管理</span>
                <button @click="AddClassify()">添加分类</button>
            </div>
            <div class="classify_content">
                <div class="classify_th">
                    <span>分类名</span>
                    <span style="border:0;">分类操作</span>
                </div>
                <ClassifyList ref="ClassifyList"></ClassifyList>
            </div>
        </div>
        <div class="classify_label">
            <div class="classify_title">
                <span>标签管理</span>
                <button @click="AddLabel()">添加标签</button>
            </div>
            <div class="classify_content">
                <div class="classify_th">
                    <span>标签名</span>
                    <span>标签颜色</span>
                    <span style="border:0;">标签操作</span>
                </div>
                <LabelList ref="LabelList"></LabelList>
            </div>
        </div>

        <div class="classify_add" v-show="this.add_show" hidefocus="true" tabindex="0">
            <span class="add_title">{{ this.add_title }}</span>
            <input type="text" class="add_name" v-bind:placeholder="add_intro" id="add_name" @blur="NameBlur()">
            <input type="color" class="add_color" v-show="this.label_color_show" id="add_color">
            <span class="error_text" v-show="this.error_text_show">{{ this.error_text }}</span>
            <button @click="AddEvent()">添加</button>
            <div @click="CloseAdd()" class="Closebtn">
            </div>
        </div>
    </div>
</template>

<script>
import ClassifyList from './ClassifyList.vue'
import LabelList from './LabelList.vue'
export default {
    name: "classify",
    data() {
        return {
            add_show: false,
            label_color_show: false,
            error_text_show: false,

            add_title: "添加分类",
            add_intro: "输入分类名称",

            error_text: '',
        }
    },
    components: {
        ClassifyList,
        LabelList,
    },
    methods: {
        AddClassify: function () {//点击添加分类事件
            this.add_show = true;
            this.add_title = "添加分类";
            this.add_intro = "输入分类名称";
        },
        AddLabel: function () {
            this.add_show = true;
            this.add_title = "添加标签";
            this.add_intro = "输入标签名称";
            this.label_color_show = true;
        },
        AddEvent: function () {
            //获取参数
            var Data = {};
            var add_name = document.getElementById('add_name');
            Data['add_name'] = add_name.value;
            if (add_name.value.length > 0) {
                if (this.label_color_show) {
                    Data['add_color'] = document.getElementById('add_color').value;
                }

                //发送请求保存数据
                if (!this.label_color_show) {
                    this.$http.post('/classify/add/', Data).then(response => {
                        if (response.data.code == 4000) {
                            this.$refs.ClassifyList.GetClassify();
                            add_name.value = '';
                            this.add_show = false;
                        } else if (response.data.code == 4100) {
                            this.error_text = response.data.info;
                            this.error_text_show = true;
                        } else if (response.data.code == 4201) {
                            this.error_text = response.data.info;
                            this.error_text_show = true;
                        }
                    }, error => {
                        this.error_text = "网络错误";
                        this.error_text_show = true;
                    })
                } else {
                    this.$http.post('/label/add/', Data).then(response => {
                        if (response.data.code == 4000) {
                            this.$refs.LabelList.GetLabel();
                            add_name.value = '';
                            this.add_show = false;
                        } else if (response.data.code == 4100) {
                            this.error_text = response.data.info;
                            this.error_text_show = true;
                        } else if (response.data.code == 4201) {
                            this.error_text = response.data.info;
                            this.error_text_show = true;
                        }
                    }, error => {
                        this.error_text = "网络错误";
                        this.error_text_show = true;
                    })
                }
            } else {
                this.error_text = "请先输入名称";
                this.error_text_show = true;
            }
        },
        NameBlur: function () {
            var add_name = document.getElementById('add_name');
            if (add_name.value.length > 0) {
                this.error_text_show = false;
            } else {
                this.error_text = "请先输入名称";
                this.error_text_show = true;
            }
        },
        CloseAdd: function () {
            this.add_show = false;
            this.label_color_show = false;
            this.error_text_show = false;
        }
    },
}
</script>

<style scoped>
@import url('../../../static/styles/Subpage.css');
@import url('../../../static/styles/Classify.css');
</style>