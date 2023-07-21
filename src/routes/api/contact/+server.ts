export async function POST({ request }): Promise<Response> {
    const body = await request.json();
    if (body.naam) {
        return new Response(JSON.stringify({ name: body.naam }), { status: 200 })
    } else {
        return new Response("Bad Request", { status: 400 });
    }
}