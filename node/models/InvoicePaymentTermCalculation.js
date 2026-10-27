import { d3325 as c0 } from '../descriptors/data/133.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3331 as c1, d3332 as c2, d3333 as c3, d3334 as c4, d3335 as c5, d3336 as c6, d3337 as c7, d3338 as c8, d3339 as c9, d3340 as c10, d3341 as c11 } from '../descriptors/data/134.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3325 as d3325 } from '../descriptors/data/133.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3325;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculation"]:c0(),["SharedCodec911"]:c1(),["SharedCodec912"]:c2(),["SharedCodec913"]:c3(),["SharedCodec914"]:c4(),["SharedCodec915"]:c5(),["SharedCodec916"]:c6(),["SharedCodec917"]:c7(),["SharedCodec918"]:c8(),["SharedCodec919"]:c9(),["SharedCodec920"]:c10(),["SharedCodec921"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
