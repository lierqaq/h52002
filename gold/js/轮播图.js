function lbt(imgs,btns,lis,j,carousel){
    this.imgs=imgs
    this.btns=btns;
    this.lis=lis;
    this.j=j;
    this.carousel=carousel;
}
lbt.prototype.init=function(){
this.bangding();
this.jsq(1);
}
lbt.prototype.bangding=function(){
var me =this
for(i=0;i<this.btns.length;i++){
    this.btns[i].onclick=function(){
        if(this.innerHTML=="&gt;"){
            me.dh(1);
        }else{
            me.dh(-1);
        }
    }
    
}
for (i=0;i<this.lis.length;i++){
    this.lis[i].onclick=function(){
    me.j=parseInt(this.getAttribute("sg"))
        
        
        me.dh();
    }
}
this.carousel.onmouseover=function(){
    me.jsq(-1);
    
}
this.carousel.onmouseout=function(){
    me.jsq(1);
    
}
}
lbt.prototype.dh=function(x){
if (x){
    this.j+=x
if(this.j==3){
this.j=0
}else if(this.j==-1){
    this.j=2
}
}
for(i=0;i<this.imgs.length-1;i++){
    this.imgs[i].className=""
    this.lis[i].className=""
    
}
this.imgs[this.j].className="active"
this.lis[this.j].className="active"

}
lbt.prototype.jsq=function(x){
var me =this
if (x==1){
    me.time=setInterval(function(){
        me.dh(1)
    },2000)
}else if(x==-1){
    clearInterval(me.time)
    me.time=null
}
}

var imgs=document.querySelectorAll(".banner_img img")
var btns=document.querySelectorAll(".banner button");
var lis=document.querySelectorAll(".banner ul li");
var carousel=document.getElementsByClassName("banner")[0];

var car2=new lbt(imgs,btns,lis,0,carousel);

