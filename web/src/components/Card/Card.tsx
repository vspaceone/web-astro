import type { Component, JSX } from "solid-js";
import { cardStyles, type CardProps } from "./common";

const Card: Component<
	CardProps & { children: JSX.Element } & JSX.HTMLAttributes<HTMLDivElement>
> = ({
	children,
	interactable = false,
	padding = true,
	class: _class,
	...props
}) => {
	return (
		<div
			{...props}
			class={cardStyles({ interactable, padding, class: _class })}
		>
			{children}
		</div>
	);
};

export default Card;
