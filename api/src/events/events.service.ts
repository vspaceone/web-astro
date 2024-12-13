import ICal from "ical";
import type { EventEntity } from "./events.schema";
import type { z } from "zod";

const CALENDAR_ICAL_URL =
	"https://hub.vspace.one/remote.php/dav/public-calendars/f6MfGLnsGScRqd4Y?export";
// const CALENDAR_URL = "https://hub.vspace.one/apps/calendar/p/f6MfGLnsGScRqd4Y";

// Only look at this much next occurences, to prevent infinite loop
// const RECURRING_EVENT_LOOK_FORWARD = 5;

const DESIGNATOR_LINK = "Link";
const DESIGNATOR_DOWNLOAD = "Download";

export class EventsService {
	async getCalenderIcs() {
		const response = await fetch(CALENDAR_ICAL_URL);
		const data = await response.text();

		return data;
	}

	async getAll() {
		// Fetch the calender ics
		const icsData = await this.getCalenderIcs();

		const events = ICal.parseICS(icsData);

		// Filters are split up for readability
		const futureAndRecurringEvents = Object.values(events)
			// Only include events of type VEVENT
			.filter((e) => e.type === "VEVENT")
			// Exclude Past events that aren't recurring
			.filter((e) => {
				const isFuture = Number(e.end) > Date.now();
				const isRecurring = !!e.rrule;

				return isFuture || isRecurring;
			})
			// Get latest reccurance of reccuring events
			.map((e) => {
				const isRecurring = !!e.rrule;

				if (!isRecurring || !e.rrule) return e;

				const latest = e.recurrences?.[e.recurrences.length - 1];

				if (!latest) {
					const duration =
						e.end !== undefined && e.start !== undefined
							? e.end.getTime() - e.start.getTime()
							: 0;
					const next = e.rrule.after(new Date(Date.now()), true);

					if (!next) {
						return e;
					}

					e.start = next;
					e.end = new Date(next.getTime() + duration);

					return e;
				}
				return latest;
			})
			.filter((e) => {
				const isFuture = Number(e.end) > Date.now();

				return isFuture;
			})
			// Exclude cancelled events
			.filter((e) => {
				const isCancelled = e.status !== undefined && e.status === "CANCELLED";

				return !isCancelled;
			})
			// Get designator values from descriptions and turn into event type
			.map((e) => {
				let download: string | undefined = undefined;
				let link: string | undefined = undefined;
				let description = "";

				const isRecurring = !!e.rrule;

				if (e.description) {
					const lines = e.description.split("\n");

					for (const line of lines) {
						const designator = line.substring(0, line.search(":"));

						switch (designator) {
							case DESIGNATOR_DOWNLOAD:
								download = line
									.substring(DESIGNATOR_DOWNLOAD.length + 1, line.length)
									.trim();
								break;
							case DESIGNATOR_LINK:
								link = line
									.substring(DESIGNATOR_LINK.length + 1, line.length)
									.trim();
								break;
							default:
								description += `${line} `;
						}
					}
				}

				description = description.trim();

				const event: z.output<typeof EventEntity> = {
					title: e.summary || "Kein Titel",
					start: e.start,
					end: e.end,
					location: e.location || "Kein Standort",
					description,
					link,
					download,
					isRecurring,
				};

				return event;
			})
			// Sort the events
			.sort((a, b) => (a.start?.getTime() || 0) - (b.start?.getTime() || 0));

		return futureAndRecurringEvents;
	}
}
