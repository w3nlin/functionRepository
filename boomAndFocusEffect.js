/**
 * Created by ASUS on 2018/9/5.
 */
function boom(obj,objStyle,clipRows,clipCols,imgArr,t_f){
    /*判断传进来的obj样式*/
    for(key in objStyle){
        if(key=="position"){var objPosition=objStyle[key]}
        if(key=="width"){var objWidth=objStyle[key]}
        if(key=="height"){var objHeight=objStyle[key]}
        if(key=="top"){var objTop=objStyle[key]}
        if(key=="left"){var objLeft=objStyle[key]}
        if(key=="right"){var objRight=objStyle[key]}
        if(key=="bottom"){var objBottom=objStyle[key]}
    }
    /*定义全局属性*/
    var rows=clipRows; //定义碎片的x轴数量
    var cols=clipCols; //定义碎片的y轴数量
    var index=99999999; //定义承载碎片的oDiv容器的z-index
    var oDiv=null; //全局定义承载碎片的oDiv容器
    var imgArrIndex=0; //控制图片的数组下标
    var time=0; //定义清除oDiv的时间
    var transitionRatio=0; //定义过渡时间  //用于焦点图特效
    var randomTransitionRatio=0; //定义过渡时间  //用于爆炸特效
    /*获取大div*/
    with(obj.style){  //传入进来的obj对象   //设置样式
        width=objWidth+"px";
        height=objHeight+"px";
        /*border="1px solid black";*/
        position=objPosition;
        right=objRight+"px";
        bottom=objBottom+"px"
    };
    if(objTop){obj.style.top=objTop+"px";}
    if(objLeft){obj.style.left=objLeft+"px";}
    /*创建小div*/
    createDiv();
    function createDiv(){
        oDiv=document.createElement("div");  //创建oDiv容器承载rows*cols个碎片
        with(oDiv.style){   //设置样式
            width=100+"%";
            height=100+"%";
            position="absolute";
            top=0+"px";
            left=0+"px";
        };
        obj.appendChild(oDiv);
    }
    /*创建碎片*/
    createClip(obj.children.length-1);  //原本想以0代表头一张（当前显示的这张），1代表最新建的一张，但是这样会出bug，所以以obj.children.length-1的形式传参
    function createClip(ind){ //ind代表index，指向第n张承载碎片的oDiv容器
        index--;   //用来控制n个oDiv的z-index层级
        if(imgArrIndex==imgArr.length){ //这个是判断传进来的存放n张图片路径的数组
            imgArrIndex=0; //当显示到最后一张时，下一次回到第一张
        }
        for(var i=0;i<cols;i++){  //碎片的y轴数量
            for(var j=0;j<rows;j++){ //碎片的x轴数量
                var oClip=document.createElement("div"); //创建碎片
                obj.children[ind].appendChild(oClip);
                with (oClip.style){  //设置样式
                    width=oClip.parentNode.clientWidth/rows+"px";
                    height=oClip.parentNode.clientHeight/cols+"px";
                    position="absolute";
                    top=oClip.parentNode.clientHeight/cols*i+"px";
                    left=oClip.parentNode.clientWidth/rows*j+"px";
                    background="url(images/"+imgArr[imgArrIndex]+")";
                    backgroundPositionX=-oClip.parentNode.clientWidth/rows*j+"px";
                    backgroundPositionY=-oClip.parentNode.clientHeight/cols*i+"px";
                    zIndex=index;
                };
            }
        }
        imgArrIndex++; //控制图片的显示
    }
    /*让碎片运动*/
    function action(){
        createDiv();
        createClip(obj.children.length-1); //obj.children.length-1为最新建的那个oDiv
        for(var i=0;i<obj.children[obj.children.length-2].children.length;i++){
            var tlX=(-200+Math.random()*400); //X轴位移  //应用于爆炸特效
            var tlY=(-200+Math.random()*400); //Y轴位移  //应用于爆炸特效
            var rtX=(Math.random()*360); //X轴旋转度数   //应用于爆炸特效和焦点图特效
            var rtY=(Math.random()*360); //Y轴旋转度数   //应用于爆炸特效和焦点图特效
            var rtZ=(Math.random()*360); //Z轴旋转度数   //应用于爆炸特效和焦点图特效
            var oScale=2; //放大倍数  //应用于爆炸特效和焦点图特效
            if(t_f==1){  //爆炸特效
                with(obj.children[obj.children.length-2].children[i].style){//obj.children.length-2为最新建的那个oDiv容器的前一张图片，也就是当前显示的这一张
                    randomTransitionRatio=1.5; //设置过渡的时间
                    transition=Math.random()*randomTransitionRatio+"s";
                    transformStyle="preserve-3d";
                    boxShadow="0 0 20px blue"
                    opacity=0;
                    transform="translateX("+tlX+"px) "+"translateY("+tlY+"px) "+"rotateX("+rtX+"deg) "+"rotateY("+rtY+"deg)"+"rotateZ("+rtZ+"deg) "+"scale("+oScale+")";
                    time=randomTransitionRatio*1000;  //根据过渡的总时间设置定时器的时间
                };
            }
            if(t_f==2){ //焦点图特效
                transitionRatio=0.1; //设置每一个碎片div过渡的时间
                with(obj.children[obj.children.length-2].children[i].style){ //obj.children.length-2为最新建的那个oDiv容器的前一张图片，也就是当前显示的这一张
                    transition=i*transitionRatio+"s";
                    transformStyle="preserve-3d";
                    boxShadow="0 0 20px blue"
                    opacity=0;
                    transform="translateX(-200px) "+"translateY(-200px) "+"rotateX("+rtX+"deg) "+"rotateY("+rtY+"deg)"+"rotateZ("+rtZ+"deg) "+"scale("+oScale+")";
                };
                time=obj.children[obj.children.length-2].children.length*transitionRatio*1000;  //根据过渡的总时间设置定时器的时间
            }
        };
        setTimeout(function(){
            obj.children[0].remove(); //移除掉第一张oDiv容器
        },time);
    };
    /*点击obj对象触发运动效果*/
    obj.onclick=function(){
        action();
    }
}
