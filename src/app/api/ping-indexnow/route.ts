import { notifyIndexNowBulk } from "@/lib/IndexNow";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const { urlList } = await req.json();

    if (!Array.isArray(urlList) || urlList.length === 0) {
      return NextResponse.json({ error: "Missing or invalid 'urlList'" }, { status: 400 });
    }

    await notifyIndexNowBulk(urlList);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("IndexNow API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
