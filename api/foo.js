export default function (req, event) {
  console.log(JSON.stringify({ req, event }));
  return new Response(
    JSON.stringify({ name: 'friend'.toLowerCase(), now: Date.now() }),
    { headers: { 'content-type': 'application/json', 'x-alola-vercel': 'yay' } }
  );
}

export const config = { runtime: 'edge' };
