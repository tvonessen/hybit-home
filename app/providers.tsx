"use client";

import { HeroUIProvider } from "@heroui/system";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import type { ReactNode } from "react";
import { ColorProvider } from "@/utility/colorContext";

export function Providers({ children }: { children: ReactNode }) {
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
