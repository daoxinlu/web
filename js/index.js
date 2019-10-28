var tabs=document.getElementById("tabs").getElementsByTagName("li");

for(let i=0;i<tabs.length;i++){
	tabs[i].onclick = showgoods;
}

function showgoods(){
	for(let i=0;i<tabs.length;i++){
		console.log(tabs.length)
		if(tabs[i]===this){
			tabs[i].className="active";
		}else{
			tabs[i].className="";
		}
	}
}