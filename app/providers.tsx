"use client";

import { ColorProvider } from "@/utility/colorContext";
import { HeroUIProvider } from "@heroui/react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export function Providers({ children }) {
	return (
		<ReCaptchaProvider
			reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_PUBLIC_KEY}
			useEnterprise
		>
			<HeroUIProvider>
				<ColorProvider>{children}</ColorProvider>
			</HeroUIProvider>
		</ReCaptchaProvider>
	);
}
