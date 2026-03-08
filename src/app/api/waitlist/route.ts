import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source = "hero" } = body as {
      email: string;
      source?: string;
    };

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email requerido" }, { status: 400 });
    }

    const normalised = email.toLowerCase().trim();

    if (!EMAIL_REGEX.test(normalised)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const { error } = await supabase
      .from("waitlist_signups")
      .insert({ email: normalised, source });

    if (error) {
      // Unique violation — email already registered; return success silently
      // so we don't leak whether an address is already in the list
      if (error.code === "23505") {
        return NextResponse.json({ success: true });
      }

      console.error("[waitlist] insert error:", error);
      return NextResponse.json(
        { error: "Error al registrar. Intentá de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[waitlist] unexpected error:", err);
    return NextResponse.json(
      { error: "Error interno. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
