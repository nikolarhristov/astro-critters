import c from "fast-glob";
import o from "fs";
var p=async(n,a=2,f="",l=async i=>i,r=async i=>await o.promises.readFile(i,"utf-8"))=>{const i=await c(n),e={files:0,total:0};for(const t of i)try{const s=await l(await r(t));if(!s)continue;await o.promises.writeFile(t,s,"utf-8"),e.files++}catch{console.log("Error: Cannot inline file "+t+"!")}a>0&&e.files>0&&console.info("\x1B[32mSuccessfully inlined a total of "+e.files+" "+f.toUpperCase()+" "+(e.files===1?"file":"files")+".\x1B[39m")};export { p as default };

