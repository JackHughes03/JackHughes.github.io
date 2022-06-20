function myFunction() {
	const dots = document.getElementById("readmore");
	const moreText = document.getElementById("more");
	const btnText = document.getElementById("but");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
	}
}

/*
function darkmode() {
	const title = document.getElementById('title');
	const rightback = document.getElementById('rightback');
	rightback.style.transition = 'all 1s';
	title.style.transition = 'all 1s';
	document.body.style.transition = 'all 1s';

	if(document.body.style.backgroundColor == 'rgb(76, 76, 76)') {
		title.style.color = 'white';
		rightback.style.color = 'rgb(76, 76, 76)';
		document.body.style.backgroundColor = 'white';
	} else {
		rightback.style.color = 'white';
		title.style.color = 'rgb(76, 76, 76)';
		document.body.style.backgroundColor = 'rgb(76, 76, 76)';
	}
}
*/

function expandcode() {
	const codeexpand = document.getElementById('codeexpand');
	const codeexpandbutton = document.getElementById('codeexpandbutton');

	if(codeexpand.style.display == 'block') {
		codeexpandbutton.innerHTML = 'Code';
		codeexpand.style.display = 'none';
		codeexpandbutton.style.backgroundColor = 'white';
	} else {
		codeexpandbutton.style.backgroundColor = 'lightCoral';
		codeexpandbutton.innerHTML = 'Collapse';
		codeexpand.style.display = 'block';
	}
}

function expandmusic() {
	const musicexpand = document.getElementById('musicexpand');
	const musicexpandbutton = document.getElementById('musicexpandbutton');

	if(musicexpand.style.display == 'block') {
		musicexpandbutton.innerHTML = 'Music';
		musicexpand.style.display = 'none';
		musicexpandbutton.style.backgroundColor = 'white';
	} else {
		musicexpandbutton.style.backgroundColor = 'lightCoral';
		musicexpandbutton.innerHTML = 'Collapse';
		musicexpand.style.display = 'block';
	}
}

function expandgym() {
	const gymexpand = document.getElementById('gymexpand');
	const gymexpandbutton = document.getElementById('gymexpandbutton');

	if(gymexpand.style.display == 'block') {
		gymexpandbutton.innerHTML = 'Gym';
		gymexpand.style.display = 'none';
		gymexpandbutton.style.backgroundColor = 'white';
	} else {
		gymexpandbutton.style.backgroundColor = 'lightCoral';
		gymexpandbutton.innerHTML = 'Collapse';
		gymexpand.style.display = 'block';
	}
}

function expandgcse() {
	const gcseexpand = document.getElementById('gcseexpand');
	const gcseexpandbutton = document.getElementById('gcseexpandbutton');

	if(gcseexpand.style.display == 'block') {
		gcseexpandbutton.innerHTML = 'GCSEs';
		gcseexpand.style.display = 'none';
		gcseexpandbutton.style.backgroundColor = 'white';
	} else {
		gcseexpandbutton.style.backgroundColor = 'lightCoral';
		gcseexpandbutton.innerHTML = 'Collapse';
		gcseexpand.style.display = 'block';
	}
}

function expandalevel() {
	const alevelexpand = document.getElementById('alevelexpand');
	const alevelexpandbutton = document.getElementById('alevelexpandbutton');

	if(alevelexpand.style.display == 'block') {
		alevelexpandbutton.innerHTML = 'A-Levels';
		alevelexpand.style.display = 'none';
		alevelexpandbutton.style.backgroundColor = 'white';
	} else {
		alevelexpandbutton.style.backgroundColor = 'lightCoral';
		alevelexpandbutton.innerHTML = 'Collapse';
		alevelexpand.style.display = 'block';
	}
}

function expanddegree() {
	const degreeeexpand = document.getElementById('degreeexpand');
	const degreeexpandbutton = document.getElementById('degreeexpandbutton');

	if(degreeexpand.style.display == 'block') {
		degreeexpandbutton.innerHTML = 'Degrees';
		degreeexpand.style.display = 'none';
		degreeexpandbutton.style.backgroundColor = 'white';
	} else {
		degreeexpandbutton.style.backgroundColor = 'lightCoral';
		degreeexpandbutton.innerHTML = 'Collapse';
		degreeexpand.style.display = 'block';
	}
}

