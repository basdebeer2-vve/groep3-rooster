export default async (request) => {
  const r = await fetch("https://www.zohoapis.eu/creator/custom/groep3_bdbsi/Rooster?publickey=r1O84yWTpwj05zAUnjxkjOnMO", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: await request.text()
  });
  return new Response(await r.text(), {
    status: r.status,
    headers: { "Content-Type": "application/json" }
  });
};

export const config = { path: "/api/rooster" };
