<script>
    import footers from "./footer.vue"
    export default {
        data () {
            return {
                xmdata:[
                    {title:'初心-cxa1',lilu:'8.00',tian:'10',bfb:'2%',flag:true,qitou:'100',fangshi:'到期还本息'},
                    {title:'初心-cxa2',lilu:'12.00',tian:'100',bfb:'20%',flag:true,qitou:'1000',fangshi:'按月付息'},
                    {title:'初心-cxa3',lilu:'10.00',tian:'10',bfb:'5%',flag:false,qitou:'100',fangshi:'到期还本息'},
                    {title:'初心-cxa4',lilu:'12.00',tian:'100',bfb:'10%',flag:false,qitou:'1000',fangshi:'按月付息'},
                    {title:'初心-cxa5',lilu:'8.00',tian:'10',bfb:'30%',flag:false,qitou:'100',fangshi:'按月付息'},
                    {title:'初心-cxa6',lilu:'12.00',tian:'100',bfb:'20%',flag:false,qitou:'1000',fangshi:'到期还本息'},
                    {title:'初心-cxa7',lilu:'8.00',tian:'100',bfb:'10%',flag:false,qitou:'100',fangshi:'按月付息'}
                ],
                xkimgs:'../images/icon2_03.png',
                qian:'../images/icontouzi_03.png'
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
    <div class="thebox">
        <div class="navtop">
            投资
            <span>筛选</span>
        </div>
        <div class="fenye">
            <div>全部</div>
            <div>念鑫</div>
            <div>钱鑫</div>
            <div>安鑫</div>
        </div>
        <div class="con-list">
            <div class="con-xq" v-for="xmdata in xmdata">
                <p class="title">{{xmdata.title}}</p>
                <img :src="xkimgs" alt="" class="xkimgs" v-if="xmdata.flag" />
                <div class="con-xqs">
                    <div class="one">
                        <p class="p1"><span>{{xmdata.lilu}}</span>%</p>
                        <p class="p2">预计年化利息</p>
                    </div>
                    <div class="two">
                        <p class="p1"><span>{{xmdata.tian}}</span>天</p>
                        <p class="p2">投资期限</p>
                    </div>
                    <div class="three">
                        <div class="chart"></div>
                        <p>{{xmdata.bfb}}</p>
                    </div>
                </div>
                <div class="con-xqbtm">
                    <img :src="qian" alt="" class="qianimg" />
                    <p class="p1"><span>{{xmdata.qitou}}</span>元起投</p>
                    <p class="p2">{{xmdata.fangshi}}</p>
                </div>
            </div>
        </div>
        <footers></footers>
    </div>
</template>

<style lang="sass">
    .qianimg{
        width: .22rem;
        height: .22rem;
        float: left;
        margin-top: .18rem;
        margin-right: .15rem;
    }
    .con-xqbtm{
        width: 7.2rem;
        height: .65rem;
        line-height: .65rem;
        border-top: 1px solid #727272;
        .p1{
            font-size: .2rem;
            color: #727272;
            float: left;
        }
        .p2{
            font-size: .2rem;
            color: #727272;
            float: right;
        }
    }
    .con-list{
        width: 100%;
        margin-top: .15rem;
        .con-xqs{
            padding-top: .2rem;
            padding-bottom: .2rem;
            width: 7.2rem;
            div{
                float: left;
            }
            .one{
                width: 3rem;
                .p1{
                    font-size: .24rem;
                    color: #f09e38;
                    span{
                        font-size: .3rem;
                    }
                }
                .p2{
                    font-size: .2rem;
                    color: #727272;
                    margin-top: .18rem;
                }
            }
            .two{
                width: 2.8rem;
                .p1{
                    font-size: .24rem;
                    color: #000000;
                    span{
                        font-size: .3rem;
                    }
                }
                .p2{
                    font-size: .2rem;
                    color: #727272;
                    margin-top: .18rem;
                }
            }
            .three{
                position: relative;
                width: .82rem;
                .chart{
                    width: .82rem;
                    height: .82rem;
                    border: .04rem solid #727272;
                    border-radius: 50%;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                p{
                    font-size: .2rem;
                    color: #f09e38;
                    text-align: center;
                    line-height: .82rem;
                }
            }
        }
        .con-xqs:after{
            content:"";
            display:block;
            clear:both;
        }
        .con-xq{
            width: 100%;
            padding-left: .15rem;
            padding-right: .15rem;
            margin-bottom: .1rem;
            position: relative;
            background-color: #ffffff;
            .title{
                font-size: .24rem;
                color: #000000;
                padding-top: .2rem;
            }
            .xkimgs{
                width: .7rem;
                height: .7rem;
                position: absolute;
                right: 0;
                top: 0;
            }
        }
    }
    .fenye{
        width: 100%;
        margin-top: .15rem;
        display: table;
        background-color: #ffffff;
        div{
            width: 25%;
            display: table-cell;
            line-height: 1.28rem;
            border-bottom: .04rem solid #ffffff;
            font-size: .4rem;
            color: #727272;
            text-align: center;
        }
    }
    .navtop{
        width: 100%;
        height: .88rem;
        font-size: .48rem;
        color: #000000;
        line-height: .88rem;
        background-color: #ffffff;
        text-align: center;
        position: relative;
        span{
            font-size: .4rem;
            color: #727272;
            position: absolute;
            right: .2rem;
            top: 0;
            line-height: .88rem;
        }
    }
    .thebox{
        width: 100%;
        background-color: #f5f5f5;
    }
</style>
