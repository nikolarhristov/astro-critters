import { deepmerge as p } from "deepmerge-ts";
import n from "./lib/pipe-all.js";
import e from "./options/index.js";
var m=(r={})=>{var a;for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&r[o]===!0&&(r[o]=e()[o]);const t=p(e(),r);return t.path=(a=t.path)!=null&&a.endsWith("/")?t.path:`${t.path}/`,{name:"astro-critters",hooks:{"astro:config:done":async o=>{t.path=t.path?t.path:o.config.outDir.toString()},"astro:build:done":async()=>{await n(t,t.logger)}}}};export { m as default };

