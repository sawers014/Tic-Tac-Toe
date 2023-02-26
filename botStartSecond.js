/* -1 no one won, and there are still empty spaces
 1 'X' have won (so the bot WON)
 2 'O' have won (you won)
 0 there are no free square and no one one, so it's a draw 
*/
function IA(board) {
    if(round==1) {

            if(board[1][1]== 0 ) board[1][1]=2 
            else board[2][0]=2; // if the other corner is not free, the second best choice is to pick the center(we have won)     
    }
    else if (round == 2) {
            if(board[1][1]==2) { //the bot has the center
                if(board[0][0]==1) {
                    //[1,?,?],
                    //[?,2,?],
                    //[?,?,?]  
                    if(board[0][2] == 1)board[0][1]=2
                    else if(board[2][0] == 1) board[1][0]=2
                    else if(board[0][1] == 1 ) board[0][2]=2
                    else if (board[1][0] == 1) board[2][0]=2
                    else if(board[2][2] ==1 || board[1][2]== 1 && board[0][1]==0) board [0][1]=2
                    else if(board[2][1]==1) board[1][0]=2
                    else board[1][2]=2
                }
                else if(board[2][2]== 1) {
                    //[?,?,?],
                    //[?,2,?],
                    //[?,?,1]  
                    if(board[0][2] == 1) board[1][2]=2
                    else if(board[2][0]==1) board[2][1]=2
                    else if (board[1][2]==1) board[0][2]=2
                    else if(board[2][1]==1) board[2][0]=2
                    else if(board[0][1]==1 ) board[1][0]=2
                    else if(board[1][0]==1) board[0][1]=2 //y do they play this       
                }
                else if(board[0][2]==1) {
                    //[?,?,1],
                    //[?,2,?],
                    //[?,?,?]          
                    if(board[2][0]==1) board[0][1]=2
                    else if (board[2][1]==1) board[0][1]=2
                    else if(board[0][1]==1) board[0][0]=2
                    else if(board[1][2]==1) board[2][2]=2
                    else if(board[1][0]==1) board[0][0]=2
                }
                else if(board[2][0]==1 && board[1][0]==1) board[0][0]=2
                else if(board[0][1]==1 || board[1][2]==1 || board[1][0]==1 || board[2][1]==1) board[0][2]=2 
            }
            else if(board[1][1]==1) {
                    //[?,?,?],
                    //[?,1,?],
                    //[2,?,?] 
                    if(board[0][0]==1)board[2][2]=2
                    else if(board[0][1]==1)board[2][1]=2
                    else if(board[0][2]==1)board[0][0]=2 //why would someone chose that?
                    else if(board[1][0]==1)board[1][2]=2
                    else if(board[1][2]==1)board[1][0]=2
                    else if(board[2][1]==1)board[0][1]=2
                    else if(board[2][2]==1)board[0][0]=2
            }
        }    
    else if(round == 3) {
                if(board[1][1]==2) {//got the center       
                    //[?,?,?],
                    //[?,2,?],
                    //[?,?,?]
                    if(board[0][2]==2 && board[2][0] == 0)board[2][0]=2
                    else if(board[0][0]==2 && board[2][2]==0)board[2][2]=2
                    else if(board[1][2]==2 && board[1][0]==0) board[1][0]=2
                    else if(board[2][0]==2 && board[0][2]==0)board[0][2]=2
                    else if(board[2][2]==2 && board[0][0]==0) board[0][0]=2
                    else if(board[0][1]==2 && board[2][1]==0)board[2][1]=2
                    else if(board[1][0]==2 && board[1][2]==0)board[1][2]=2
                    else if(board[2][1]==2 && board[0][1]==0)board[0][1]=2
                    else if(board[2][0]==1 && board[1][0]==1 && board[0][0]==0)board[0][0]=2
                    else if(board[0][1]==1 && board[1][2]==1 && board[2][2]==0)board[2][2]=2
                    else {// we got the center and the user didn't let us a free win
                      
                        if(board[0][0]==1) {
                            if(board[0][2]==1 && board[0][1]==0) board[0][1]=2
                            else if(board[2][0]==1 && board[1][0]==0) board[1][0]=2
                            else if(board[0][1]==1 && board[0][2]==0) board[0][2]=2
                            else if(board[2][2]==0)board[2][2]=2                
                        }
                        if(board[2][2]==1) {
                            
                            if(board[0][2]==1 && board[1][2]==0)board[1][2]=2
                            else if(board[2][0]==1 && board[2][1]==0)board[2][1]=2
                            else if(board[2][1]==1 && board[2][0]==0)board[2][0]=2
                            else if(board[1][2]==1 && board[0][2]==0)board[0][2]=2
                            
                            else if(board[0][0]==0)board[0][0]=2
                            else if(board[0][2]==0)board[0][2]=2 
                        }
                        else if(board[2][0]==1){
                            if(board[2][1]==1 && board[2][2]==0)board[2][2]=2
                        }                      
                    }
                }
                else {  //we got no center
                    if(board[2][2]==2 && board[2][1]==0)board[2][1]=2   //check the insta win
                    else if(board[2][1]==2 && board[2][2]==0)board[2][2]=2
                    else if(board[1][0]==2 && board[0][0]==0)board[0][0]=2
                    else if(board[0][0]==2 && board[2][0]==2 && board[1][0]==0)board[1][0]=2
                    
                    else if(board[2][2]==1 && board[0][0]==0)board[0][0]=2  //block the corner attack

                    else if(board[2][1]==1 && board[0][1]==0)board[0][1]=2  //block the non-corner attacks
                    else if(board[1][0]==1 && board[1][2]==0)board[1][2]=2 
                    else if(board[0][0]==1){
                        
                        if(board[2][2]==0) board[2][2]=2
                        else if(board[0][2]==1 && board[0][1]==0)board[0][1]=2
                    }
                    else if(board[0][1]==1 && board[1][0]==1)board[2][1]=2 //what is this move?        
                }
    }
    else if(round==4) {
        
        if(board[1][1]==2){//got the center
            
            if(board[1][0]==2 && board[1][2]==0)board[1][2]=2//check for a instant win
            else if(board[0][0]==2 && board[0][1]==0 && board[0][2]==2)board[0][1]=2
            else if(board[1][0]==0 && board[1][2]==2)board[1][0]=2
            else if(board[0][1]==2 && board[2][1]==0)board[2][1]=2
            else if(board[0][1]==0 && board[2][1]==2)board[0][1]=2
            else if(board[0][2]==2 && board[2][0]==0)board[2][0]=2
            else if(board[0][2]==0 && board[2][0]==2)board[0][2]=2
            else if(board[0][2]==2 && board[2][2]==2 && board[1][2]==0)board[1][2]=2
            else if(board[2][2]==2 && board[0][0]==0)board[0][0]=2
            else if(board[0][0]==2 && board[2][2]==0)board[2][2]=2
            else if(board[0][0]==2 && board[0][2]==0)board[0][2]=2
            
            else {  //no free win
                if(board[0][2]==1 ) {
                    if(board[1][2]==1 && board[2][2]==0)board[2][2]=2
                    else if(board[2][2]==1 && board[1][2]==0)board[1][2]=2
                    else if(board[0][0]==1 && board[0][1]==0)board[0][1]=2 
                }
                if(board[0][0]==1) {
                    
                    if(board[0][1]==1 && board[0][2]==0)board[0][2]=2
                    else if(board[2][0]==0)board[2][0]=2
                    else if(board[1][0]==0 && board[2][0]==1)board[1][0]=2
                    else if(board[0][1]==0)board[0][1]=2
                    else if(board[1][0]==0 && board[2][0]==0)board[2][0]=2
                    else if(board[2][1]==0 && board[2][2]==0)board[2][2]=2
                             
                }
                if(board[2][2]==1){
                    if(board[2][0]==1 && board[2][1]==0)board[2][1]=2
                    else if(board[2][0]==0 )board[2][0]=2
                    else if(board[2][1]==0)board[2][1]=2
                }
                if(board[0][0]==0 && board[0][1]==0)board[0][0]=2
                else if(board[1][0]==0 && board[1][2]==0)board[1][0]=2    
            }
        }
        else {  //the user has the center
            if(board[0][1]==1 && board[2][1]==0) board[2][1]=2
            else if(board[2][2]==2 && board[1][2]==2 && board[0][2]==0)board[0][2]=2
            else if(board[0][0]==0 && board[2][2]==1)board[0][0]=2
            else if(board[0][1]==0 && board[2][1]==1) board[0][1]=2
            else if(board[1][0]==1 && board[1][2]==0)board[1][2]=2
            else if(board[1][0]==0 && board[1][2]==1)board[1][0]=2
            else if(board[2][2]==2 && board[2][1]==0)board[2][1]=2
            else if(board[2][0]==2 && board[2][1]==2 && board[2][2]==0)board[2][2]=2
            
            else if(board[0][1]==0) board[0][1]=2
            else if(board[1][0]==0) board[1][0]=2
        }
    }
}
function is_solved(board) {
    let answer= 0
    let empty = 0
        if (board[1][1] == 1 && board[0][0] == 1 && board[2][2] == 1 || board[1][1] == 1 && board[0][2] == 1 && board[2][0] == 1) return 1;
        if (board[1][1] == 2 && board[0][0] == 2 && board[2][2] == 2 || board[1][1] == 2 && board[0][2] == 2 && board[2][0] == 2) return 2;

        for(let x=0; x < 3; x++){
            if (board[x][0] == 1 && board[x][1] == 1 && board[x][2] == 1) return 1;
            if (board[x][0] == 2 && board[x][1] == 2 && board[x][2] == 2) return 2;
            if (board[0][x] == 1 && board[1][x] == 1 && board[2][x] == 1) return 1;
            if (board[0][x] == 2 && board[1][x] == 2 && board[2][x] == 2) return 2;        
        for(let y=0; y < 3; y++)   
    
            if (board[x][y] == 0) empty += 1;
    }
        if (empty > 0) answer =-1;
    return answer;
    }
   
    console.log("You are gonna play as the 'X', so you will make the first move. 'X' are '1'. therefore 'O' are 2, '0' means that the box is empty")
    //explain to the user
    board =[    
        [0,0,0],
        [0,0,0],
        [0,0,0]
        ]
    let row, column,  round=0
        const prompt = require('prompt-sync')();

    for (let i = 0; i < 9; i++) {
        board.forEach(v=>console.log(...v)); //print the board
        do  {
            row =  Number(prompt("choose a row 1-3 ")); //convert to integer, because by default the input is treated as string
            column= Number(prompt("choose a column 1-3 "));    

            try {   //error handler
                if (row>3 || column>3 || row<1 || column<1 )  throw "that position doesn't exist";
                if(board[row - 1][column - 1] != 0 )  throw "that position is not free";
            }
                catch(e) {
                    console.log("Error, " + e)
                    row=4
                }
        } while(row > 3 || column>3)
            board[row - 1][column - 1] = 1; //user move
            round++; //increase  every time the user makes a move
            IA(board, round)
        switch (is_solved(board)) {
            case 1:
                console.log("The 'x' have won ")
                return 0;
            case 2:
                console.log("The 'o' have won")
                return 0;
            case 0:
                console.log("it's a draw")
                return 0;
        }
    }
