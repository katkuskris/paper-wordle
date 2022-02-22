# paper-wordle

### Not associated with the New York Times ❤️

**A paper representation of the popular word game that was so 2022.**

[paper-wordle.herokuapp.com](https://paper-wordle.herokuapp.com/)

Each time this page is loaded, it will generate a printable paper-wordle page with two random paper-wordle puzzles to solve. This is not based on the current date.

**Instructions:**
Write your guesses one at at time on the numbered lines for each puzzle. Then, after each guess, find the Guess Grid value associated with each letter (row) in your guess and their corresponding position (column) in the word. If this value shows up in the Clue Grid, a clue (Y or G) will let you know if you're close to the answer.

- If the value from the Guess Grid doesn't appear in the Clue Grid, that means the letter you guessed **doesn't appear** anywhere in the secret word.
- The letter **Y ("Yellow")** in the Clue Grid means the letter you guessed is present in the secret word, but **not in the position you guessed.**
- The letter G ("Green") in the Clue Grid means the letter you guessed is in that **exact position** in the secret word.

You can keep track of which letters you've guessed by marking the alphabet keys in each game, as well as the letters in your guesses. **Draw a box** around your letters to mark them as green, and **circle letters** to mark them as yellow. **Cross out letters** that aren't in the secret word.

Want to play around with it yourself? From the root folder, npm install -> npm start. It will appear on at localhost:3000.

I'm a total n00b and happy to learn, so feel free to hit me up if you have suggestions or ideas. I'm sure there are better ways to build something like this!

![Screenshot of the paper-wordle app](/public/images/screenshot.png)
