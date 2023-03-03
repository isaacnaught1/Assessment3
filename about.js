console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert ('form submitted')
	
}
function mouseDuck(e){
	e.preventDefault()
	alert ('You Can Do It!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
document.querySelector('.ducky').addEventListener('mouseover', mouseDuck )