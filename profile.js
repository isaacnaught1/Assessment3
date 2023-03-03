let myColor = document.getElementById('color')
let myPlace = document.getElementById('place')
let myRit =document.getElementById('ritual')

function mouseColor(e){
	e.preventDefault()
	alert ('Forrest Green')
}

function mousePlace(e){
        e.preventDefault()
        alert ('The deer woods')
}

function mouseRitual(e){
            e.preventDefault()
            alert ('Getting snack at the dollar store before any road trip')
}


myColor.addEventListener('click', mouseColor )
myPlace.addEventListener('click', mousePlace )
myRit.addEventListener('click', mouseRitual )
