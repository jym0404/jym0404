var listitems = document.querySelectorAll('div');
	for(var i = 0;i<listitems.length; i++) {
	
	listitems[i].addEventListener('click',
	(e)=>{
		if nothover{
			var daedap = prompt("히든코드는?")
			if(daedap == "jym"){
				alert("맞히셨습니다."+"\n"+"축하드립니다.");
			}
			else if(daedap == null){


			}
			else{
				alert("틀리셨습니다."+"\n"+"다시 도전하세요.");

			}
		}
	}

  );
}
var a

	/*listitems.addEventListener('click',
	(e)=>{
		var daedap = prompt("히든코드는?")
		if(daedap == jym){
			alert("맞히셨습니다."+"\n"+"축하드립니다.");
		}
		else if(daedap != jym){
			alert("틀리셨습니다."+"\n"+"다시 도전하세요.")
		}

	}

  );*/
document.getElementsByClass("mouse").onmouseover = function() { nothover = false; }
document.getElementsByClass("mouse").onmouseout  = function() { nothover = true; }
