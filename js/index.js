var aList = document.querySelectorAll('.nav-list h2');
	var aHide = document.querySelectorAll('.hide');
	var aIcon = document.querySelectorAll('.nav-list i');
	var lastIndex = 0;  
	for (var i = 0; i < aList.length; i++) {
		aList[i].index = i;  
		aList[i].isClick = false; 
		aList[i].onclick = function(){  
				aHide[lastIndex].style.height = '0'; 
			if (this.isClick) { 
				this.isClick = false; 
			}else{  
				aHide[this.index].style.height = 'auto';  
				aList[lastIndex].isClick = false;
				this.isClick = true;
				lastIndex = this.index; 
			};
		}
	};
	
	
