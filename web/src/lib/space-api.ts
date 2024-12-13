export async function getSpaceData() {
	const response = await fetch("https://vspace.one/spaceapi.json");
	const data: SpaceApi = await response.json();

	return data;
}
type SpaceApi = {
	api: "0.13";
	space: string;
	logo: string;
	url: string;
	location: {
		address: string;
		lat: number;
		lon: number;
	};
	contact: {
		phone: string;
		twitter: string;
		email: string;
	};
	issue_report_channels: Array<string>;
	state: { open: boolean; lastchange: number };
	sensors: { temperature: null; humidity: null };
};
