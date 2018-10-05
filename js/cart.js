new Vue({
        el: '#app',
        data:{
            message: '',
            selectAllFlag: false,
            itemList: []
        },
        mounted: function(){
            this.$nextTick(function(){
                this.cartView();
            });
        },
        methods:{
            cartView: function(){
                var _this = this;
                this.$http.get("http://127.0.0.1:8081/data/cart.json").then(function(resoult){
                    _this.message = resoult.body.message;
                    _this.itemList = resoult.body.itemList;
                });
            },
            selectOne:function (item) {
                if(typeof  item.checked=='undefined'){
                    Vue.set(item,"checked",true);
                }else{
                    item.checked=!item.checked;
                }
            },
            selectAll:function(temp){
                this.selectAllFlag = temp;
                var _this = this;
                this.itemList.forEach(item => {
                    if(typeof  item.checked=='undefined'){
                        Vue.set(item,"checked",this.selectAllFlag);
                    }else{
                        item.checked=this.selectAllFlag;
                    }
                });
            }
        },
        filters: {
            filterMoney: function(money){
                return "￥"+money+"元";
            }
        }
    }
);