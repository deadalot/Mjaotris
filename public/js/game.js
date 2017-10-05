console.log("Mjaotris v 0.01");

const canvas = document.getElementById("mjaotris");
const context = canvas.getContext("2d");
context.scale(20, 20);

let lastTime = 0;

function update(time = 0) {
    dt = time - lastTime;
    lastTime = time; 
    
    if(player.dropBlock(dt)){
        console.log(arena.collision(player.block, player.pos));
    }
    

    render();
    requestAnimationFrame(update);
}

function render() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(player.block, player.pos);
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = 'red';
                context.fillRect(x + offset.x, 
                                 y + offset.y, 
                                 1, 1);
                
            }
        });
    });
};



const player = new Player;
const arena = new Arena;

document.addEventListener('keydown', event => {
    //console.log(event.keyCode);
    switch(event.keyCode){
        case 65 :   player.pos.x--; //left [a]
                    break;   
        case 68 :   player.pos.x++; //left [d]                    
                    break;         
        case 87 :   player.rotateBlock() //rotate [w]   
                    break;           
        case 83 :   player.dropBlock(null) //drop [s]                     
                    break;         
    }
})

update();


