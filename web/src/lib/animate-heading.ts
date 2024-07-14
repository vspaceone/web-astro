import { animate, spring, stagger } from "motion";

export default function animateHeading(e: Element, delay?: number) {
    const id = Math.floor(Math.random() * 100).toString();

    e.id = id;

    if (e.textContent) {
        e.innerHTML = e.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>",
        );

        const updatedElement = document.getElementById(id)!;

        console.log("updated", updatedElement);

        const letters = updatedElement.querySelectorAll(`:scope > .letter`);

        const observer = new IntersectionObserver(
            () => {
                console.log("inview");
                animate(
                    letters,
                    { y: [100, 0] },
                    {
                        easing: spring({ stiffness: 200, damping: 20 }),
                        delay: stagger(0.02, { start: delay !== undefined ? delay : 0 }),
                    },
                );
            },
            { threshold: 0.01 },
        );

        observer.observe(e);
    }
}