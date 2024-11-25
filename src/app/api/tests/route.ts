export async function GET(req: Request) {
    console.log(req)

    return Response.json({ message: 'Hello World', req})
}