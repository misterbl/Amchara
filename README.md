# Mine Sweeper
*This game is build using Javascript, React and Redux. Enzyme and Chai are used for testing.*

To start the game, clone this Repo, then on the command line navigate to the containing folder.
You need React JS installed on your computer to run this game. Check the official react documentation for more information: https://reactjs.org

Then type:

`$ npm install`

Once all the dependencies are installed, type:

`$ npm run start`

The game should open automatically in your browser (if it doesn't happen, go to http://localhost:3000/ in your browser)

If you want to run the tests, run:

`$ npm run test:unit`


### How To Play
1. Input the configuration of the game you want to play.
For instance: `3 4,*...,..*.,....` will create a game of 3 rows by 4 columns.
A star is where a bomb is. In that example the 1st cell of the first row and the 3rd cell of the second row will have a bomb.
2. Find where the bombs are. And open a cell you think doesn't contain a bomb.
3. If you open a cell that doesn't contain a bomb, it will tell you how many bombs are in the adjacent cells. A green flag means no bomb around, the number "1" means 1 bomb around etc...
4. If you open all the cells except for the bombs, you will win!
