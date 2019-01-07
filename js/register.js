function $(id){
	return document.getElementById(id);
}
$("phone").onblur = function(){
		var reg = /^1[3-9]\d{9}$/i;
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}