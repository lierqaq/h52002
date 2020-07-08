function xxkk(xxk,xxk1,h3,ul,li,span,j,titspan){
    this.xxk=xxk
    this.xxk1=xxk1;
    this.h3=h3;
    this.ul=ul;
    this.li=li;
    this.span=span
    this.titspan=titspan
}
xxkk.prototype.init=function(){
    this.bangding();
    this.bangdingli();
    }
xxkk.prototype.bangding=function(){
    var me =this
     for(i=0;i<this.h3.length;i++){
         this.h3[i].onclick=function(){
            me.qingchu();  
            j=this.getAttribute("show");
            me.ul[j].className="show"
            this.className="act"
            me.jiajian();
            var str=this.innerText
            str=str.replace(/.$/,">")
            me.titspan[2].innerHTML=str
            me.titspan[3].innerHTML=(this.nextElementSibling).children[0].innerHTML
            this.nextElementSibling.firstElementChild.className="act"
           
           
      
         }
       
    }
    
}

xxkk.prototype.qingchu=function(){
    for(i=0;i<this.ul.length;i++){
        this.ul[i].className=""   
        this.h3[i].className=""
    } 
}
xxkk.prototype.jiajian=function(){
    for(i=0;i<this.span.length;i++){
        if(i!=j){
            this.span[i].innerHTML="+"
        }else{
            this.span[j].innerHTML="-"
        }
    }

    
}
xxkk.prototype.bangdingli=function(){
    var me =this
    for(i=0;i<this.li.length;i++){
      
        this.li[i].onclick=function(){
              me.qingchuli()
            this.className="act"
            me.titspan[3].innerHTML=this.innerHTML
    }
   
}
}

xxkk.prototype.qingchuli=function(){
    for(i=0;i<this.li.length;i++){
        this.li[i].className=""   
    } 
}






var xxk=document.querySelectorAll(".xxkbox .xxk")
var xxk1=document.querySelectorAll(".xxkbox .xxk .xxk1")
var h3=document.querySelectorAll(".xxkbox .xxk .xxk1 h3")
var span=document.querySelectorAll(".xxkbox .xxk .xxk1 h3 span")
var ul=document.querySelectorAll(".nav-con .navbigbox .xxk .xxk1 ul")
var li=document.querySelectorAll(".xxkbox .xxk .xxk1 ul li")
var titspan=document.querySelectorAll(".nav-con .navtit span")
var xuanxk=new xxkk(xxk,xxk1,h3,ul,li,span,0,titspan);
 

var xxk_4=document.querySelectorAll(".xxkbox .xxk")
var xxk1_4=document.querySelectorAll(".xxkbox .xxk .xxk1")
var h3_4=document.querySelectorAll(".xxkbox .xxk .xxk1 h3")
var span_4=document.querySelectorAll(".xxkbox .xxk .xxk1 h3 span")
var ul_4=document.querySelectorAll(".nav-con .navbigbox .xxk .xxk1 ul")
var li_4=document.querySelectorAll(".xxkbox .xxk .xxk1 ul li")
var titspan_4=document.querySelectorAll(".nav-con .navtit span")


var xuanxk_4=new xxkk(xxk_4,xxk1_4,h3_4,ul_4,li_4,span_4,0,titspan_4);

var xxk_3=document.querySelectorAll(".xxkbox .xxk")
var xxk1_3=document.querySelectorAll(".xxkbox .xxk .xxk1")
var h3_3=document.querySelectorAll(".xxkbox .xxk .xxk1 h3")
var span_3=document.querySelectorAll(".xxkbox .xxk .xxk1 h3 span")
var ul_3=document.querySelectorAll(".nav-con .navbigbox .xxk .xxk1 ul")
var li_3=document.querySelectorAll(".xxkbox .xxk .xxk1 ul li")
var titspan_3=document.querySelectorAll(".nav-con .navtit span")


var xuanxk_3=new xxkk(xxk_3,xxk1_3,h3_3,ul_3,li_3,span_3,0,titspan_3);
