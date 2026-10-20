import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message } = body;

    // Validate essential fields
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { message: "Please provide your full name, email, and contact number." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { message: "Please enter a valid confidential email address." },
        { status: 400 }
      );
    }

    // In production with Supabase or CRM, store in DB / dispatch webhook to private advisory team
    // e.g. await supabase.from('enquiries').insert([body])
    console.log("[GARA Advisory Protocol] Enquiry registered:", {
      fullName,
      email,
      phone,
      propertyId: body.propertyId || "General Advisory",
      timestamp: body.timestamp || new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        referenceId: `GARA-ADV-${Date.now().toString(36).toUpperCase()}`,
        message: "Enquiry successfully logged. A Senior Advisor has been notified.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[GARA Advisory API Error]", error);
    return NextResponse.json(
      { message: "Internal server error processing enquiry. Please retry." },
      { status: 500 }
    );
  }
}
