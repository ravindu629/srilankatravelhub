import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("srilanka_travel_hub");

    // Check if email already exists
    const existing = await db
      .collection("newsletter_subscribers")
      .findOne({ email });

    if (existing) {
      return NextResponse.json(
        { error: "This email is already subscribed!" },
        { status: 400 }
      );
    }

    // Insert newsletter subscription
    const result = await db.collection("newsletter_subscribers").insertOne({
      email,
      subscribedAt: new Date(),
      status: "active", // active, unsubscribed
      source: "website", // website, blog_post, homepage
    });

    console.log("\n=================================");
    console.log("📰 NEW NEWSLETTER SUBSCRIBER SAVED TO MONGODB");
    console.log("=================================");
    console.log("ID:", result.insertedId);
    console.log("Email:", email);
    console.log("Time:", new Date().toLocaleString());
    console.log("=================================\n");

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing!",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      {
        error: "Failed to subscribe. Please try again.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
