import { NextResponse } from "next/server";
import { sendMail } from "./sendmail";

export async function POST(req: Request) {
	if (req.method !== "POST") {
		return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
	}

	try {
		const { name, email, message, token } = await req.json();

		if (!name || !email || !message || !token) {
			return NextResponse.json(
				{ error: "Please fill in all the fields" },
				{ status: 400 },
			);
		}

		const verification = await fetch(
			`https://recaptchaenterprise.googleapis.com/v1/projects/hybit-media/assessments?key=${process.env.GOOGLE_API_KEY}`,
			{
				method: "POST",
				body: JSON.stringify({
					event: {
						token: token,
						siteKey: process.env.NEXT_PUBLIC_CAPTCHA_PUBLIC_KEY,
						expectedAction: "contact_form",
					},
				}),
			},
		);

		const verificationJson = await verification.json();

		if (verificationJson.riskAnalysis?.score < 0.7) {
			return NextResponse.json(
				{ error: "Recaptcha verification failed" },
				{ status: 400 },
			);
		}

		const mailText = `Hey, ${name}\nThanks for reaching out to me! I'll be in touch very soon.\nHere is the info you sent me:\n\n---\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

		await sendMail({
			to: email,
			subject: "Thanks for checking in on hybit.media",
			text: mailText,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json({ error: "Some error occured" }, { status: 500 });
	}
}
