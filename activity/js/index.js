/**
 * Created by xiaofei on 2017/4/20.
 */
$(function(){
    var thepage=[
        ["nqa-log","wenzi1","wenzi2","bg1","bg2","bg3","nqa-touzi","nqa-onelis","nqa-kefu"],
        ["nqa-log","decorate1","decorate2","protect","label","page-earnings p","page-earnings img","nqa-touzi"],
        ["nqa-log","page3-title .title1","page3-title .title2","page3-title p","page3-gift .decorate1","page3-gift .decorate2","page3-gift .decorate3","page3-gift .decorate4","page3-get .get-gift1","page3-get .get-gift2","page3-get .get-gift3","page3-get .get-gift4","page3-get .get-gift5","page3-get .get-gift6","page3-get a"]
        ];
    var theanimate=[
        ["flipInX","slideInLeft","slideInRight","bounceInDown","bounceInDown","bounceInDown","zoomIn","bounceInLeft","fadeInUp"],
        ["flipInX","fadeInDown","fadeInUp","bounceIn","rotateInDownLeft","lightSpeedIn","lightSpeedIn","zoomIn"],
        ["flipInX","fadeInLeftBig","fadeInRightBig","fadeInUp","fadeInDownBig","fadeInDownBig","fadeInDownBig","rotateIn","fadeInDown","fadeInRightBig","fadeInRightBig","fadeInUp","fadeInLeftBig","fadeInLeftBig","bounceIn"]
    ];
    addClassed(thepage[0],theanimate[0],0);
    function addClassed (arreys,arreys2,index) {
        for(var i=0;i<arreys.length;i++){
            $(".section:eq("+index+") ."+arreys[i]).addClass(arreys2[i]);
        }
    }
    function removeClassed (arreys,arreys2,index) {
        for(var i=0;i<arreys.length;i++){
            $(".section:eq("+index+") ."+arreys[i]).removeClass(arreys2[i]);
        }
    }
    $('#dowebok').fullpage({
        verticalCentered:false,
        scrollOverflow:true,
        continuousVertical:false,
        afterLoad:function (anchorLink,index) {

        },
        onLeave:function (index,nextindex,obj) {
            addClassed(thepage[nextindex-1],theanimate[nextindex-1],nextindex-1);
            removeClassed(thepage[index-1],theanimate[index-1],index-1);
        }
    });
    $(".nqa-music .img1").click(function () {
        if($(".nqa-music .img1").attr("data-type")==1){
            $(".nqa-music .img1").attr("data-type","0");
            $(".nqa-music .img1").removeClass("img1s").attr("src","images/nianqa_05-no.png");
            $("audio")[0].pause();
        }else{
            $(".nqa-music .img1").attr("data-type","1");
            $(".nqa-music .img1").addClass("img1s").attr("src","images/nianqa_05.png");
            $("audio")[0].play();
        }
    });
    $(".nqa-jt").click(function () {
        $('#dowebok').fullpage.moveSectionDown();
    })
});