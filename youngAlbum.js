/**
 * Created by ASUS on 2019/3/25.
 */
/*定义变量*/
var windowClientWidth=document.documentElement.clientWidth||document.body.clientWidth;
var windowClientHeight=document.documentElement.clientHeight||document.body.clientHeight;
var startX=0;
var startY=0;
var endX=0;
var endY=0;
var lastRanBacNum=0;
var songArr=["幸福的时光像流沙","一点一点的蜕变,变成色彩斑斓的梦幻季节","实现的等待,初心不改",
    "那些温柔清风,最简单的守候","为青春而歌舞,学会勇敢领悟",
    "光阴似箭,初心不移,记忆点滴写进纪念册好好装进行李",
    "昨天藏在照片里,全部是青涩雨季","相遇是最美的风景,感谢你陪我同行","明天与阳光紧紧相拥,摇曳在青春里与时光邂逅"];
/*var w1=120;
 var h1=84;
 var n1=0;
 var w2=60;
 var h2=80;
 var n2=0;*/
var timer=null;
var photo8para1=0;
var photo8Timer=null;
/*var timer2=null;
 var timer3=null;
 var timer4=null;
 var timer5=null;*/
/*获取元素*/
var oBody=document.getElementsByTagName("body")[0];
var obac=document.getElementById("bac");
var oStarEff=document.getElementById("starEff");
var oDiv=document.getElementsByClassName("divBox");
/*设置第五版，5,6,7张图片的大小、位置*/
with(oDiv[4].children[0].style){
    width=windowClientWidth*0.8+"px";
    height=windowClientWidth*0.8*0.7+"px";
    top=0;
    left=0;
    zIndex=6;
}
with(oDiv[4].children[1].style){
    width=windowClientWidth*0.95*0.75+"px";
    height=windowClientWidth*0.95+"px";
    left=Math.floor(windowClientWidth/2)-Math.floor(windowClientWidth*0.95*0.75/2)+"px";
    top=Math.floor(windowClientHeight/2)-Math.floor(windowClientWidth*0.95/2)+"px";
    zIndex=7;
}
with(oDiv[4].children[2].style){
    width=windowClientWidth*0.8+"px";
    height=windowClientWidth*0.8*0.7+"px";
    top=windowClientHeight-(windowClientWidth*0.8*0.7)+"px";
    left=windowClientWidth-(windowClientWidth*0.8)+"px";
    zIndex=8;
}
/*设置第五版，8,9,10,11张图片的大小、位置*/
with(oDiv[5].children[0].style){
    width=windowClientWidth*0.8+"px";
    height=windowClientWidth*0.8*0.7+"px";
    top=0-windowClientWidth*0.8*0.7*0.2;
    left=0;
}
with(oDiv[5].children[1].style){
    width=windowClientWidth*0.8+"px";
    height=windowClientWidth*0.8*0.7+"px";
    left=windowClientWidth+"px";
    top=windowClientWidth*0.8*0.7-windowClientWidth*0.8*0.7*0.2+"px";
}
with(oDiv[5].children[2].style){
    width=windowClientWidth*0.8+"px";
    height=windowClientWidth*0.8*0.7+"px";
    top=windowClientWidth*0.8*0.7*2-windowClientWidth*0.8*0.7*0.4+"px";
    left=-windowClientWidth*0.8+"px";

}
with(oDiv[5].children[3].style){
    width=windowClientWidth*0.8+"px";
    height=windowClientWidth*0.8*0.7+"px";
    top=windowClientHeight-(windowClientWidth*0.8*0.7)+"px";
    left=windowClientWidth-(windowClientWidth*0.8)+"px";
}
/*设置body宽高*/
oBody.style.width=windowClientWidth+"px";
oBody.style.height=windowClientHeight+"px";
/*设置背景宽高*/
obac.style.width=windowClientWidth+"px";
obac.style.height=windowClientHeight+"px";
/*设置背景两张子图片宽高*/
obac.children[0].style.width=100+"%";
obac.children[0].style.height=100+"%";
obac.children[1].style.width=100+"%";
obac.children[1].style.height=100+"%";
/*设置up、down*/
$(".slideUpDown").css({
    width:windowClientWidth/5+"px",
    height:windowClientWidth/5+"px",
    position:"absolute",
    top:windowClientHeight-windowClientWidth/5+"px",
    left:(windowClientWidth/2)-(windowClientWidth/5/2)+"px",
});
$(".slideUpDown img").css({
    width:100+"%",
    height:100+"%",
});
/*设置第八版5张gif图片*/
setGif("#gif1");
setGif("#gif2");
setGif("#gif3");
setGif("#gif4");
setGif("#gif5");
function setGif(id){
    $(id).css({display:"none",width:windowClientWidth/2+"px",height:windowClientWidth/2*1.3+"px",position:"absolute",top:0,left:windowClientWidth/2-windowClientWidth/4+"px"});
    $(id+" div").css({position:"absolute",top:0,left:0});
    $(id).find("img").css({width:100+"%",height:100+"%"});
    $(id+" div").eq(0).css({width:windowClientWidth/2+"px",height:windowClientWidth/2*1.3+"px",transform:"translateZ("+windowClientWidth/2/10+"px)"});
    $(id+" div").eq(1).css({width:windowClientWidth/2+"px",height:windowClientWidth/2*1.3+"px",transform:"translateZ("+-(windowClientWidth/2/10)+"px)"});
    $(id+" div").eq(2).css({width:windowClientWidth/2+"px",height:windowClientWidth/2/5+"px",transformOrigin:"top",transform:"translateZ("+-(windowClientWidth/2/10)+"px) rotateX(90deg)",background:"black",opacity:0.5})
    $(id+" div").eq(3).css({width:windowClientWidth/2+"px",height:windowClientWidth/2/5+"px",transformOrigin:"top",transform:"translateZ("+-(windowClientWidth/2/10)+"px) rotateX(90deg) translateZ("+-(windowClientWidth/2*1.3)+"px)",background:"black",opacity:0.5})
    $(id+" div").eq(4).css({width:windowClientWidth/2/5+"px",height:windowClientWidth/2*1.3+"px",transformOrigin:"left",transform:"translateZ("+windowClientWidth/2/10+"px) rotateY(90deg)",background:"black",opacity:0.5})
    $(id+" div").eq(5).css({width:windowClientWidth/2/5+"px",height:windowClientWidth/2*1.3+"px",transformOrigin:"left",transform:"translateZ("+windowClientWidth/2/10+"px) rotateY(90deg) translateZ("+windowClientWidth/2+"px)",background:"black",opacity:0.5})
}
/*随机音乐*/
music();
function music(){
    var n=Math.ceil(Math.random()*14);
    var url=n+".mp3"
    $("audio").attr("src",url);
}
/*设置随机歌词*/
var songSplitArr=[];
var str="";
function randomSong(){
    var randomSongArrlength=Math.ceil(Math.random()*songArr.length);
    for(var i=0;i<randomSongArrlength;i++){
        songSplitArr=songArr[i].split(",");
        if(songSplitArr.length==1){
            str=songSplitArr[0];
        }
        if(songSplitArr.length==2){
            str=songSplitArr[0]+" <br> "+songSplitArr[1];
        }
        if(songSplitArr.length==3){
            str=songSplitArr[0]+" <br> "+songSplitArr[1]+" <br> "+songSplitArr[2];
        }
    }
    $("#bac p").html(str);
}
/*随机开关控制随机歌词的显示*/
function randomTF(){
    var rTF=Math.floor(Math.random()*2);
    if(rTF==1){
        randomSong();
    }
    if(rTF==0){
        $("#bac p").html("");
    }
}
/*初始排列图片顺序*/
for(var i=0;i<oDiv.length;i++){
    oDiv[i].style.zIndex=oDiv.length-i;
}
/*阻止移动端橡皮筋效果*/
document.addEventListener('touchstart',function(e){
    e.preventDefault();
})
/*移动端判断是下滑还是上滑*/
/*for(var i=0;i<oDiv.length;i++){
 oDiv[i].style.width=windowClientWidth+"px";
 oDiv[i].style.height=windowClientHeight+"px";
 oDiv[i].style.height=windowClientHeight+"px";
 oDiv[i].style.position="absolute";
 oDiv[i].style.top=0;
 oDiv[i].style.left=0;
 oDiv[i].style.transition=1+"s";
 oDiv[i].index=i;
 oDiv[i].addEventListener("touchstart",function(event){
 var e=event.touches[0]||window.event;
 startY=e.clientY;
 oDiv[i].innerHTML=startY+"+"+endY;
 e.preventDefault();
 },false);
 oDiv[i].addEventListener("touchend",function(event){
 var e=event.changedTouches[0]||window.event;
 endY=e.clientY;
 if(endY>startY){
 alert("向下滑动");
 }else if(endY<startY){alert("向上滑动");
 this.style.top=-this.offsetHeight+"px";
 photo2();
 }
 },false);
 }*/

