import { d5573 as c0 } from '../descriptors/data/251.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5627 as c1, d5628 as c2, d5629 as c3, d5630 as c4, d5631 as c5 } from '../descriptors/data/254.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5573 as d5573 } from '../descriptors/data/251.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5573;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec815"]:c1(),["SharedCodec816"]:c2(),["SharedCodec817"]:c3(),["SharedCodec818"]:c4(),["SharedCodec819"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
