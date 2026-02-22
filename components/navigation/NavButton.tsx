"use client";
import { Button, type ButtonProps } from "@heroui/button";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface NavButtonProps extends ButtonProps {
	children: ReactNode;
	href: string;
}

export default function NavButton(props: NavButtonProps) {
	const router = useRouter();

	function handlePress(e) {
		props.onPress?.(e);
		router.push(props.href);
	}

	return (
		<Button {...props} onPress={handlePress}>
			{props.children}
		</Button>
	);
}
