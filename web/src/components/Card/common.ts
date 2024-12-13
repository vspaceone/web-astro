import type { HTMLAttributes } from "astro/types";
import { cva, type VariantProps } from "class-variance-authority";

export const cardStyles = cva(
	"card rounded-card transition-colors bg-neutral-accent ring-2 ring-main/10",
	{
		variants: {
			interactable: {
				false: "transition-shadow focus-within:shadow-lg ring-2 ring-main",
				true: "cursor-pointer shadow-sm hocus:bg-neutral-accent/50 \
          hocus:shadow-lg hocus:ring-2 hocus:outline-none",
			},
			padding: {
				true: "py-6 px-8",
				false: "p-0",
			},
		},
	},
);

export interface CardProps
	extends HTMLAttributes<"div">,
		VariantProps<typeof cardStyles> {}
