let ctx = canvas.getContext("2d");

let stadium = new Image(); 
stadium.src = 'stadium.jpg';

let ball = new Image();
ball.src = 'basketball.png';

let player = new Image();
player.src = 'player.png';

function parabolicParameters()
{
	let parameters = math.lusolve([ [ Math.pow(player.ball.posX,2),player.ball.posX,1], [ Math.pow(canvas.width*0.5,2),canvas.width*0.5,1], [ Math.pow(canvas.height,2),canvas.height,1] ], [player.ball.posY, canvas.height*0.1, 143]);
	return { a: parameters[0], b: parameters[1], c: parameters[2] };
}

player.throw = function()
{
	if ( player.ball != null )
	{
		let equation = parabolicParameters();

		player.ball.movingEffect = x => Math.round( Number(equation.a*x*x) + Number(equation.b*x) + Number(equation.c));
		player.ball.speed = 4;
	}	
}

player.walkForward = function()
{
	player.speed = 1;

    ( player.ball != null )? ball.speed = 1 : null;
}

player.walkBackward = function()
{
    player.speed = -1; 

    ( player.ball != null )? ball.speed = -1 : null;
}

player.stop = function()
{
	player.speed = 0;

    ( player.ball != null )? ball.speed = 0 : null;
}

function updateRender()
{
	//update images
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(stadium,0,0,canvas.width, canvas.height);
	ctx.drawImage(player,player.posX,player.posY);
	ctx.drawImage(ball, ball.posX, ball.posY, 32, 32);

	//apply movement
	ball.posX += ball.speed;
	ball.posY = ball.movingEffect(ball.posX);

	player.posX += player.speed;
}

function resetScena()
{
	ball.posX=122;
	ball.posY=270;
	ball.speed=0;
	ball.movingEffect = x => ball.posY;

	player.posX = 88;
	player.posY = 300;
	player.speed = 0;
	player.movingEffect = x => player.posY;

	player.ball = ball;
}

left.addEventListener('mouseup', player.stop );
left.addEventListener('touchstart', player.walkBackward );
left.addEventListener('mousedown', player.walkBackward );

right.addEventListener('mouseup', player.stop );
right.addEventListener('touchstart', player.walkForward );
right.addEventListener('mousedown', player.walkForward );

play.addEventListener('click', player.throw );

reset.addEventListener('click', resetScena );

resetScena();

setInterval(updateRender, 10);