function expandmusicacademy() {
	const musicacademyexpand = document.getElementById('musicacademyexpand');
	const musicacademyexpandbutton = document.getElementById('musicacademyexpandbutton');

	if(musicacademyexpand.style.display == 'block') {
		musicacademyexpandbutton.innerHTML = 'Music Academy';
		musicacademyexpand.style.display = 'none';
		musicacademyexpandbutton.style.backgroundColor = 'white';
	} else {
		musicacademyexpandbutton.style.backgroundColor = 'lightCoral';
		musicacademyexpandbutton.innerHTML = 'Collapse';
		musicacademyexpand.style.display = 'block';
	}
}

function expandentrepreneurship() {
	const entrepreneurshipexpand = document.getElementById('entrepreneurshipexpand');
	const entrepreneurshipexpandbutton = document.getElementById('entrepreneurshipexpandbutton');

	if(entrepreneurshipexpand.style.display == 'block') {
		entrepreneurshipexpandbutton.innerHTML = 'Entrepreneurship';
		entrepreneurshipexpand.style.display = 'none';
		entrepreneurshipexpandbutton.style.backgroundColor = 'white';
	} else {
		entrepreneurshipexpandbutton.style.backgroundColor = 'lightCoral';
		entrepreneurshipexpandbutton.innerHTML = 'Collapse';
		entrepreneurshipexpand.style.display = 'block';
	}
}

function expandfreeguitarlessons() {
	const freeguitarlessonsexpand = document.getElementById('freeguitarlessonsexpand');
	const freeguitarlessonsexpandbutton = document.getElementById('freeguitarlessonsexpandbutton');

	if(freeguitarlessonsexpand.style.display == 'block') {
		freeguitarlessonsexpandbutton.innerHTML = 'Free guitar lessons';
		freeguitarlessonsexpand.style.display = 'none';
		freeguitarlessonsexpandbutton.style.backgroundColor = 'white';
	} else {
		freeguitarlessonsexpandbutton.style.backgroundColor = 'lightCoral';
		freeguitarlessonsexpandbutton.innerHTML = 'Collapse';
		freeguitarlessonsexpand.style.display = 'block';
	}
}

function email() {
	window.location.href = 'mailto:jwhughes03@yahoo.com';
}

function expandleftbutton() {
	const expandleft = document.getElementById('expandleft');

	if(leftback.style.left == '-200px') {
		leftback.style.left = '0px';
		rightback.style.left = '200px';
	} else {
		rightback.style.left = '0px';
		leftback.style.left = '-200px';
	}
}

function expandpersonalstatement() {
	const personalstatementexpand = document.getElementById('personalstatementexpand');
	const personalstatementexpandbutton = document.getElementById('personalstatementexpandbutton');

	if(personalstatementexpand.style.display == 'block') {
		personalstatementexpandbutton.innerHTML = 'Personal statement';
		personalstatementexpand.style.display = 'none';
		personalstatementexpandbutton.style.backgroundColor = 'white';
	} else {
		personalstatementexpandbutton.style.backgroundColor = 'lightCoral';
		personalstatementexpandbutton.innerHTML = 'Collapse';
		personalstatementexpand.style.display = 'block';
	}
}

function help() {
	const helpexpand = document.getElementById('helpexpand');

	if(helpexpand.style.display == 'block') {
		helpexpand.style.display = 'none';
	} else {
		helpexpand.style.display = 'block';
	}
}
function check() {
	var password = document.getElementById("pswd").value;
	var passwordunlock = document.getElementById("passwordunlock");
	
	if (password == 'd') {
		leftback.style.filter = 'blur(0px)';
		h1titlecv.style.filter = 'blur(0px)';
		rightback.style.filter = 'blur(0px)';

		leftback.style.pointerEvents = 'auto';
		h1titlecv.style.pointerEvents = 'auto';
		rightback.style.pointerEvents = 'auto';

		passwordunlock.style.display = 'none';
	}
	else{
		alert("Incorrect, try again.");
	}
}

const leftback = document.getElementById('leftback');
const h1titlecv = document.getElementById('h1titlecv');
const rightback = document.getElementById('rightback');