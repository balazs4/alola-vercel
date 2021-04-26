module.exports = (req, res) => {
  const { name = 'friend' } = req.query;
  res
    .writeHead(200, {
      'content-type': 'application/json',
      'x-alola-vercel': 'yay',
    })
    .end(
      JSON.stringify({
        name,
        now: Date.now(),
        foo: 'bar',
        answer: 42,
      })
    );
};
