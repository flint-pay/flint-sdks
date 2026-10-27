import { d3339 as c0 } from '../descriptors/data/134.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3345 as c1, d3346 as c2, d3347 as c3, d3348 as c4, d3349 as c5, d3350 as c6, d3351 as c7, d3352 as c8, d3353 as c9, d3354 as c10, d3355 as c11 } from '../descriptors/data/135.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3339 as d3339 } from '../descriptors/data/134.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3339;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculation"]:c0(),["SharedCodec916"]:c1(),["SharedCodec917"]:c2(),["SharedCodec918"]:c3(),["SharedCodec919"]:c4(),["SharedCodec920"]:c5(),["SharedCodec921"]:c6(),["SharedCodec922"]:c7(),["SharedCodec923"]:c8(),["SharedCodec924"]:c9(),["SharedCodec925"]:c10(),["SharedCodec926"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
