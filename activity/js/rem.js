function resize(){
    var dw=750;
    var cw=document.documentElement.clientWidth;
    var rem=cw/dw*100;
    // if(rem<=62){
    //     rem=62;
    // }
    document.documentElement.style.fontSize=rem+"px";
}
resize();
window.onresize = function(){
    resize();
};
