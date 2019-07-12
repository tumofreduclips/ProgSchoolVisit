function GetValues(){
	window.firstNumber = parseInt(document.getElementById('firstNumber').value);
	window.secondNumber = parseInt(document.getElementById('secondNumber').value);
	window.operationSign = document.getElementById('operationSign').value;
}

function CalculateResult(a){
	document.getElementById('result').value = a;
}

function Initialize(){
	document.getElementById('calculate').onclick = function(){
		GetValues();
	}
}

Initialize();
