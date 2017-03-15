<script>
    export default {
        data () {
            return {
                biaojiimg:'../images/icon2_14.png'
            }
        }
    }
</script>

<template>
    <div class="biaoji">
        <img :src="biaojiimg" alt="" />
        <span>上市公司背景，专业理财</span>
    </div>
</template>

<style lang="sass">
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
</style>
