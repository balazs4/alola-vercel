export default function (req, event) {
  const url = new URL(req.url);
  const name = url.searchParams.get('name') || 'friend';

  return new Response(
    JSON.stringify({ name: name.toLowerCase(), now: Date.now() }),
    { headers: { 'content-type': 'application/json', 'x-alola-vercel': 'yay' } }
  );
}

export const config = { runtime: 'edge' };
