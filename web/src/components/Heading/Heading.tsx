import { cn } from "@/lib/utils";
import { type HeadingProps, headingStyles } from "./common";
import { Show, type Component, type JSX } from "solid-js";

const Heading: Component<
	HeadingProps &
		JSX.HTMLAttributes<HTMLHeadingElement> & {
			Icon?: JSX.Element;
			children: JSX.Element;
		}
> = ({
	main = false,
	padding = true,
	hasIcon = false,
	Icon,
	children,
	subtitle,
	id,
	class: _class,
}) => {
	const titleClass = cn(
		headingStyles({ main, padding, class: _class }),
		subtitle ? "mb-[calc(var(--section_heading-margin-bottom)_/_2)]" : "",
	);

	return (
		<div class="z-0 relative">
			<Show when={hasIcon}>
				<div class="w-16 h-16 text-primary mb-4">{Icon}</div>
			</Show>

			<Show when={main}>
				<h1 id={id} class={titleClass}>
					{children}
				</h1>
			</Show>
			<Show when={!main}>
				<h2 id={id} class={titleClass}>
					{children}
				</h2>
			</Show>

			<Show when={subtitle}>
				<h3 class="font-normal m-[var(--section-heading-margin)] max-w-3xl">
					{subtitle}
				</h3>
			</Show>
		</div>
	);
};

export default Heading;
