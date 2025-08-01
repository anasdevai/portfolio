// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

const FASTAPI_URL = process.env.FASTAPI_URL || "http://localhost:8000";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const apiRes = await fetch(`${FASTAPI_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await apiRes.json();
    return NextResponse.json(data, { status: apiRes.status });
  } catch (error) {
    console.error("Error proxying to FastAPI:", error);
    return NextResponse.json(
      { error: "Internal proxy error" },
      { status: 500 }
    );
  }
}
