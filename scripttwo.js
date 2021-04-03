let Secretnumber = getRandomInt(1, 5);
let attempts = 3;
//комментируя вызов увидим когда работает функция
function getRandomInt(min, max){
	//console.log(min);
	//console.log(max);
	return Math.floor(Math.random()*(max - min + 1)) + min;
}
document.querySelector(".check").onclick = function(){

	let Usernumber = document.querySelector(".number").value;

	attempts = attempts - 1;
	//console.log(attempts);
    document.querySelector(".attempts").innerHTML = attempts;

	if (attempts == 0) {
		document.querySelector(".check").disabled = true;
		document.querySelector(".number").disabled = true;
	}

document.querySelector(".start").onclick = function(){

	Secretnumber = getRandomInt(1, 5);

	attempts = 3;

	document.querySelector(".attempts").innerHTML = attempts;
	document.querySelector(".check").disabled = false; 
	document.querySelector(".number").disabled = false; 
	document.querySelector(".number").value = "";
	document.querySelector(".number").focus();
	document.querySelector(".hint"). innerHTML = "Я буду подсказывать"

}

	if (Usernumber == Secretnumber) {
		//console.log("Вы угадали!!")
		document.querySelector(".hint").innerHTML = "Вы угадали!!";
		alert("Вам на счёт зачислен $1000000!!!")
		document.querySelector(".number").disabled = true;
		document.querySelector(".check").disabled = true;
	}

	if (Usernumber < Secretnumber) {
		//console.log("Секретное число больше")
		document.querySelector(".hint").innerHTML = "Cекретное число больше";
	}

	if (Usernumber > Secretnumber) {
		//console.log("Секретное число меньше")
		document.querySelector(".hint").innerHTML = "Секретное число меньше";
	}

}