<template>
    <div class="label_td" id="label_td">
        <div class="label_tr" v-for="label in label_list">
            <span>{{label.Label_Name}}</span>
            <div class="color_show">
                <div :style="{ background:label.Label_Color}"></div>
            </div>
            <div class="label_btn">
                <button>修改</button>
                <button @click="DelLabel(label.Label_Id)">删除</button>
            </div>
        </div>
        <div class="label_null" v-show="this.label_show">
            <div>
                {{ this.label_hint }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LabelList",
    data() {
        return {
            label_list: [],
            label_show: false,
            label_hint: "请先添加分类~~~",
            label_add_show: false,
        }
    },
    methods: {
        GetLabel: function () {//获取列表数据
            this.$http.get('/label/get/')
                .then(response => {
                    if (response.data.code == 4000) {//正常获取到数据
                        this.label_list = response.data.data;//获取data数据
                        this.label_show = false;
                    } else if (response.data.code == 4100) {//获取数据为空
                        this.label_hint = "请先添加分类~~~"
                        this.label_show = true;
                    }
                }, error => {//请求失败
                    this.label_hint = "网络加载失败~~~";
                    this.label_show = true;
                })
        },
        DelLabel: function (id) {//删除分类
            console.log(1);
            this.$http.post('/label/del/', {
                label_Id: id
            }).then(response => {
                if (response.data.code == 4000) {
                    this.GetLabel();//删除成功，刷新分类列表
                } else if (response.data.code == 4200) {//数据库操作失败
                    this.GetLabel();//删除失败，刷新
                    console.log('数据库操作失败!!!');
                }
            }, error => {
                this.GetClassify();//请求失败，刷新列表
            })
        }
    },
    created: function () {
        this.GetLabel();
    }
}
</script>

<style scoped>
.label_td {
    display: flex;
    flex-direction: column;
    height: 25vw;
    overflow: auto;
    border-bottom-left-radius: 2vw;
}
.label_tr{
    display: flex;
    height: 3vw;
    border-top: 1px solid rgb(162, 162, 162);
}

.label_tr>*{
    flex: 1;
}

.label_tr>span{
    text-align: center;
    color: rgb(51, 94, 153);
}

.color_show{
    display: flex;
    justify-content: center;
}
.color_show>div{
    width: 5vw;
    height: 1.5vw;
    /* background-color: red; */
    margin: auto 0;
    box-shadow: 0 0 0.1vw 0.1vw #000;
}
.label_btn{
    display: flex;
    justify-content: space-evenly;
}
.label_btn>button{
    width: 5vw;
    border-radius: 0.2vw;
    border: 1px solid rgb(188, 188, 188);
    height: 2vw;
    margin: auto 0;
}

.label_null {
    display: flex;
    justify-content: center;
    margin: auto 0;
}
</style>