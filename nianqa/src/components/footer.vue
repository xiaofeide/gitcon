<script>
    export default {
        data () {
            return {
                fotda1: {name:'首页',img1:'../images/icon2_18.png',img2:'../images/icon22_18.png'},
                fotda2: {name:'投资',img1:'../images/icon2_21.png',img2:'../images/icon22_21.png'},
                fotda3: {name:'账户',img1:'../images/icon2_23.png',img2:'../images/icon22_23.png'},
                fotda4: {name:'发现',img1:'../images/icon2_25.png',img2:'../images/icon22_25.png'},
                flag:true
            }
        },
        methods:{

        }
    }
</script>

<template>
    <div class="footer">
        <div class="footer-s" v-link="{ name: 'app' }">
            <img :src="fotda1.img1" alt="" v-if="flag">
            <img :src="fotda1.img2" alt="" v-if="!flag">
            <p>{{fotda1.name}}</p>
        </div>
        <div class="footer-s" v-link="{ name: 'touzi' }">
            <img :src="fotda2.img1" alt="" v-if="flag">
            <img :src="fotda2.img2" alt="" v-if="!flag">
            <p>{{fotda2.name}}</p>
        </div>
        <div class="footer-s" v-link="{ name: 'zhanghu' }">
            <img :src="fotda3.img1" alt="" v-if="flag">
            <img :src="fotda3.img2" alt="" v-if="!flag">
            <p>{{fotda3.name}}</p>
        </div>
        <div class="footer-s" v-link="{ name: 'faxian' }">
            <img :src="fotda4.img1" alt="" v-if="flag">
            <img :src="fotda4.img2" alt="" v-if="!flag">
            <p>{{fotda4.name}}</p>
        </div>
    </div>
</template>

<style lang="sass">
    .footer{
        width: 100%;
        height: .9rem;
        border-top: .02rem solid #d3d3d3;
        background-color: #ffffff;
        display: table;
        position: fixed;
        left: 0;
        bottom: 0;
        .footer-s{
            width: 25%;
            display: table-cell;
            vertical-align: middle;
            line-height: 0;
            text-align: center;
            img{
                width: .44rem;
                height: .39rem;
            }
            p{
                font-size: .2rem;
                line-height: .3rem;
            }
            p.red{
                color: red;
            }
            p.blue{
                color: blue;
            }
        }
    }
</style>
