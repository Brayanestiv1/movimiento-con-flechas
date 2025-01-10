const player = document.getElementById('bola')
let movX = 0
let movY = 0



document.addEventListener('keydown', e => {
	playerMove(e)
})


const playerMove = (e) => {
	if(e.key == 'ArrowUp'){
		movY -= 10
	}
	if(e.key == 'ArrowDown'){
		movY += 10
	}
	if(e.key == 'ArrowLeft'){
		movX -= 10
	}
	if(e.key == 'ArrowRight'){
		movX += 10
	}
	player.style.transform = `translate(${movX}px, ${movY}px)`
}