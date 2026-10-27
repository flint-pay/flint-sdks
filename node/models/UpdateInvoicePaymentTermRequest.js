import { d3338 as c0, d3339 as c1, d3340 as c3, d3341 as c4 } from '../descriptors/data/134.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3013 as c2 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3342 as c5, d3343 as c6, d3344 as c7, d3345 as c8, d3346 as c9, d3347 as c10, d3348 as c11, d3349 as c12, d3350 as c13, d3351 as c14, d3352 as c15, d3353 as c16, d3354 as c17, d3355 as c18 } from '../descriptors/data/135.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2451 as c19 } from '../descriptors/data/98.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2451 as d2451 } from '../descriptors/data/98.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2451;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicy"]:c0(),["InvoicePaymentTermCalculation"]:c1(),["MoneyValue"]:c2(),["SharedCodec15"]:c3(),["SharedCodec16"]:c4(),["SharedCodec17"]:c5(),["SharedCodec18"]:c6(),["SharedCodec19"]:c7(),["SharedCodec916"]:c8(),["SharedCodec917"]:c9(),["SharedCodec918"]:c10(),["SharedCodec919"]:c11(),["SharedCodec920"]:c12(),["SharedCodec921"]:c13(),["SharedCodec922"]:c14(),["SharedCodec923"]:c15(),["SharedCodec924"]:c16(),["SharedCodec925"]:c17(),["SharedCodec926"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
