//import { animate, spring, stagger } from "motion";

export default function animateHeading(
	_e: Element,
	_options?: { delay?: number; once?: boolean },
) {
	return;

	// Currently disabled since theres no handling of line breaks yet
	/* 
	const id = Math.floor(Math.random() * 100).toString();

	e.id = id;

	if (e.textContent) {
		e.innerHTML = e.textContent.replace(
			/\S/g,
			`<span class='letter 
            bg-gradient-to-t from-primary/40 to-primary bg-clip-text bg-contain p-0'>$&</span>`,
		);

		const updatedElement = document.getElementById(id)!;

		console.log("updated", updatedElement);

		const letters = updatedElement.querySelectorAll(`:scope > .letter`);

		let didAppear = false;

		const observer = new IntersectionObserver(
			() => {
				console.log("inview");

				if (options?.once && didAppear) {
					return;
				}

				animate(
					letters,
					{ y: [50, 0] },
					{
						easing: spring({ stiffness: 100, damping: 40 }),
						delay: stagger(0.02, {
							start:
								options?.delay !== undefined
									? didAppear
										? 0
										: options.delay
									: 0,
						}),
					},
				);
				didAppear = true;
			},
			{ threshold: 0.01 },
		);

		observer.observe(e);
	} */
}
