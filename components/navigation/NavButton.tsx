"use client";

import { Button, type ButtonProps } from "@heroui/react";
import { useRouter } from "next/navigation";

interface NavButtonProps extends ButtonProps {
	children: React.ReactNode;
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
