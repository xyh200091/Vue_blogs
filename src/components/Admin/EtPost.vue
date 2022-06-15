<template>
    <div id="etpost">
        <div class="subpage_head">
            <div>文章发布</div>
            <span>文章管理 \ 文章发布</span>
        </div>
        <div class="etpost_content">
            <mavon-editor v-model="content" ref="md" @change="change" @imgAdd="imgAdd"></mavon-editor>
        </div>
    </div>
</template>

<script>
import {mavonEditor} from "mavon-editor"
import "mavon-editor/dist/css/index.css"
export default{
    name:"etpost",
    components:{
        mavonEditor,
    }
}
</script>

<style scoped>
@import url('../../../static/styles/Subpage.css');
@import url('../../../static/styles/EtPost.css');
</style>