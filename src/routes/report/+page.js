/** @type {import('../$types').PageLoad} */
export async function load({ fetch }) {
  const intro = await (await fetch(`/txt/report/intro.md`)).text();
  const quote = await (await fetch(`/txt/report/quote.md`)).text();
  const findings = await (await fetch(`/txt/report/findings.md`)).text();
  const report_intro = await (await fetch(`/txt/report/report_intro.md`)).text();
  const report_full = await (await fetch(`/txt/report/report_full.md`)).text();
  const report_summary = await (await fetch(`/txt/report/report_summary.md`)).text();
  const report_short = await (await fetch(`/txt/report/report_short.md`)).text();
  
	return {
    intro,
    quote,
    findings,
    report_intro,
    report_full,
    report_summary,
    report_short
	}
}