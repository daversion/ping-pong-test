// Numbers divisible by 3 are replaced with "ping"
// Numbers divisible by 5 are replaced with "pong"
// Numbers divisible by 15 are replaced with "pingpong"
// Else return the number itself

describe('evaluateReplacement', function() {
  it("returns 'ping' if is divisible by 3", function() {
    expect(evaluateReplacement(9)).to.equal("Ping");
  });
});
