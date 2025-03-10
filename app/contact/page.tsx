import ContactForm from "@/components/ContactForm";
import { ChatCircleDots } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export default function Contact() {
	return (
		<main className="container mx-auto px-6 mt-1 pt-56">
			<h1 className="text-3xl mb-12">
				<ChatCircleDots
					size={50}
					className="inline -mt-2 pe-2"
					weight="duotone"
				/>
				Like to get in touch?
			</h1>
			<p className="mt-6 mb-24 text-lg">
				Hey, as freelance web developer I am always interested in new projects
				and collaborations. If you have a project in mind, feel free to reach
				out to me. I am looking forward to hearing from you!
			</p>

			<div className="container mx-auto mt-6">
				<ContactForm />
			</div>
		</main>
	);
}
