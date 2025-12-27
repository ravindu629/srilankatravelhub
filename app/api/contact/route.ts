import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("srilanka_travel_hub");

    // Insert contact form submission
    const result = await db.collection("contact_forms").insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
      status: "new", // new, read, replied
    });

    console.log("\n=================================");
    console.log("📧 NEW CONTACT FORM SAVED TO MONGODB");
    console.log("=================================");
    console.log("ID:", result.insertedId);
    console.log("From:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("=================================\n");

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
