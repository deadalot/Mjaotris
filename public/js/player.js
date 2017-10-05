class Player 
{
    constructor() 
    {
        this.pos = {x: 0, y: 0};    
        this.drop = {time: 0, interval:1000};
        this.block = [
            [1,1,1],
            [0,1,0],
            [0,0,0] 
        ]; 
        /**this.block = [
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0],
        ]; **/
    }

   
    dropBlock(dt){        
        if(this.drop.time >= this.drop.interval || dt === null) {
            this.pos.y++;
            this.drop.time = 0;
            return true;
        } else {
            this.drop.time += dt;
            return false;
        }
    }

    rotateBlock(){               
        let newBlock = this.block;

        for(var y = 0; y < this.block.length; y++){            
            for(var x = y +1; x < this.block.length; x++){            
                [
                    this.block[x][y],
                    this.block[y][x],
                ] = [
                    this.block[y][x],
                    this.block[x][y],
                ];
            }
        }

        this.block.reverse();
    }

}
