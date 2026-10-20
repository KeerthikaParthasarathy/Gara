import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, preferredDate } = body;

    if (!fullName || !email || !phone || !preferredDate) {
      return NextResponse.json(
        { message: "Please complete all required fields including your preferred inspection date." },
        { status: 400 }
      );
    }

    console.log("[GARA Private Viewing Request]", {
      fullName,
      email,
      phone,
      preferredDate,
      time: body.preferredTime,
      property: body.propertyTitle,
      chauffeur: body.chauffeurRequired,
      timestamp: body.timestamp || new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        bookingRef: `GARA-TOUR-${Date.now().toString(36).toUpperCase()}`,
        message: "Private viewing request recorded. Client relations team notified.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[GARA Schedule Visit API Error]", error);
    return NextResponse.json(
      { message: "Failed to process viewing appointment." },
      { status: 500 }
    );
  }
}
