function lixiaoguo(lis, xiaoguo,j) {
	this.lis = lis;
	this.xiaoguo = xiaoguo;
}
lixiaoguo.prototype.init = function () {
	this.bangding();
}

lixiaoguo.prototype.bangding = function () {
	var me=this
	for (i = 0; i < this.lis.length; i++) {
		this.lis[i].onmouseover = function () {
			me.j= parseFloat(this.getAttribute("ll"))
			
			me.dh();
		
		}
	}

}
lixiaoguo.prototype.dh=function(){
	this.xiaoguo.style.left=this.j*133+"px"

}

var lis = document.querySelectorAll(".top-con .top_right ul li")
var xiaoguo = document.querySelector(".top-con .top_right .xiaoguo")
var car1 = new lixiaoguo(lis, xiaoguo,0);
