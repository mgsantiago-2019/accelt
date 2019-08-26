let ctx = canvas.getContext("2d");

let stadium = new Image(); 
stadium.src = 'stadium.jpg';

let ball;
let player;


function updateRender()
{
	//update images
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(stadium,0,0,canvas.width, canvas.height);
	
}

function resetScena()
{
	
}

left.addEventListener('mouseup', action => {} );
left.addEventListener('touchstart', action => {} );
left.addEventListener('mousedown', action => {} );

right.addEventListener('mouseup', action => {} );
right.addEventListener('touchstart', action => {} );
right.addEventListener('mousedown', action => {} );

play.addEventListener('click', action => {} );

reset.addEventListener('click', resetScena );

resetScena();

setInterval(updateRender, 10);

