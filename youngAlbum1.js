!function(t){var i={};function n(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=i,n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,i){if(1&i&&(t=n(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)n.d(e,o,function(i){return t[i]}.bind(null,o));return e},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="",n(n.s=0)}([function(module,exports){var windowClientWidth=document.documentElement.clientWidth||document.body.clientWidth,windowClientHeight=document.documentElement.clientHeight||document.body.clientHeight,startX=0,startY=0,endX=0,endY=0,lastRanBacNum=0,songArr=["�Ҹ���ʱ������ɳ","һ��һ����ɱ�,���ɫ�ʰ�쵵��λü���","ʵ�ֵĵȴ�,���Ĳ���","��Щ�������,��򵥵��غ�","Ϊ�ഺ������,ѧ���¸�����","�����Ƽ�,���Ĳ���,������д�������ú�װ������","���������Ƭ��,ȫ������ɬ�꼾","�����������ķ羰,��л������ͬ��","���������������ӵ,ҡҷ���ഺ����ʱ������"],timer=null,photo8para1=0,photo8Timer=null,oBody=document.getElementsByTagName("body")[0],obac=document.getElementById("bac"),oStarEff=document.getElementById("starEff"),oDiv=document.getElementsByClassName("divBox");with(oDiv[4].children[0].style)width=.8*windowClientWidth+"px",height=.8*windowClientWidth*.7+"px",top=0,left=0,zIndex=6;with(oDiv[4].children[1].style)width=.95*windowClientWidth*.75+"px",height=.95*windowClientWidth+"px",left=Math.floor(windowClientWidth/2)-Math.floor(.95*windowClientWidth*.75/2)+"px",top=Math.floor(windowClientHeight/2)-Math.floor(.95*windowClientWidth/2)+"px",zIndex=7;with(oDiv[4].children[2].style)width=.8*windowClientWidth+"px",height=.8*windowClientWidth*.7+"px",top=windowClientHeight-.8*windowClientWidth*.7+"px",left=windowClientWidth-.8*windowClientWidth+"px",zIndex=8;with(oDiv[5].children[0].style)width=.8*windowClientWidth+"px",height=.8*windowClientWidth*.7+"px",top=0-.8*windowClientWidth*.7*.2,left=0;with(oDiv[5].children[1].style)width=.8*windowClientWidth+"px",height=.8*windowClientWidth*.7+"px",left=windowClientWidth+"px",top=.8*windowClientWidth*.7-.8*windowClientWidth*.7*.2+"px";with(oDiv[5].children[2].style)width=.8*windowClientWidth+"px",height=.8*windowClientWidth*.7+"px",top=.8*windowClientWidth*.7*2-.8*windowClientWidth*.7*.4+"px",left=.8*-windowClientWidth+"px";with(oDiv[5].children[3].style)width=.8*windowClientWidth+"px",height=.8*windowClientWidth*.7+"px",top=windowClientHeight-.8*windowClientWidth*.7+"px",left=windowClientWidth-.8*windowClientWidth+"px";function setGif(t){$(t).css({display:"none",width:windowClientWidth/2+"px",height:windowClientWidth/2*1.3+"px",position:"absolute",top:0,left:windowClientWidth/2-windowClientWidth/4+"px"}),$(t+" div").css({position:"absolute",top:0,left:0}),$(t).find("img").css({width:"100%",height:"100%"}),$(t+" div").eq(0).css({width:windowClientWidth/2+"px",height:windowClientWidth/2*1.3+"px",transform:"translateZ("+windowClientWidth/2/10+"px)"}),$(t+" div").eq(1).css({width:windowClientWidth/2+"px",height:windowClientWidth/2*1.3+"px",transform:"translateZ("+-windowClientWidth/2/10+"px)"}),$(t+" div").eq(2).css({width:windowClientWidth/2+"px",height:windowClientWidth/2/5+"px",transformOrigin:"top",transform:"translateZ("+-windowClientWidth/2/10+"px) rotateX(90deg)",background:"black",opacity:.5}),$(t+" div").eq(3).css({width:windowClientWidth/2+"px",height:windowClientWidth/2/5+"px",transformOrigin:"top",transform:"translateZ("+-windowClientWidth/2/10+"px) rotateX(90deg) translateZ("+-windowClientWidth/2*1.3+"px)",background:"black",opacity:.5}),$(t+" div").eq(4).css({width:windowClientWidth/2/5+"px",height:windowClientWidth/2*1.3+"px",transformOrigin:"left",transform:"translateZ("+windowClientWidth/2/10+"px) rotateY(90deg)",background:"black",opacity:.5}),$(t+" div").eq(5).css({width:windowClientWidth/2/5+"px",height:windowClientWidth/2*1.3+"px",transformOrigin:"left",transform:"translateZ("+windowClientWidth/2/10+"px) rotateY(90deg) translateZ("+windowClientWidth/2+"px)",background:"black",opacity:.5})}function music(){var t=Math.ceil(14*Math.random())+".mp3";$("audio").attr("src",t)}oBody.style.width=windowClientWidth+"px",oBody.style.height=windowClientHeight+"px",obac.style.width=windowClientWidth+"px",obac.style.height=windowClientHeight+"px",obac.children[0].style.width="100%",obac.children[0].style.height="100%",obac.children[1].style.width="100%",obac.children[1].style.height="100%",$(".slideUpDown").css({width:windowClientWidth/5+"px",height:windowClientWidth/5+"px",position:"absolute",top:windowClientHeight-windowClientWidth/5+"px",left:windowClientWidth/2-windowClientWidth/5/2+"px"}),$(".slideUpDown img").css({width:"100%",height:"100%"}),setGif("#gif1"),setGif("#gif2"),setGif("#gif3"),setGif("#gif4"),setGif("#gif5"),music();var songSplitArr=[],str="";function randomSong(){for(var t=Math.ceil(Math.random()*songArr.length),i=0;i<t;i++)1==(songSplitArr=songArr[i].split(",")).length&&(str=songSplitArr[0]),2==songSplitArr.length&&(str=songSplitArr[0]+" <br> "+songSplitArr[1]),3==songSplitArr.length&&(str=songSplitArr[0]+" <br> "+songSplitArr[1]+" <br> "+songSplitArr[2]);$("#bac p").html(str)}function randomTF(){var t=Math.floor(2*Math.random());1==t&&randomSong(),0==t&&$("#bac p").html("")}for(var i=0;i<oDiv.length;i++)oDiv[i].style.zIndex=oDiv.length-i;document.addEventListener("touchstart",function(t){t.preventDefault()}),photo1();for(var j=0;j<oDiv.length;j++)oDiv[j].index=j,oDiv[j].addEventListener("touchstart",function(t){var i=t.touches[0]||window.event;startY=i.clientY,i.preventDefault()},!1),oDiv[j].addEventListener("touchend",function(t){var i=t.changedTouches[0]||window.event;if((endY=i.clientY)<startY){if(this.index==oDiv.length-1)return;randomTF(),randomBac(),$(".slideUpDown").hide(),this.index==oDiv.length-2&&($(".slideUpDown img").attr("src","images01/down.gif"),$(".slideUpDown").show()),0==this.index&&photo2(),1==this.index&&photo3(),2==this.index&&photo4(),3==this.index&&photo5(),4==this.index&&photo6(),5==this.index&&photo7(),6==this.index&&photo8(),this.style.top=-this.offsetHeight+"px",oDiv[this.index+1].style.top="0px"}if(endY>startY){if(0==this.index)return;randomTF(),$(".slideUpDown").hide(),1==this.index&&($(".slideUpDown img").attr("src","images01/up.gif"),$(".slideUpDown").show()),randomBac(),1==this.index&&photo1(),2==this.index&&photo2(),3==this.index&&photo3(),4==this.index&&photo4(),5==this.index&&photo5(),6==this.index&&photo6(),7==this.index&&photo7(),this.style.top=this.offsetHeight+"px",oDiv[this.index-1].style.top="0px"}},!1);function randomBac(){var t="images01/bac"+Math.ceil(14*Math.random())+".jpg";$("#bac1").attr("src",t),$("#bac1").fadeToggle(),$("#bac2").attr("src",lastRanBacNum),$("#bac2").fadeToggle(),lastRanBacNum=t}function starEff(pin,index){var ranW=Math.floor(250*Math.random()+250),ranH=Math.floor(250*Math.random()+250);setInterval(function(){var oSpan=document.createElement("span");with(oSpan.style)display="inline-block",width="50px",height="50px",position="absolute",top=Math.floor(Math.random()*windowClientHeight)+"px",left=Math.floor(Math.random()*windowClientWidth)+"px";oStarEff.appendChild(oSpan);var oImg=document.createElement("img");with(oImg.src="images01/"+pin+".png",oImg.style)width=100+"%",height=100+"%";oSpan.appendChild(oImg),oImg.style.transition="3s",oImg.style.animation="ani 3s",oStarEff.style.transition="3s",$("#starEff").children().eq(index).animate({width:ranW,height:ranW,top:Math.floor(Math.random()*windowClientHeight)-200,left:Math.floor(Math.random()*windowClientWidth)-200+"px"},400,function(){oStarEff.style.transform="rotateZ(0deg)",$("#starEff").children().eq(index).remove()})},800)}function photo1(){clearInterval(timer);var t=120,i=84,n=0;timer=setInterval(function(){i+=7,n+=1,(t+=10)>=windowClientWidth&&clearInterval(timer),$("#div1 span").css({background:"white",opacity:.3}),$(".divBox").eq(0).css({display:"block"}),$("#div1").css({display:"block",width:t+"px",height:i+"px",lineHeight:i+"px",border:n+"px double white",left:Math.floor(windowClientWidth/2)-Math.floor(t/2)+"px",top:Math.floor(windowClientHeight/2)-Math.floor(i/2)+"px"})},30)}function photo2(){clearInterval(timer);var t=60,i=80,n=0;timer=setInterval(function(){i+=8,n+=.5,(t+=6.5)>=windowClientWidth&&clearInterval(timer),$("#div2 span").css({background:"#2f6fad",opacity:.3}),$(".divBox").eq(1).css({display:"block"}),$("#div2").css({display:"block",width:t+"px",height:i+"px",lineHeight:i+"px",border:n+"px groove #2f6fad",left:Math.floor(windowClientWidth/2)-Math.floor(t/2)+"px",top:Math.floor(windowClientHeight/2)-Math.floor(i/2)+"px"})},30)}function photo3(){clearInterval(timer);var t=120,i=84,n=0;timer=setInterval(function(){i+=7,n+=1,(t+=10)>=windowClientWidth&&clearInterval(timer),$("#div3 span").css({background:"cyan",opacity:.3}),$(".divBox").eq(2).css({display:"block"}),$("#div3").css({display:"block",width:t+"px",height:i+"px",lineHeight:i+"px",border:n+"px ridge cyan",left:Math.floor(windowClientWidth/2)-Math.floor(t/2)+"px",top:Math.floor(windowClientHeight/2)-Math.floor(i/2)+"px"})},30)}function photo4(){$("#div5").slideUp(500),$("#div6").slideUp(500),$("#div7").fadeOut(500),clearInterval(timer);var t=120,i=160,n=0;timer=setInterval(function(){i+=12,n+=1,(t+=9)>=windowClientWidth&&clearInterval(timer),$(".divBox").eq(3).css({display:"block"}),$("#div4 span").css({background:"orange",opacity:.3}),$("#div4").css({display:"block",width:t+"px",height:i+"px",lineHeight:i+"px",border:n+"px ridge orange",left:Math.floor(windowClientWidth/2)-Math.floor(t/2)+"px",top:Math.floor(windowClientHeight/2)-Math.floor(i/2)+"px"})},30)}function photo5(){$(".divBox").eq(4).css({display:"block"}),$("#div5").slideDown(500),$("#div7").delay(500).slideDown(500),$("#div6").delay(1e3).fadeIn(1500),$("#div5 span").css({background:"white",opacity:.3}),$("#div6 span").css({background:"white",opacity:.3}),$("#div7 span").css({background:"white",opacity:.3}),$("#div8").fadeOut(500),$("#div9").animate({left:windowClientWidth,opacity:0},500),$("#div10").animate({left:.8*-windowClientWidth,opacity:0},500),$("#div11").fadeOut(500)}function photo6(){$(".divBox").eq(5).css({display:"block"}),$("#div5").slideUp(500),$("#div6").slideUp(500),$("#div7").fadeOut(500),$("#div8").delay(1500).fadeIn(500),$("#div9").animate({left:windowClientWidth-.8*windowClientWidth,opacity:1},1500,"linear"),$("#div10").animate({left:"0px",opacity:1},1500,"linear"),$("#div11").delay(1500).fadeIn(500),$("#div8").css({borderColor:"black"}),$("#div9").css({borderColor:"black"}),$("#div10").css({borderColor:"black"}),$("#div11").css({borderColor:"black"})}function photo7(){photo8End(),$(".divBox").eq(6).css({display:"block"}),$("#div8").fadeOut(500),$("#div9").animate({left:windowClientWidth,opacity:0},500),$("#div10").animate({left:.8*-windowClientWidth,opacity:0},500),$("#div11").fadeOut(500),clearInterval(timer);var t=120,i=84,n=0;timer=setInterval(function(){i+=7,n+=1,(t+=10)>=windowClientWidth&&clearInterval(timer),$(".divBox").eq(11).css({display:"block"}),$("#div12 span").css({background:"red",opacity:.3}),$("#div12").css({display:"block",width:t+"px",height:i+"px",lineHeight:i+"px",border:n+"px groove red",left:Math.floor(windowClientWidth/2)-Math.floor(t/2)+"px",top:Math.floor(windowClientHeight/2)-Math.floor(i/2)+"px"})},30)}function photo8(){clearInterval(photo8Timer),$(".divBox").eq(7).css({display:"block"}),$("#div13").fadeIn(),$(".allGif").show(),$("#gif1").css({left:windowClientWidth/2-windowClientWidth/4+"px",top:windowClientHeight/2-windowClientWidth/2*1.3/2+"px",transition:"1s 2s",transform:"translateZ("+windowClientWidth/2+"px)"}),$("#gif2").css({left:windowClientWidth/2-windowClientWidth/4+"px",top:windowClientHeight/2-windowClientWidth/2*1.3/2+"px",transition:"1s 2s",transform:"rotateY(72deg) translateZ("+windowClientWidth/2+"px)"}),$("#gif3").css({left:windowClientWidth/2-windowClientWidth/4+"px",top:windowClientHeight/2-windowClientWidth/2*1.3/2+"px",transition:"1s 2s",transform:"rotateY(144deg) translateZ("+windowClientWidth/2+"px)"}),$("#gif4").css({left:windowClientWidth/2-windowClientWidth/4+"px",top:windowClientHeight/2-windowClientWidth/2*1.3/2+"px",transition:"1s 2s",transform:"rotateY(216deg) translateZ("+windowClientWidth/2+"px)"}),$("#gif5").css({left:windowClientWidth/2-windowClientWidth/4+"px",top:windowClientHeight/2-windowClientWidth/2*1.3/2+"px",transition:"1s 2s",transform:"rotateY(288deg) translateZ("+windowClientWidth/2+"px)"}),photo8Timer=setInterval(function(){photo8para1+=2,$("#div13").css({transform:"rotateX(30deg) rotateY("+photo8para1+"deg)"})},100)}function photo8End(){clearInterval(photo8Timer),$("#gif1").css({transition:"0.5s ",transform:"translateZ(0px)"}),$("#gif2").css({transition:"0.6s ",transform:"rotateY(0deg) translateZ(0px)"}),$("#gif3").css({transition:"0.7s ",transform:"rotateY(0deg) translateZ(0px)"}),$("#gif4").css({transition:"0.8s",transform:"rotateY(0deg) translateZ(0px)"}),$("#gif5").css({transition:"0.1s",transform:"rotateY(0deg) translateZ(0px)"})}starEff("a",0),starEff("b",1),starEff("c",2),starEff("b",3),starEff("c",4)}]);