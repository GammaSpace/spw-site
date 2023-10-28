/** @type {import('../$types').PageLoad} */
export async function load({ fetch }) {
  const bios = [
    "griffin",     
    "suwaida",
    "madelyn",
    "dawnmarie",
    "marc-andre",
    "lindsay",
    "maria", 
    "michael",
    "julia",
  ]

  let bioText = [];
  
  const intro = await (await fetch(`/txt/steering-committee/intro.md`)).text();
  bios.forEach( async (val,index)=>{
    bioText[index] = await (await fetch(`/txt/steering-committee/bios/${val}.md`)).text();
  })
  
	return {
    intro,
    bioText
	}
}