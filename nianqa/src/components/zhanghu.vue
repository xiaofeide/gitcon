<script>
    import footers from "./footer.vue"
    export default {
        data () {
            return {
                bg1:'../images/IMG_0160_01.png',
                yue:'2.83',
                touzizhong:'1000',
                jingzichan:'10000',
                daishouyi:'50',
                zongshouyi:'200'
            }
        },
        methods:{

        },
        components:{
            footers
        }
    }
</script>

<template>
    <div class="zh-tops">
        <img :src="bg1" alt="" class="bg1">
        <div class="myicon"></div>
        <div class="yue">
                <p class="p1">{{yue}}</p>
                <p class="p2">可用余额</p>
            </div>
        <div class="yue-xq">
                <div class="yue-left">
                    <div class="left-con">
                        <p class="p1">{{touzizhong}}</p>
                        <p class="p2">当前投资中（元）</p>
                    </div>
                    <div class="left-con">
                        <p class="p1">{{jingzichan}}</p>
                        <p class="p2">账户净资产（元）</p>
                    </div>
                </div>
                <div class="yue-left">
                    <div class="left-con">
                        <p class="p1">{{daishouyi}}</p>
                        <p class="p2">当前投资中（元）</p>
                    </div>
                    <div class="left-con">
                        <p class="p1">{{zongshouyi}}</p>
                        <p class="p2">账户净资产（元）</p>
                    </div>
                </div>
        </div>
    </div>
    <footers></footers>
</template>

<style lang="sass">
    .yue-xq{
        padding-top: .2rem;
        position: relative;
        z-index: 99;
        width: 100%;
        .yue-left{
            width: 50%;
            float: left;
            .left-con{
                width: 100%;
                text-align: center;
                margin-bottom: .2rem;
                .p1{
                    font-size: .24rem;
                    color: #ffffff;
                }
                .p2{
                    font-size: .24rem;
                    color: #727272;
                    line-height: .3rem;
                }
            }
        }
        .yue-left:first-child{
            border-right: 1px solid #727272;
        }
    }
    .yue-xq:after{
        content: '';
        display: block;
        clear: both;
    }
    .yue{
        width: 100%;
        height: 1.5rem;
        position: relative;
        z-index: 99;
        text-align: center;
        .p1{
            font-size: .5rem;
            color: #ffffff;
        }
        .p2{
            font-size: .24rem;
            color: #727272;
            line-height: .3rem;
        }
    }
    .myicon{
        width: .5rem;
        height: .5rem;
        background-color: #727272;
        position: absolute;
        left: .15rem;
        top: .2rem;
    }
    .zh-tops{
        width: 100%;
        height: 5.6rem;
        padding-top: .85rem;
        position: relative;
    }
    .bg1{
        width: 100%;
        height: 5.6rem;
        position: absolute;
        left: 0;
        top: 0;
    }
</style>
