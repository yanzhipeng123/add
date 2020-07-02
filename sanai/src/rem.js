function rem(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth/4+"px";
}
rem();
window.onresize = rem;
//html字体大小为100px