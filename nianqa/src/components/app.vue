<script>
    import biaoji from "./biaoji.vue"
    import footers from "./footer.vue"
    export default {
        data () {
            return {
                banimg:'images/IMG_0147_02.jpg',
                imgHd: [
                    {url:'../images/icon_03.png',text:'热门活动'},
                    {url:'../images/icon_05.png',text:'新客专享'},
                    {url:'../images/icon_07.png',text:'安全保障'},
                    {url:'../images/icon_09.png',text:'邀请好友'}
                ],
                tuijian:[
                    {title:'初心1-CXB（新手专享）',shouyi:'12',qixian:'28天',qitou:'100元',xkurl:'../images/icon2_03.png',xkflag:true,qximg:'../images/icon2_07.png',qtimg:'../images/icon2_09.png'},
                    {title:'初心2-CXB（新手专享）',shouyi:'15',qixian:'90天',qitou:'1000元',xkurl:'../images/icon2_03.png',xkflag:false,qximg:'../images/icon2_07.png',qtimg:'../images/icon2_09.png'}
                ],
                biaojiimg:'../images/icon2_14.png'
            }
        },
        methods :{
            golist (){
                this.$route.router.go({name:"list"});
            }
        },
        components:{
            biaoji,footers
        }
    }
</script>

<template>
    <div class="banner">
        <img :src="banimg" alt="" />
    </div>
    <div class="nqa-hdbox">
        <div class="nqa-hd" v-for="hdlist in imgHd">
            <img :src="hdlist.url" alt="" />
            <p class="hd-text">{{hdlist.text}}</p>
        </div>
    </div>
    <div class="nqa-tuijian" v-for="xklist in tuijian">
        <h5>{{xklist.title}}</h5>
        <img :src="xklist.xkurl" alt="" class="fix-xk" />
        <div class="chart-box">
            <div class="charts">
                <div class="charts-cilp"></div>
                <div class="chart-con">
                    <p class="p1"><span>{{xklist.shouyi}}</span>.00%</p>
                    <p class="p2">预计年化收益率</p>
                    <button type="button" class="liji">立即投资</button>
                </div>
            </div>
        </div>
        <div class="tj-jieshao">
            <div class="jieshao-xq">
                <img :src="xklist.qximg" alt="" class="jx-img" />
                <div class="jx-right">
                    <p class="p1">{{xklist.qixian}}</p>
                    <p class="p2">投资期限</p>
                </div>
            </div>
            <div class="jieshao-xq">
                <img :src="xklist.qtimg" alt="" class="jx-img" />
                <div class="jx-right">
                    <p class="p1">{{xklist.qitou}}</p>
                    <p class="p2">起投金额</p>
                </div>
            </div>
            <div style="width: 100%;height: 0;clear: both"></div>
        </div>
        <button type="button" class="more">查看更多</button>
    </div>
    <biaoji></biaoji>
    <footers></footers>
</template>

<style lang="sass">
    $qwe:#f5f5f5;
    $color1:#ef9121;
    .biaoji{
        width: 100%;
        line-height: 0;
        padding-bottom: .23rem;
        text-align:center;
        img{
            width: .26rem;
            height: .24rem;
        }
        span{
            font-size: .24rem;
            color: #2c2b2b;
            line-height: .24rem;
        }
    }
    .more{
        width: 3.26rem;
        height: .72rem;
        display: block;
        margin: 0 auto;
        background-color: #FE862C;
        border-width: 2px;
        border-color: #FEC02A;
        border-style: solid;
        border-radius: .36rem;
        font-size: .28rem;
        color: #ffffff;
    }
    .tj-jieshao{
        width: 100%;
        border-top: 1px solid #dbdbdb;
        padding-top: .2rem;
        padding-bottom:.2rem;
        .jieshao-xq{
            width: 3.55rem;
            float:left;
            .jx-img{
                width: .3rem;
                height: .3rem;
                float: left;
                margin-left: .98rem;
                margin-top: .2rem;
                margin-right: .2rem;
            }
            .jx-right{
                float:left;
                .p1{
                    font-size: 24px;
                    color: #4F4F4F;
                }
                .p2{
                    font-size: 24px;
                    color: #9F9F9F;
                }
            }
        }
    }
    .jieshao-xq:first-child{
        border-right: 1px solid #dbdbdb;
    }
    .nqa-tuijian{
        width: 7.2rem;
        margin: 0 auto;
        border-radius: .2rem;
        border-width: 1px;
        border-color: #ecc28f;
        background-color: #ffffff;
        margin-bottom: .2rem;
        position: relative;
        padding-bottom:.13rem;
        h5{
            font-size: .26rem;
            padding-top: .2rem;
            padding-left: .2rem;
        }
        .fix-xk{
            width: .7rem;
            height: .7rem;
            position: absolute;
            right: 0;
            top: 0;
        }
        .chart-box{
            width: 100%;
            padding-bottom: .15rem;
            padding-top:.15rem;
            .charts{
                width: 2.8rem;
                height: 2.8rem;
                margin: 0 auto;
                border-radius: 50%;
                border: .1rem solid #dbdbdb;
                display: table;
            }
        }
        .chart-con{
            width: 100%;
            text-align:center;
            display:table-cell;
            vertical-align: middle;
            .p1{
                font-size: .2rem;
                color: #ef9121;
                span{
                    font-size: .38rem;
                }
            }
            .p2{
                font-size: .2rem;
                color: #b8b8b8;
                line-height: .6rem;
            }
            .liji{
                width: 2.05rem;
                padding-top: .25rem;
                border: 0 none;
                border-top: 1px solid #ef9121;
                background-color: transparent;
                font-size: .28rem;
                color: #ef9121;
                display: block;
                margin: 0 auto;
            }
        }
    }
    .nqa-hd{
        width: 1.8rem;
        vertical-align: middle;
        display:table-cell;
        img{
            width: .95rem;
            height: .67rem;
            display: block;
            margin: 0 auto;
        }
    }
    .hd-text{
        font-size: .22rem;
        color: #5a5a5a;
        text-align: center;
    }
    .nqa-hdbox{
        width: 100%;
        height: 1.45rem;
        background-color: #ffffff;
        margin-top: .2rem;
        margin-bottom: .2rem;
        padding-left: .15rem;
        padding-right: .15rem;
        display: table;
    }
    .banner{
        width: 7.5rem;
        height: 3.75rem;
        overflow: hidden;
    }
    body{
        background-color: $qwe;
    }
    h1{
        background-color: blue;
        color: red;
    }
    h2{
        background-color:purple ;
    }
    a{
        font-size:34px;
        color:black;
    }
</style>
