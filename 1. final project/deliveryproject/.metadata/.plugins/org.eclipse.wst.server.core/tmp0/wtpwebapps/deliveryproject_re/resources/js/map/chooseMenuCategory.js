let code;
let choose;
	function radioCheck(category_code){
			
		code = category_code;
		choose = document.getElementById('choose').value

		choose= category_code;
		
	}
	function onClick(){
		if(choose==""||choose==undefined||choose==null){
						window.reload();

			alert("다시입력해주세요");
		}
		else{
			
			window.close();
		}
	}

	function setChildText(){
		
		
		let popupWidth = 500;
		let popupHeight = 400;
		let left = Math.ceil((window.screen.width-popupWidth)/2);
		let top = Math.ceil((window.screen.height-popupHeight)/2);;
		
		let place_name = document.getElementById('place_name').value;
		let url = "/deli/place/restaurant.dlv?place_name="+place_name+"&code="+code;
		openWin = window.open(url,"parentForm2","width="+popupWidth+",height="+popupHeight+",left="+left+",top="+top+"resizable=yes") 
		
	}