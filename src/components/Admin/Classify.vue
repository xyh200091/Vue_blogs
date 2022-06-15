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
                <ClassifyList></ClassifyList>
            </div>
        </div>
        <div class="classify_label">
            <div class="classify_title">
                <span>标签管理</span>
                <button>添加标签</button>
            </div>
            <div class="classify_content">
                <div class="classify_th">
                    <span>标签名</span>
                    <span>标签颜色</span>
                    <span style="border:0;">标签操作</span>
                </div>
                <div class="classify_td">
                    <div class="classify_tr">
                        <span>11111111</span>
                        <input type="color" name="" id="" value="#ff0000" class="label_color">
                        <div>
                            <button>修改</button>
                            <button>删除</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClassifyList from './ClassifyList.vue'
export default {
    name: "classify",
    data() {
        return {

        }
    },
    components: {
        ClassifyList,
    },
    methods: {
    },
}
</script>

<style scoped>
@import url('../../../static/styles/Subpage.css');
@import url('../../../static/styles/Classify.css');
</style>