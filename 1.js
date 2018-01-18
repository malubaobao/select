	function aa(pageNo,pageSize){
		var query=`pageNo=${pageNo}&pageSize=${pageSize}`;
		ajax({
			type:"get",
			url:"1.php",
			data:query,
			dataType:"json"
		}).then(resData=>{
			var {pageNo, pageCount, data}=resData; 
			var html="";
			for(var p of data){
				html+=`<li>
					   <img src="${p.uimg}">
					   <p>"${p.uname}"</p>
					   <p>"${p.uintroduce}"</p>
					   <i data-iid="${p.uid}">X</i>
					   </li>`
			}
			document.querySelector(".main .show .ul1").innerHTML=html
			pageNo = parseInt(pageNo);
			pageCount = parseInt(pageCount);
			var html="";
			for(var i=1;i<=pageCount;i++){
				html+=`<li>${i}</li>							
					   `
			}
			document.querySelector(".main .show .ul2").innerHTML=html
			var li=document.querySelectorAll(".main .show .ul2 li")
			for(var l of li){
					l.onclick=function(){
						var pageNo=this.innerHTML;

						aa(pageNo,pageSize);
					}
				}
		})
	}
	var p=document.querySelector(".main .select p")
	p.onclick=function(){
		aa(1,4)
	}