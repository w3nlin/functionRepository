/**
 * Created by ASUS on 2018/9/5.
 */
function boom(obj,objStyle,clipRows,clipCols,imgArr,t_f){
    /*�жϴ�������obj��ʽ*/
    for(key in objStyle){
        if(key=="position"){var objPosition=objStyle[key]}
        if(key=="width"){var objWidth=objStyle[key]}
        if(key=="height"){var objHeight=objStyle[key]}
        if(key=="top"){var objTop=objStyle[key]}
        if(key=="left"){var objLeft=objStyle[key]}
        if(key=="right"){var objRight=objStyle[key]}
        if(key=="bottom"){var objBottom=objStyle[key]}
    }
    /*����ȫ������*/
    var rows=clipRows; //������Ƭ��x������
    var cols=clipCols; //������Ƭ��y������
    var index=99999999; //���������Ƭ��oDiv������z-index
    var oDiv=null; //ȫ�ֶ��������Ƭ��oDiv����
    var imgArrIndex=0; //����ͼƬ�������±�
    var time=0; //�������oDiv��ʱ��
    var transitionRatio=0; //�������ʱ��  //���ڽ���ͼ��Ч
    var randomTransitionRatio=0; //�������ʱ��  //���ڱ�ը��Ч
    /*��ȡ��div*/
    with(obj.style){  //���������obj����   //������ʽ
        width=objWidth+"px";
        height=objHeight+"px";
        /*border="1px solid black";*/
        position=objPosition;
        right=objRight+"px";
        bottom=objBottom+"px"
    };
    if(objTop){obj.style.top=objTop+"px";}
    if(objLeft){obj.style.left=objLeft+"px";}
    /*����Сdiv*/
    createDiv();
    function createDiv(){
        oDiv=document.createElement("div");  //����oDiv��������rows*cols����Ƭ
        with(oDiv.style){   //������ʽ
            width=100+"%";
            height=100+"%";
            position="absolute";
            top=0+"px";
            left=0+"px";
        };
        obj.appendChild(oDiv);
    }
    /*������Ƭ*/
    createClip(obj.children.length-1);  //ԭ������0����ͷһ�ţ���ǰ��ʾ�����ţ���1�������½���һ�ţ������������bug��������obj.children.length-1����ʽ����
    function createClip(ind){ //ind����index��ָ���n�ų�����Ƭ��oDiv����
        index--;   //��������n��oDiv��z-index�㼶
        if(imgArrIndex==imgArr.length){ //������жϴ������Ĵ��n��ͼƬ·��������
            imgArrIndex=0; //����ʾ�����һ��ʱ����һ�λص���һ��
        }
        for(var i=0;i<cols;i++){  //��Ƭ��y������
            for(var j=0;j<rows;j++){ //��Ƭ��x������
                var oClip=document.createElement("div"); //������Ƭ
                obj.children[ind].appendChild(oClip);
                with (oClip.style){  //������ʽ
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
        imgArrIndex++; //����ͼƬ����ʾ
    }
    /*����Ƭ�˶�*/
    function action(){
        createDiv();
        createClip(obj.children.length-1); //obj.children.length-1Ϊ���½����Ǹ�oDiv
        for(var i=0;i<obj.children[obj.children.length-2].children.length;i++){
            var tlX=(-200+Math.random()*400); //X��λ��  //Ӧ���ڱ�ը��Ч
            var tlY=(-200+Math.random()*400); //Y��λ��  //Ӧ���ڱ�ը��Ч
            var rtX=(Math.random()*360); //X����ת����   //Ӧ���ڱ�ը��Ч�ͽ���ͼ��Ч
            var rtY=(Math.random()*360); //Y����ת����   //Ӧ���ڱ�ը��Ч�ͽ���ͼ��Ч
            var rtZ=(Math.random()*360); //Z����ת����   //Ӧ���ڱ�ը��Ч�ͽ���ͼ��Ч
            var oScale=2; //�Ŵ���  //Ӧ���ڱ�ը��Ч�ͽ���ͼ��Ч
            if(t_f==1){  //��ը��Ч
                with(obj.children[obj.children.length-2].children[i].style){//obj.children.length-2Ϊ���½����Ǹ�oDiv������ǰһ��ͼƬ��Ҳ���ǵ�ǰ��ʾ����һ��
                    randomTransitionRatio=1.5; //���ù��ɵ�ʱ��
                    transition=Math.random()*randomTransitionRatio+"s";
                    transformStyle="preserve-3d";
                    boxShadow="0 0 20px blue"
                    opacity=0;
                    transform="translateX("+tlX+"px) "+"translateY("+tlY+"px) "+"rotateX("+rtX+"deg) "+"rotateY("+rtY+"deg)"+"rotateZ("+rtZ+"deg) "+"scale("+oScale+")";
                    time=randomTransitionRatio*1000;  //���ݹ��ɵ���ʱ�����ö�ʱ����ʱ��
                };
            }
            if(t_f==2){ //����ͼ��Ч
                transitionRatio=0.1; //����ÿһ����Ƭdiv���ɵ�ʱ��
                with(obj.children[obj.children.length-2].children[i].style){ //obj.children.length-2Ϊ���½����Ǹ�oDiv������ǰһ��ͼƬ��Ҳ���ǵ�ǰ��ʾ����һ��
                    transition=i*transitionRatio+"s";
                    transformStyle="preserve-3d";
                    boxShadow="0 0 20px blue"
                    opacity=0;
                    transform="translateX(-200px) "+"translateY(-200px) "+"rotateX("+rtX+"deg) "+"rotateY("+rtY+"deg)"+"rotateZ("+rtZ+"deg) "+"scale("+oScale+")";
                };
                time=obj.children[obj.children.length-2].children.length*transitionRatio*1000;  //���ݹ��ɵ���ʱ�����ö�ʱ����ʱ��
            }
        };
        setTimeout(function(){
            obj.children[0].remove(); //�Ƴ�����һ��oDiv����
        },time);
    };
    /*���obj���󴥷��˶�Ч��*/
    obj.onclick=function(){
        action();
    }
}
