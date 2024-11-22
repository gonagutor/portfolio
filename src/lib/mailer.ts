'use server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { EMAIL_USER, EMAIL_PASS, EMAIL_PORT, EMAIL_SERVER, EMAIL_TO } from '$env/static/private';

const nodemailerConfig: SMTPTransport | SMTPTransport.Options | string = {
	host: EMAIL_SERVER,
	port: parseInt(EMAIL_PORT),
	auth: {
		user: EMAIL_USER,
		pass: EMAIL_PASS
	}
};

const transporter = nodemailer.createTransport(nodemailerConfig);

export async function sendMail(
	name: string,
	surname: string,
	from: string,
	text: string
): Promise<SMTPTransport.SentMessageInfo> {
	return transporter.sendMail({
		from: EMAIL_USER,
		to: EMAIL_TO,
		subject: `Alguien está intentando contactar contigo`,
		html: `
			<p>${name} ${surname} (${from})</p>
			<p>${text}</p>
		`
	});
}
