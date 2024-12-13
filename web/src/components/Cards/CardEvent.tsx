import type { Component } from "solid-js";
import type { EventEntity } from "@vspaceone/api/events/events.schema.ts";
import Card from "../Card/Card";
import type z from "zod";

interface EventCardProps {
	event: z.output<typeof EventEntity>;
}

const EventCard: Component<EventCardProps> = (props) => {
	return (
		<Card class="" padding={false}>
			<div class="bg-primary rounded-t-card p-card">
				<h3 class="text-neutral">
					<span class="block font-medium">
						{props.event.start?.toLocaleDateString("de-DE", {
							year: "numeric",
						})}
					</span>
					<span class="block font-bold text-4xl">
						{props.event.start?.toLocaleDateString("de-DE", {
							month: "long",
							day: "numeric",
						})}
					</span>
				</h3>
			</div>
			<div class="p-card">
				<h3>{props.event.title}</h3>
				<div class="text-secondary" innerHTML={props.event.description} />
			</div>
		</Card>
	);
};

export default EventCard;
