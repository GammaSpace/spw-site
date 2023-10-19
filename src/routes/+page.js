/** @type {import('../$types').PageLoad} */
export async function load({ fetch }) {
  const intro = await (await fetch(`/txt/landing/intro.md`)).text();
  const quote = await (await fetch(`/txt/landing/quote.md`)).text();
  const funders = await (await fetch(`/txt/landing/funders.md`)).text();
  const land = await (await fetch(`/txt/landing/land.md`)).text();
  const credits = await (await fetch(`/txt/landing/credits.md`)).text();
  
	return {
    intro,
    quote,
    funders,
    land,
    credits
	}
}