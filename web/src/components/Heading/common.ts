import type { HTMLAttributes } from "astro/types";
import { cva, type VariantProps } from "class-variance-authority";

export const headingStyles = cva(
	"max-w-3xl m-[var(--section-heading-margin)] overflow-hidden font-display",
	{
		variants: {
			main: {
				true: "font-bold text-transparent animated-heading \
          bg-linear-to-t from-transparent to-primary bg-clip-text \
          ",
				false: "font-semibold",
			},
			animated: {
				true: "animated-heading",
				false: "",
			},
			padding: {
				true: "py-4",
				false: "p-0",
			},
			hasIcon: {
				true: "",
				false: "",
			},
		},
	},
);

export interface HeadingProps
	extends HTMLAttributes<"h1" | "h2">,
		VariantProps<typeof headingStyles> {
	subtitle?: string;
}
