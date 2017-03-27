(function() {
// Initialize Firebase
var config = {
	apiKey: "AIzaSyBp7xXz6I76P6scEaSo6fRIyp_HKxrQE2U",
	authDomain: "fanbase-47b85.firebaseapp.com",
	databaseURL: "https://fanbase-47b85.firebaseio.com",
	storageBucket: "fanbase-47b85.appspot.com",
	messagingSenderId: "1028942516030"
};
firebase.initializeApp(config);


//Get Elements Fan
const txtEmailFan = document.getElementById('txtEmailFan');
const txtPasswordFan = document.getElementById('txtPasswordFan');
const btnLoginFan = document.getElementById('btnLoginFan');
const btnSignUpFan = document.getElementById('btnSignUpFan');
const btnLogouanFN = document.getElementById('btnLogoutFan');

//Get Elements Art
const txtEmailArt = document.getElementById('txtEmailArt');
const txtPasswordArt = document.getElementById('txtPasswordArt');
const btnLoginArt = document.getElementById('btnLoginArt');
const btnSignUpArt = document.getElementById('btnSignUpArt');
const btnLogouanArt= document.getElementById('btnLogoutArt');

//Add Login Event Fan
btnLoginFan.addEventListener('click', e=> {
	const emailF = txtEmailFanL.value;
	const passPF = txtPasswordFanL.value;
	const authF = firebase.auth();
//Sign In Fan
const promiseF = authF.signInWithEmailAndPassword(emailF,passPF);
promiseF.catch(e => console.log(e.message));
});

//Add Login Event Artist
btnLoginArt.addEventListener('click', e=> {
	const emailA = txtEmailArtL.value;
	const passPA = txtPasswordArtL.value;
	const authA = firebase.auth();
//Sign In Artist
const promiseA = authA.signInWithEmailAndPassword(emailA,passPA);
promiseA.catch(e => console.log(e.message));
});


//Add SignUp Event Fan
btnSignUpFan.addEventListener('click', e=> {
	const emailF = txtEmailFan.value;
	const passPF = txtPasswordFan.value;
	const authF = firebase.auth();

	const promiseF = authF
		.createUserWithEmailAndPassword(emailF,passPF)
		.then(function(){
			window.location.href = 'Registration_Fan.html';
		})
		.catch(e => console.log(e.message));
});

//Add SignUp Event Artist
btnSignUpArt.addEventListener('click', e=> {
	const emailA = txtEmailArt.value;
	const passPA = txtPasswordArt.value;
	const authA = firebase.auth();

	const promiseA = authA
		.createUserWithEmailAndPassword(emailA,passPA);
		then(function(){
			window.location.href = 'Registration_Artist.html';
		})
		.catch(e => console.log(e.message));
});

//Log out Fan
btnLogouanFN.addEventListener('click', e=> {
	firebase.auth().signOut();
});

//Log out Artist
btnLogouanArt.addEventListener('click', e=> {
	firebase.auth().signOut();
});

//Add a realtime auth listener fan
firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser) {
		console.log(firebaseUser);
		btnLogouanFN.classList.remove('hide');
	}else{
		console.log('logged out');
		btnLogouanFN.classList.add('hide');
	}
});

firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser) {
		console.log(firebaseUser);
		btnLogouanArt.classList.remove('hide');
	}else{
		console.log('logged out');
		btnLogouanArt.classList.add('hide');
	}
});

}()); /* end firebase */

function confirmEmailF() {
	var emailF = document.getElementById("txtEmailFan").value;
	var conflF = document.getElementById("confemailF").value;
	if(emailF != conflF) {
		alert('Email Not Matching!');
	}
}

function confirmEmailA() {
	var emailA = document.getElementById("txtEmailArt").value;
	var conflA = document.getElementById("confemailA").value;
	if(emailA != conflA) {
		alert('Email Not Matching!');
	}
}
