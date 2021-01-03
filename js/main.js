const btnStart = document.querySelector('.start-btn');
const btnStop = document.querySelector('.stop-btn');
const btnHard = document.querySelector('.hard-option');
const btnSoft = document.querySelector('.soft-option');
const counterBox = document.querySelector('.counter-box');
const btnReset = document.querySelector('.reset-btn');
const btnContinue = document.querySelector('.continue-btn');
const btnEnd = document.querySelector('.end-btn');

const startingHard = 10;
const startingSoft = 3;
let index;
let boilOption = 0;
let time;
let resetValue = false;
let stopValue = false;


const checkOptionBoil = function(e){
	if(e.target.className === "hard-option btn"){
		boilOption = 1;
		time = startingHard*60; 
	}
	if(e.target.className === "soft-option btn"){
		boilOption = 2;
		time = startingSoft*60; 
	}
}


const Timer = function(){
	
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;
	--time ;

	counterBox.textContent = `${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`
	
	if((minutes === 0) && (seconds === 0)){
		clearInterval(index);
		btnStart.style.display = "block";
		btnStop.style.display = "none";
		boilOption = 0;
		btnHard.addEventListener("click",checkOptionBoil);
		btnSoft.addEventListener("click",checkOptionBoil);
	}
}

btnHard.addEventListener("click",checkOptionBoil);
btnSoft.addEventListener("click",checkOptionBoil);

btnStart.addEventListener("click", function(e){
	if(boilOption){
		index = setInterval(Timer, 1000);
		btnSoft.removeEventListener("click",checkOptionBoil);
		btnHard.removeEventListener("click",checkOptionBoil);
		btnStart.style.display = "none";
		btnStop.style.display = "block";
		btnEnd.style.display = "block";
	}
	else{
		document.querySelector('.choice-alert').style.display = "block";
		document.querySelector('.opacity').style.display = "block";
	}
})

btnReset.addEventListener('click', function(){
	btnStart.style.display = "block";
	btnStop.style.display = "none";
	btnReset.style.display = "none";
	btnContinue.style.display = "none";
	boilOption = 0;
	btnHard.addEventListener("click",checkOptionBoil);
	btnSoft.addEventListener("click",checkOptionBoil);
	clearInterval(index);
	counterBox.textContent = "00:00"
})

btnStop.addEventListener('click', function(){
	clearInterval(index);
	btnReset.style.display = "block";
	btnContinue.style.display = "block";
	btnStop.style.display = "none";
	btnEnd.style.display = "none";
})

btnContinue.addEventListener('click', function(){
	index = setInterval(Timer, 1000);
	btnContinue.style.display = "none";
	btnStop.style.display = "block";
	btnReset.style.display = "none";
	btnEnd.style.display = "block";
})

btnEnd.addEventListener('click',function(){
	clearInterval(index);
	if(boilOption == 1) time = startingHard*60; 
	if(boilOption == 2) time = startingSoft*60; 
	
	index = setInterval(Timer, 1000);
})

document.querySelector('.back-btn').addEventListener('click',function(){
	document.querySelector('.choice-alert').style.display = "none";
	document.querySelector('.opacity').style.display = "none";
})