/*用鼠标测试*/
/*for(var j=0;j<oDiv.length;j++){
 oDiv[j].index=j;
 oDiv[j].onclick=function(){ //向上
 if(this.index!=oDiv.length-1){
 if(this.index==0){photo2();}
 if(this.index==1){photo3();}
 if(this.index==2){photo4();}
 if(this.index==3){photo5();}
 this.style.top=-this.offsetHeight+"px";
 oDiv[this.index+1].style.top=0+"px";
 }
 }
 /!*oDiv[j].ondblclick=function(){
 if(this.index!=0){
 this.style.top=this.offsetHeight+"px";
 oDiv[this.index-1].style.top=0+"px";
 }
 }*!/
 }*/
photo1();
/*手机可行，正式代码在此*/
for(var j=0;j<oDiv.length;j++){
    oDiv[j].index=j;
    oDiv[j].addEventListener("touchstart",function(event){
        var e=event.touches[0]||window.event;
        startY=e.clientY;
        e.preventDefault();
    },false);
    oDiv[j].addEventListener("touchend",function(event){
        var e=event.changedTouches[0]||window.event;
        endY=e.clientY;
        if(endY<startY){

            if(this.index==oDiv.length-1){
                /*alert("已经不能再向上滑动了");*/
                return;
            }

            /*alert("向上滑动..");*/
            randomTF();
            randomBac();
            $(".slideUpDown").hide();
            if(this.index==oDiv.length-2){
                $(".slideUpDown img").attr("src","images01/down.gif");
                $(".slideUpDown").show();
            }
            if(this.index==0){photo2();}
            if(this.index==1){photo3();}
            if(this.index==2){photo4();}
            if(this.index==3){photo5();}
            if(this.index==4){photo6();}
            if(this.index==5){photo7();}
            if(this.index==6){photo8();}
            this.style.top=-this.offsetHeight+"px";
            oDiv[this.index+1].style.top=0+"px";
        }
        if(endY>startY){
            if(this.index==0){
                /*alert("已经不能再向下滑动了");*/
                return;
            }
            /*alert("向下滑动..");*/
            randomTF();
            $(".slideUpDown").hide();
            if(this.index==1){
                $(".slideUpDown img").attr("src","images01/up.gif");
                $(".slideUpDown").show();
            }
            randomBac();
            if(this.index==1){photo1();}
            if(this.index==2){photo2();}
            if(this.index==3){photo3();}
            if(this.index==4){photo4();}
            if(this.index==5){photo5();}
            if(this.index==6){photo6();}
            if(this.index==7){photo7();}
            this.style.top=this.offsetHeight+"px";
            oDiv[this.index-1].style.top=0+"px";
        }
    },false);
}
/*初始加载调用第一张相片特效*/
/*photo1();*/
/*背景图随机生成*/
function randomBac(){
    var ranBacNum=Math.ceil(Math.random()*14);
    var bacStr="images01/bac"+ranBacNum+".jpg";

    $("#bac1").attr("src",bacStr);
    $("#bac1").fadeToggle();
    $("#bac2").attr("src",lastRanBacNum);
    $("#bac2").fadeToggle();


    lastRanBacNum=bacStr;
}
/*星星海特效*/
starEff("a",0);
starEff("b",1);
starEff("c",2);
starEff("b",3);
starEff("c",4);
function starEff(pin,index){
    var ranW=Math.floor(Math.random()*250+250);
    var ranH=Math.floor(Math.random()*250+250);

    setInterval(function(){
        var oSpan=document.createElement("span");
        with(oSpan.style){
            /*backgroundImage="url('images01/a.png')";*/
            display="inline-block";
            width="50px";
            height="50px";
            position="absolute";
            top=Math.floor(Math.random()*windowClientHeight)+"px";
            left=Math.floor(Math.random()*windowClientWidth)+"px";
        }
        oStarEff.appendChild(oSpan);
        var oImg=document.createElement("img");
        oImg.src="images01/"+pin+".png";
        with(oImg.style){
            width=100+"%";
            height=100+"%";
        }
        oSpan.appendChild(oImg);
        oImg.style.transition="3s";
        oImg.style.animation="ani 3s";
        oStarEff.style.transition="3s";

        /*oStarEff.style.transform="rotateZ("+90+"deg)"*/
        $("#starEff").children().eq(index).animate({width:ranW,
            height:ranW,top:Math.floor(Math.random()*windowClientHeight)-200,
            left:Math.floor(Math.random()*windowClientWidth)-200+"px"
        },400,function(){
            oStarEff.style.transform="rotateZ(0deg)";
            $("#starEff").children().eq(index).remove();});
    },800)
}
/*第一张相片特效*/
function photo1(){

    clearInterval(timer);
    var w1=120;
    var h1=84;
    var n1=0;
    timer=setInterval(function(){
        w1+=10;
        h1+=7;
        n1+=1;
        if(w1>=windowClientWidth){
            clearInterval(timer);
        }
        $("#div1 span").css({
            background:"white",
            opacity:0.3
        })
        $(".divBox").eq(0).css({display:"block",});
        $("#div1").css({
            display:"block",
            width:w1+"px",
            height:h1+"px",
            lineHeight:h1+"px",
            border: ""+n1+"px double white",
            left:Math.floor(windowClientWidth/2)-Math.floor(w1/2)+"px",
            top:Math.floor(windowClientHeight/2)-Math.floor(h1/2)+"px",})
    },30);
}
/*第二张相片特效*/
function photo2(){
    clearInterval(timer);
    var w2=60;
    var h2=80;
    var n2=0;
    timer=setInterval(function(){
        w2+=6.5;
        h2+=8;
        n2+=0.5;
        if(w2>=windowClientWidth){
            clearInterval(timer);
        }
        $("#div2 span").css({
            background:"#2f6fad",
            opacity:0.3
        })
        $(".divBox").eq(1).css({display:"block",});
        $("#div2").css({
            display:"block",
            width:w2+"px",
            height:h2+"px",
            lineHeight:h2+"px",
            border: ""+n2+"px groove #2f6fad",
            left:Math.floor(windowClientWidth/2)-Math.floor(w2/2)+"px",
            top:Math.floor(windowClientHeight/2)-Math.floor(h2/2)+"px",})
    },30);
}
/*第三张相片特效*/
function photo3(){
    clearInterval(timer);
    var w3=120;
    var h3=84;
    var n3=0;
    timer=setInterval(function(){
        w3+=10;
        h3+=7;
        n3+=1;
        if(w3>=windowClientWidth){
            clearInterval(timer);
        }
        $("#div3 span").css({
            background:"cyan",
            opacity:0.3
        });
        $(".divBox").eq(2).css({display:"block",});
        $("#div3").css({
            display:"block",
            width:w3+"px",
            height:h3+"px",
            lineHeight:h3+"px",
            border: ""+n3+"px ridge cyan",
            left:Math.floor(windowClientWidth/2)-Math.floor(w3/2)+"px",
            top:Math.floor(windowClientHeight/2)-Math.floor(h3/2)+"px",})
    },30);
}
/*第四张相片特效*/
function photo4(){
    $("#div5").slideUp(500);
    $("#div6").slideUp(500)
    $("#div7").fadeOut(500);
    clearInterval(timer);
    var w4=120;
    var h4=160;
    var n4=0;
    timer=setInterval(function(){
        w4+=9;
        h4+=12;
        n4+=1;
        if(w4>=windowClientWidth){
            clearInterval(timer);
        }
        $(".divBox").eq(3).css({display:"block",});
        $("#div4 span").css({
            background:"orange",
            opacity:0.3
        })
        $("#div4").css({
            display:"block",
            width:w4+"px",
            height:h4+"px",
            lineHeight:h4+"px",
            border: ""+n4+"px ridge orange",
            left:Math.floor(windowClientWidth/2)-Math.floor(w4/2)+"px",
            top:Math.floor(windowClientHeight/2)-Math.floor(h4/2)+"px",});
    },30);
}
/*第5板相片特效*/
function photo5(){
    $(".divBox").eq(4).css({display:"block",});

    $("#div5").slideDown(500);

    $("#div7").delay(500).slideDown(500);

    $("#div6").delay(1000).fadeIn(1500);
    $("#div5 span").css({
        background:"white",
        opacity:0.3
    })
    $("#div6 span").css({
        background:"white",
        opacity:0.3
    })
    $("#div7 span").css({
        background:"white",
        opacity:0.3
    })

    $("#div8").fadeOut(500);
    $("#div9").animate({left:windowClientWidth,opacity:0},500);
    $("#div10").animate({left:-windowClientWidth*0.8,opacity:0},500);
    $("#div11").fadeOut(500);
}
/*第6板相片特效*/
function photo6(){
    $(".divBox").eq(5).css({display:"block",});
    $("#div5").slideUp(500);
    $("#div6").slideUp(500)
    $("#div7").fadeOut(500);

    $("#div8").delay(1500).fadeIn(500);
    $("#div9").animate({left:windowClientWidth-(windowClientWidth*0.8),opacity:1},1500,"linear");
    $("#div10").animate({left:0+"px",opacity:1},1500,"linear");
    $("#div11").delay(1500).fadeIn(500);
    $("#div8").css({borderColor:"black"})
    $("#div9").css({borderColor:"black"})
    $("#div10").css({borderColor:"black"})
    $("#div11").css({borderColor:"black"})
}
/*第7板相片特效*/
function photo7(){
    photo8End();
    $(".divBox").eq(6).css({display:"block",});
    $("#div8").fadeOut(500);
    $("#div9").animate({left:windowClientWidth,opacity:0},500);
    $("#div10").animate({left:-windowClientWidth*0.8,opacity:0},500);
    $("#div11").fadeOut(500);

    clearInterval(timer);
    var w12=120;
    var h12=84;
    var n12=0;
    timer=setInterval(function(){
        w12+=10;
        h12+=7;
        n12+=1;
        if(w12>=windowClientWidth){
            clearInterval(timer);
        }
        $(".divBox").eq(11).css({display:"block",});
        $("#div12 span").css({
            background:"red",
            opacity:0.3
        })
        $("#div12").css({
            display:"block",
            width:w12+"px",
            height:h12+"px",
            lineHeight:h12+"px",
            border: ""+n12+"px groove red",
            left:Math.floor(windowClientWidth/2)-Math.floor(w12/2)+"px",
            top:Math.floor(windowClientHeight/2)-Math.floor(h12/2)+"px",})
    },30);
}

