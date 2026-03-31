"use client";
import { Button, type ButtonProps } from "@heroui/button";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

type PressEvent = Parameters<NonNullable<ButtonProps["onPress"]>>[0];

interface NavButtonProps extends ButtonProps {
	children: ReactNode;
	href: string;
}

export default function NavButton(props: NavButtonProps) {
	const router = useRouter();

	function handlePress(e: PressEvent) {
		props.onPress?.(e);
		router.push(props.href);
	}

	return (
		<Button {...props} onPress={handlePress}>
			{props.children}
		</Button>
	);
}
