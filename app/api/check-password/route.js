export async function POST(request) {
  const body = await request.json();
  const password = body.password;
  const correctPassword = process.env.ACCESS_PASSWORD;

  if (password === correctPassword) {
    return Response.json({ success: true });
  }

  return Response.json({ success: false, message: 'Mot de passe incorrect' }, { status: 401 });
}
