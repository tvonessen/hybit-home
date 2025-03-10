import nodemailer from "nodemailer";

export async function sendMail({
	to,
	subject,
	text,
}: {
	to: string;
	subject: string;
	text: string;
}) {
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	try {
		await transporter.verify();

		const info = await transporter.sendMail({
			from: process.env.SMTP_FROM,
			to: to,
			bcc: process.env.SMTP_BCC,
			subject: subject,
			text: text,
		});

		return info;
	} catch (error) {
		throw new Error(`Error sending email: ${error}`);
	}
}
