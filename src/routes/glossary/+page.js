/** @type {import('./$types').PageLoad} */
export async function load({ url, route, params }) {
	console.log(url.hash);
}