# This is an application to calculate scores for 10 pin bowling

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Optional Extras

In any order you like:

* Create a nice interactive interface with jQuery.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame
If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.
In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](public/example_ten_pin_scoring.png)

### How to use it?

Clone this repository.  
CD to the root directory and run - npm install.  
Copy the full path of index.html.  
Past it into your favorite browser.  
You will see this:  
![UI Example](public/demo.png)
Fill in the form and click "Calculate".

### How to run the tests?

Copy the full path of SpecRunner.html.  
Past it into a browser.  
You will see passing Jasmine tests:
![JASMINE Example](public/Jasmine.png)

To run eslint run the following commands in the terminal:
- ./node_modules/.bin/eslint src/**  
- ./node_modules/.bin/eslint spec/**  

### How to make it better?

At present it is possible to enter values for a frame that combined are greater than 10 which is
incorrect as each frame has 10 pins.

### PS

Adding up bowling scores turned out to be more challenging than I expected, but it was good fun.

I have tried to build it as simple as possible and I did not want to run it on a server or deploy it. 
