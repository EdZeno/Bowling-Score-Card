"use strict";

let createScoreCard = function(input) {
  let game = []
  input.forEach(function(key) {
    game.push([Number(key)])
  })

  let pinsDown = []
  for (let i = 0; i < 10; i++) {
    pinsDown.push(game[i].concat(game[i+1]))
    game.shift()
  }
  pinsDown[9] = pinsDown[9].concat(game.pop())

  return pinsDown
}