/*第8版图片特效*/
function photo8(){
    clearInterval(photo8Timer);
    $(".divBox").eq(7).css({display:"block",});
    $("#div13").fadeIn();
    $(".allGif").show();
    $("#gif1").css({left:windowClientWidth/2-windowClientWidth/4+"px",top:windowClientHeight/2-windowClientWidth/2*1.3/2+"px",transition:"1s 2s",transform:"translateZ("+windowClientWidth/2+"px)"})
    $("#gif2").css({left:windowClientWidth/2-windowClientWidth/4+"px",top:windowClientHeight/2-windowClientWidth/2*1.3/2+"px",transition:"1s 2s",transform:"rotateY(72deg) translateZ("+windowClientWidth/2+"px)"})
    $("#gif3").css({left:windowClientWidth/2-windowClientWidth/4+"px",top:windowClientHeight/2-windowClientWidth/2*1.3/2+"px",transition:"1s 2s",transform:"rotateY(144deg) translateZ("+windowClientWidth/2+"px)"})
    $("#gif4").css({left:windowClientWidth/2-windowClientWidth/4+"px",top:windowClientHeight/2-windowClientWidth/2*1.3/2+"px",transition:"1s 2s",transform:"rotateY(216deg) translateZ("+windowClientWidth/2+"px)"})
    $("#gif5").css({left:windowClientWidth/2-windowClientWidth/4+"px",top:windowClientHeight/2-windowClientWidth/2*1.3/2+"px",transition:"1s 2s",transform:"rotateY(288deg) translateZ("+windowClientWidth/2+"px)"})
    photo8Timer=setInterval(function(){
        photo8para1+=2;
        $("#div13").css({transform:"rotateX(30deg) rotateY("+photo8para1+"deg)"})
    },100)
}
/*第8版图片终止特效,photo7和photo函数里调用*/
function photo8End(){
    clearInterval(photo8Timer);
    $("#gif1").css({transition:"0.5s ",transform:"translateZ("+0+"px)"})
    $("#gif2").css({transition:"0.6s ",transform:"rotateY(0deg) translateZ("+0+"px)"})
    $("#gif3").css({transition:"0.7s ",transform:"rotateY(0deg) translateZ("+0+"px)"})
    $("#gif4").css({transition:"0.8s",transform:"rotateY(0deg) translateZ("+0+"px)"})
    $("#gif5").css({transition:"0.1s",transform:"rotateY(0deg) translateZ("+0+"px)"})
}
