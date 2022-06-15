<template>
    <div class="classify_td" id="classify_td">
        <div class="classify_tr" v-for="classify in Classify_list">
            <span id="classify_name">{{ classify.Classify_Name }}</span>
            <div>
                <button>修改</button>
                <button @click="DelClassify(classify.Classify_Id)">删除</button>
            </div>
        </div>
        <div class="classify_null" v-show="this.Classify_show">
            <div>
                {{ this.Classify_hint }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ClassifyList",
    data() {
        return {
            Classify_list: [],
            Classify_show: false,
            Classify_hint: "请先添加分组~~~",
            Classify_add_show:false,
        }
    },
    methods: {
        GetClassify: function () {//获取列表数据
            this.$http.get('/classify/get/')
                .then(response => {
                    if (response.data.code == 4000) {//正常获取到数据
                        this.Classify_list = response.data.data;//获取data数据
                        this.Classify_show = false;
                    } else if (response.data.code == 4100) {//获取数据为空
                        this.Classify_hint = "请先添加分组~~~"
                        this.Classify_show = true;
                    }
                }, error => {//请求失败
                    this.Classify_hint = "网络加载失败~~~";
                    this.Classify_show = true;
                })
        },
        DelClassify: function (id) {//删除分类
            this.$http.post('/classify/del/', {
                classify_Id: id
            }).then(response => {
                if (response.data.code == 4000) {
                    this.GetClassify();//删除成功，刷新分类列表
                } else if (response.data.code == 4200) {//数据库操作失败
                    this.GetClassify();//删除失败，刷新
                    console.log('数据库操作失败!!!');
                }
            }, error => {
                this.GetClassify();//请求失败，刷新列表
            })
        }
    },
    created: function () {
        this.GetClassify();//初始化执行获取分类列表
    }
}
</script>

<style scoped>
.classify_td {
    display: flex;
    flex-direction: column;
    height: 25vw;
    overflow: auto;
    border-bottom-left-radius: 2vw;
}

.classify_tr{
    display: flex;
    height: 3vw;
    border-top: 1px solid rgb(162, 162, 162);
}

.classify_tr>*{
    flex: 1;
}

.classify_tr>span {
    font-size: 1.5vw;
    line-height: 2vw;
    color: rgb(51, 94, 153);
    text-align: center;
    line-height: 3vw;
}

.classify_tr>.label_color {
    width: 5vw;
    display: block;
    margin: auto 0;
}

.classify_tr>div {
    display: flex;
    justify-content: space-evenly;
}

.classify_tr>div>button {
    width: 5vw;
    border-radius: 0.2vw;
    border: 1px solid rgb(188, 188, 188);
    height: 2vw;
    margin: auto 0;
}

.classify_null {
    display: flex;
    justify-content: center;
    margin: auto 0;
}
</style>