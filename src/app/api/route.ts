export async function GET(request: Request): Promise<Response> {
  return new Response(JSON.stringify({ message: "This is a GET request" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
