import { d3324 as c0, d3325 as c1, d3326 as c3, d3327 as c4 } from '../descriptors/data/133.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c2 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3328 as c5, d3329 as c6, d3330 as c7, d3331 as c8, d3332 as c9, d3333 as c10, d3334 as c11, d3335 as c12, d3336 as c13, d3337 as c14, d3338 as c15, d3339 as c16, d3340 as c17, d3341 as c18 } from '../descriptors/data/134.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2441 as c19 } from '../descriptors/data/96.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2441 as d2441 } from '../descriptors/data/96.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["MoneyValue"]:c2(),["SharedCodec15"]:c3(),["SharedCodec16"]:c4(),["SharedCodec17"]:c5(),["SharedCodec18"]:c6(),["SharedCodec19"]:c7(),["SharedCodec911"]:c8(),["SharedCodec912"]:c9(),["SharedCodec913"]:c10(),["SharedCodec914"]:c11(),["SharedCodec915"]:c12(),["SharedCodec916"]:c13(),["SharedCodec917"]:c14(),["SharedCodec918"]:c15(),["SharedCodec919"]:c16(),["SharedCodec920"]:c17(),["SharedCodec921"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
