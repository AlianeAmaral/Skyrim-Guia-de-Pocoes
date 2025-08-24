import db from "@/app/api/database";

export async function GET(request: Request, {params}: {params: {id: string}}){
    const {id} = params

    const [row] = await db.query<any>("SELECT * FROM usuarios where id = ?", [id])

    return new Response(JSON.stringify(row[0]))
}