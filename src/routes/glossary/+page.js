/** @type {import('../$types').PageLoad} */
export async function load({ fetch }) {
  const glossary = await (await fetch(`/txt/glossary/glossary.md`)).text();
  
	return {
    glossary
	}
}