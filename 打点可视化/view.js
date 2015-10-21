(function addParam(){
    console.log("start");

   	var obody = $("document");
   	var eles = document.querySelectorAll('*[data-domdot]');

   	 var addEle = document.createElement("span");
   	 addEle.className = "zhangjh";
   	 addEle.style.background = "red";
   	 addEle.style.height = "5px";
   	 addEle.style.width = "5px";
   	 addEle.style.position = "absolute";
   	for(var i=0,j=eles.length;i<j;i++){
   		eles[i].parentNode.appendChild(addEle);
   		console.log("test");
   	}
})();