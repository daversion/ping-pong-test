describe('evaluateReplacement', function() {
  it("returns 'Ping' if is divisible by 3", function() {
    expect(evaluateReplacement(9)).to.equal("Ping");
  });
  it("returns 'Pong' if is divisible by 5", function() {
    expect(evaluateReplacement(10)).to.equal("Pong");
  });
  it("returns 'Ping-Pong' if is divisible by 15", function() {
    expect(evaluateReplacement(45)).to.equal("Ping-Pong");
  });
  it("returns itself if not divisible by 3, 5, nor 15", function() {
    expect(evaluateReplacement(16)).to.equal(16);
  });
});
