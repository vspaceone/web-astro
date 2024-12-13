import { cn } from "@/lib/utils";
import Card from "@/components/Card/Card";
import { createResource, Match, Switch, type Component } from "solid-js";
import { client } from "@/lib/client";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";
import { InfoEntity } from "@vspaceone/api/info/info.schema.js";

const SectionSpaceState: Component = () => {
	const [info] = createResource(async () =>
		client.info
			.$get()
			.then((r) => r.json())
			.then((r) => InfoEntity.parse(r)),
	);

	return (
		<Card class={cn("w-full flex justify-center items-center flex-col")}>
			<p>Unser Space ist derzeit</p>

			<Switch>
				<Match when={info.loading}>
					<div class="min-h-[200px] flex items-center justify-center">
						<LoadingIndicator />
					</div>
				</Match>
				<Match when={info.error}>
					<h3>Es ist ein Fehler aufgetreten beim laden der Events.</h3>
					<p>{JSON.stringify(info.error)}</p>
				</Match>
				<Match when={info()}>
					<div class="flex flex-row gap-2 justify-center items-center">
						<div
							class={cn(
								"w-5 h-5 rounded-full",
								info()?.state.open ? "bg-green-300" : "bg-red-500",
							)}
						/>
						<p class="text-main font-extrabold text-3xl font-display">
							{info()?.state.open ? "Offen" : "Geschlossen"}
						</p>
					</div>
				</Match>
			</Switch>
			<p class="text-center">
				Schaue bei unseren Terminen um herauszufinden wann <br /> du
				vorbeikommen kannst!
			</p>
		</Card>
	);
};

export default SectionSpaceState;
