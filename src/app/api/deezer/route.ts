import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "eminem";

    try {
        const res = await fetch(
            `https://api.deezer.com/search?q=${encodeURIComponent(query)}&limit=20`
        );
        const data = await res.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch Deezer data" },
            { status: 500 }
        );
    }
}
