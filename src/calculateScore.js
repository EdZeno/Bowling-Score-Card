"use strict";

let calculateScore = function(input) {
  let scoreByFrames = [input[9].reduce((a, b) => a + b, 0)];

  for (let i = 0; i < 9; i++) {
    if (input[i][0] === 10) {
      scoreByFrames.push(10 + input[i+1][0] + input[i+1][1])
    }
    else if (input[i][0] + input[i][1] === 10) {
      scoreByFrames.push(10 + input[i+1][0])
    }
    else {
      scoreByFrames.push(input[i].reduce((a, b) => a + b, 0))
    }
  }

  let totalScore = scoreByFrames.reduce((a, b) => a + b, 0)

  // console.log(scoreByFrames)
  // console.log(totalScore)
  return totalScore
}
