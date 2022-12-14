#include <cctype>
#include<iostream>
using namespace std;
// -1 no one won, and there are still empty spaces
// 1 'O' have won
// 2 'O' have won
// 0 there are no free square and no one one, so it's a draw
//TODO make the is_solved to work with char and not int, and make the board be full of chars instead of numbers
int is_solved(int board[3][3]) {
    int answer= 0;
    int empty = 0;
    if (board[1][1] == 1 && board[0][0] == 1 && board [2][2] == 1 || board[1][1] == 1 && board[0][2] == 1 && board[2][0] == 1)return 1;
    if (board[1][1] == 2 && board[0][0] == 2 && board[2][2] == 2 || board[1][1] == 2 && board[0][2] == 2 && board[2][0] == 2) return 2;

    for(int x=0; x < 3; x++){
        if (board[x][0] == 1 && board[x][1] == 1 && board[x][2] == 1) return 1;
        if (board[x][0] == 2 && board[x][1] == 2 && board[x][2] == 2) return 2;
        if (board[0][x] == 1 && board[1][x] == 1 && board[2][x] == 1) return 1;
        if (board[0][x] == 2 && board[1][x] == 2 && board[2][x] == 2)return 2;
             
        for(int y=0; y < 3; y++)   
            if (board[x][y] == 0) empty += 1;
    }
    if (empty > 0) answer =-1;
    return answer;
    }
int main(){
    int solved;
    int board[3][3] = {
        {0, 0, 0},
        {0, 0, 0},
        {0, 0, 0},
        
    };
    int line, column;
    char choice;
            cout<<"write 'x' if you'd like the 'x' to start or type 'o' to make the 'o' start ";
             cin>>choice;
             choice=tolower(choice);// so it works even if the user input the choise in UPPERCASE
    for(int i=0; i < 9; i++) {
             for(int i=0; i < 3; i++) { //print the board
                for(int j=0; j < 3; j++){
                    cout<<board[i][j];
                }
                cout<<endl;
                }
                
             cout<<"choose a line 1-3 ";
             cin>>line;
             cout<<"choose column 1-3 ";
             cin>>column;
             
             if (choice=='x') {
                 board[line-1][column-1]=1;
                 choice='o';
                }
             else {
                 board[line-1][column-1]=2;
                 choice='x'; 
                }
            solved=is_solved(board);
            switch (solved) {
                case 1:
                    cout<<"The 'x' have won ";
                    return 0;
                    break;
                
                case 2:
                    cout<<"The 'o' have won";
                    return 0;
                    break;
                case 0:
                    cout<<"draw";
                    return 0;
                    break;
            }
        }
    return 0;
}
