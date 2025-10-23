export const runtime = "nodejs";

import { type NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import PasswordReset from "@/models/PasswordReset";
import crypto from "crypto";
import { sendPasswordResetEmail } from "@/lib/email/email-service";

export async function POST(request: NextRequest) {
  try {
    // Apenas tenta conectar ao DB se a variável de ambiente estiver definida
    if (!process.env.MONGO_URI) {
      console.warn("MONGO_URI não definida, DB não será conectado (somente build)");
      return NextResponse.json({
        success: true,
        message: "Build mode - DB skipped",
      });
    }

    await connectToDatabase();

    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email é obrigatório" }, { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({
        success: true,
        message: "Se seu email estiver registrado, você receberá um link de redefinição",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");

    const passwordReset = new PasswordReset({
      userId: user._id,
      token,
      expires: new Date(Date.now() + 3600000), // 1 hora
    });

    await passwordReset.save();

    const baseUrl = request.nextUrl.origin;
    const resetLink = `${baseUrl}/reset-password?token=${token}`;

    await sendPasswordResetEmail(user.email, user.name, resetLink);

    return NextResponse.json({
      success: true,
      message: "Se seu email estiver registrado, você receberá um link de redefinição",
    });
  } catch (error: any) {
    console.error("Erro no forgot-password:", error);
    return NextResponse.json(
      { error: error.message || "Ocorreu um erro" },
      { status: 500 }
    );
  }
}
