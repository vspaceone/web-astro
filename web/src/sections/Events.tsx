import CardEvent from "@/components/Cards/CardEvent";
import Heading from "@/components/Heading/Heading";
import { client } from "@/lib/client";
import { EventEntity } from "@vspaceone/api/events/events.schema.js";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";
import { createResource, For, Match, Switch, type Component } from "solid-js";

const SectionEvents: Component = () => {
	const [events] = createResource(async () =>
		client.events
			.$get()
			.then((r) => r.json())
			.then((r) => r.map((e) => EventEntity.parse(e))),
	);

	return (
		<>
			<Heading>Events</Heading>

			<Switch>
				<Match when={events.loading}>
					<div class="min-h-[200px] flex items-center justify-center">
						<LoadingIndicator />
					</div>
				</Match>
				<Match when={events.error}>
					<h3>Es ist ein Fehler aufgetreten beim laden der Events.</h3>
					<p>{JSON.stringify(events.error)}</p>
				</Match>
				<Match when={events()}>
					<div class="grid md:grid-cols-1 lg:grid-cols-2 gap-main">
						<For each={events()}>{(event) => <CardEvent event={event} />}</For>
					</div>
				</Match>
			</Switch>
		</>
	);
};

export default SectionEvents;
