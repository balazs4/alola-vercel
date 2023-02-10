export default function (req, event) {
  console.log(req.url);
  return new Response(
    JSON.stringify({ name: 'friend'.toLowerCase(), now: Date.now() }),
    { headers: { 'content-type': 'application/json', 'x-alola-vercel': 'yay' } }
  );
}

export const config = { runtime: 'edge' };
