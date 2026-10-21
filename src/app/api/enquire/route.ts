import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone } = body;

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

    return NextResponse.json(
      {
        success: true,
        referenceId: `GARA-ADV-${Date.now().toString(36).toUpperCase()}`,
        message: "Enquiry successfully logged. A Senior Managing Director has been notified.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error processing enquiry. Please retry." },
      { status: 500 }
    );
  }
}
