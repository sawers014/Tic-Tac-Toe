/* -1 no one won, and there are still empty spaces
 1 'X' have won
 2 'O' have won
 0 there are no free square and no one one, so it's a draw 
     TODO make the is_solved to work with char and not let, and make the board be full of chars instead of numbers
     TODO make a condition to check if the user writed something that is not a number
*/
function is_solved(board) {
    let answer= 0
    let empty = 0
        if (board[1][1] == 1 && board[0][0] == 1 && board [2][2] == 1 || board[1][1] == 1 && board[0][2] == 1 && board[2][0] == 1)return 1;
        if (board[1][1] == 2 && board[0][0] == 2 && board[2][2] == 2 || board[1][1] == 2 && board[0][2] == 2 && board[2][0] == 2) return 2;

        for(let x=0; x < 3; x++){
            if (board[x][0] == 1 && board[x][1] == 1 && board[x][2] == 1) return 1;
            if (board[x][0] == 2 && board[x][1] == 2 && board[x][2] == 2) return 2;
            if (board[0][x] == 1 && board[1][x] == 1 && board[2][x] == 1) return 1;
            if (board[0][x] == 2 && board[1][x] == 2 && board[2][x] == 2)return 2;
             
        for(let y=0; y < 3; y++)   
    
            if (board[x][y] == 0) empty += 1;
    }
        if (empty > 0) answer =-1;
    return answer;
    }
    
    let board = new Array(3); // first array equivalent to rows 
        for(i=0; i<board.length; i++) {   // inner array equivalent to columns
            board[i] = new Array(3);
        }
    board =[
        [0,0,0],
        [0,0,0],
        [0,0,0]
        ]
    let row, column, choice;

        const prompt = require('prompt-sync')();
        let ch = prompt("write 'x' if you'd like the 'x' to start or type 'o' to make the 'o' start ");
        choice = ch.toLocaleLowerCase()   // so it works even if the user input the choice in UPPERCASE
        console.log(choice)        
    for (let i = 0; i < 9; i++) 
    {
    board.forEach(v=>console.log(...v)); //print the board
        do  {
            row =  Number(prompt("choose a row 1-3 ")); //convert to integer, because by default the input is treated as string
            column= Number(prompt("choose a column 1-3 ")); 
            console.log("int num is" + row)        // round the number so it works if the user input a float number (ex 1.2)     
            try {   //error handler
                if (row>3 || column>3 || row<1 || column<1 )  throw "that position doesn't exist";
                if(board[row - 1][column - 1] != 0 )  throw "that position is not free";
            }
                catch(e) {
                    
                    console.log("Error, " + e)
                    row=4
                    
                }
        } while(row > 3 || column>3) 
        if (choice == 'x') {
            board[row - 1][column - 1] = 1;
            choice = 'o';
        }
        else {
            board[row - 1][column - 1] = 2;
            choice = 'x';
        }
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
