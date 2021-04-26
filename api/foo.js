module.exports = (req, res) => {
  const { name = 'friend' } = req.query;
  res
    .writeHead(200, {
      'content-type': 'application/json',
      'x-alola-vercel': 'yay',
    })
    .end(
      JSON.stringify({
        name: name.toLowerCase(),
        now: Date.now(),
      })
    );
};
