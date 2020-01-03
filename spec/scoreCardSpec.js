describe("createGame", function() {

  it('should return an object', function() {
    let params = new URLSearchParams("file:///Users/eduardkulcsickij-gut/MAKERS/Bowling-challenge/Bowling/ui.html?F1R1=1&F1R2=4&F2R1=4&F2R2=5&F3R1=6&F3R2=4&F4R1=5&F4R2=5&F5R1=10&F5R2=0&F6R1=0&F6R2=1&F7R1=7&F7R2=3&F8R1=6&F8R2=4&F9R1=10&F9R2=0&F10R1=2&F10R2=8&F10R3=6");
    expect(createScoreCard(params)).toEqual([[1,4], [4,5], [6,4], [5,5], [10,0], [0,1], [7,3], [6,4], [10,0], [2,8,6]])
  })
});
