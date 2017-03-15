<script>
    import footers from "./footer.vue"
    export default {
        data () {
            return {
                faxian:['关于念钱安','新人礼遇','项目安全解读','现实活动']
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
    <div class="faxian" v-for="faxians in faxian">{{faxians}}</div>
    <footers></footers>
</template>

<style lang="sass">
    .faxian{
        width: 100%;
        height: 4rem;
        font-size: .4rem;
        color: #ffffff;
        text-align: center;
        line-height: 4rem;
        margin-bottom: .15rem;
        background-color: #0b97c4;
    }
</style>
