import { json } from '@sveltejs/kit';
import { sendMail } from '$lib/mailer';
import { SECRET_RECAPTCHA_KEY } from '$env/static/private';

export async function POST({ request }) {
	try {
		const { name, surname, email, message, recaptchaToken } = await request.json();

		if (
			!name?.trim() ||
			!surname?.trim() ||
			!email?.trim() ||
			!message?.trim() ||
			!recaptchaToken?.trim()
		) {
			return json(
				{
					success: false,
					message: 'Missing required fields'
				},
				{ status: 400 }
			);
		}

		const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `secret=${SECRET_RECAPTCHA_KEY}&response=${recaptchaToken}`
		});

		const recaptchaResult = await recaptchaResponse.json();

		if (!recaptchaResult.success) {
			return json(
				{
					success: false,
					message: 'reCAPTCHA verification failed'
				},
				{ status: 400 }
			);
		}

		await sendMail(name, surname, email, message);

		return json({
			success: true,
			message: 'Email sent successfully'
		});
	} catch (error) {
		console.error('Error:', error);
		return json(
			{
				success: false,
				message: 'Failed to send email'
			},
			{ status: 500 }
		);
	}
}
