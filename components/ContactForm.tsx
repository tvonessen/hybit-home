"use client";

import { Button, Checkbox, Form, Input, Textarea } from "@heroui/react";
import {
	HandPeace,
	Key,
	PaperPlaneRight,
	SmileySad,
	Warning,
} from "@phosphor-icons/react";
import { useReCaptcha } from "next-recaptcha-v3";
import React from "react";

export default function ContactForm() {
	const [formState, setFormState] = React.useState<
		null | "pending" | "success" | "error"
	>(null);

	const { executeRecaptcha } = useReCaptcha();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setFormState("pending");

		const formData = new FormData(event.currentTarget);
		const recaptchaToken = await executeRecaptcha("contact_form");

		if (!recaptchaToken) {
			setFormState("error");
			return;
		}

		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: formData.get("name"),
				email: formData.get("email"),
				message: formData.get("message"),
				token: recaptchaToken,
			}),
		});

		if (!response.ok) {
			setFormState("error");
			return;
		}

		setFormState("success");
	}

	return (
		<Form
			className="grid grid-cols-1 md:grid-cols-2 gap-6"
			onSubmit={handleSubmit}
		>
			<Input
				name="name"
				label="Name"
				type="text"
				placeholder="What's your name?"
				labelPlacement="outside"
				variant="underlined"
				isRequired
				isDisabled={!!formState}
			/>
			<Input
				name="email"
				type="email"
				label="Email"
				placeholder="How can I reach you?"
				labelPlacement="outside"
				variant="underlined"
				isRequired
				autoComplete="email"
				isDisabled={!!formState}
			/>
			<Textarea
				name="message"
				label="Message"
				type="text"
				placeholder="What's on your mind?"
				labelPlacement="outside"
				variant="underlined"
				isRequired
				isDisabled={!!formState}
				className="md:col-span-2"
			/>
			<div className="md:col-span-2">
				<Checkbox
					isRequired
					isDisabled={!!formState}
					name="consent"
					className="items-start columns-2"
				>
					<p>
						I acknowledge that <b>no private data is stored</b> by HyBit Media.
						I consent to the use of my submitted email address for the sole
						purpose of getting in touch with me regarding the issued request.
					</p>
				</Checkbox>
			</div>
			<Button
				size="lg"
				radius="sm"
				className="md:col-span-2 opacity-100"
				type="submit"
				variant={formState === "pending" ? "ghost" : "solid"}
				color={
					formState === "success"
						? "success"
						: formState === "error"
							? "danger"
							: "secondary"
				}
				isDisabled={["success", "pending"].includes(formState)}
				isLoading={formState === "pending"}
			>
				{formState === "pending" ? (
					"Sending..."
				) : formState === "success" ? (
					<>
						<HandPeace size={28} /> I'll be in touch!
					</>
				) : formState === "error" ? (
					<>
						<SmileySad size={24} /> Something went wrong. Try again?
					</>
				) : (
					<>
						Reach out <PaperPlaneRight size={24} weight="light" />
					</>
				)}
			</Button>
			<center className="text-secondary md:col-span-2 text-xs -mt-2">
				This site is protected by reCAPTCHA and the{" "}
				<a className="underline" href="https://policies.google.com/privacy">
					Privacy Policy
				</a>{" "}
				and{" "}
				<a className="underline" href="https://policies.google.com/terms">
					Terms of Service
				</a>{" "}
				apply.
			</center>
		</Form>
	);
}
