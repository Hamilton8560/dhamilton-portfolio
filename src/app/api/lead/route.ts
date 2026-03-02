import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, summary, messages } = await req.json()

    // Build conversation transcript
    const transcript = messages
      ?.map(
        (m: { role: string; content: string }) =>
          `${m.role === "user" ? "Visitor" : "Bot"}: ${m.content}`
      )
      .join("\n\n")

    await resend.emails.send({
      from: "Lead Bot <leads@americaniron.online>",
      to: "davidhamilton473@gmail.com",
      subject: `New Lead: ${name} — ${summary.slice(0, 60)}`,
      html: `
        <h2 style="color:#00D4FF;">New Lead from Portfolio Site</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr>
            <td style="padding:8px;font-weight:bold;color:#666;">Name</td>
            <td style="padding:8px;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;color:#666;">Email</td>
            <td style="padding:8px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;color:#666;">Looking For</td>
            <td style="padding:8px;">${summary}</td>
          </tr>
        </table>
        <hr style="margin:24px 0;border-color:#333;" />
        <h3 style="color:#999;">Full Conversation</h3>
        <pre style="background:#111;color:#ccc;padding:16px;border-radius:8px;font-size:13px;line-height:1.6;white-space:pre-wrap;">${transcript || "No transcript available"}</pre>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error: any) {
    console.error("Lead email error:", error)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}
