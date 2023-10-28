/** @type {import('../$types').PageLoad} */
export async function load({ fetch }) {
  const intro = await (await fetch(`/txt/questions-for-agencies/intro.md`)).text();
  const questions = await (await fetch(`/txt/questions-for-agencies/questions.md`)).text();
  
	return {
    intro,
    questions
	}
}