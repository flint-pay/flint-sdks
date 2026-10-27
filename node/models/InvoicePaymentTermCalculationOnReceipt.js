import { d742 as c0 } from '../descriptors/data/32.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3346 as c1, d3347 as c2 } from '../descriptors/data/135.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d742 as d742 } from '../descriptors/data/32.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d742;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationOnReceipt"]:c0(),["SharedCodec917"]:c1(),["SharedCodec918"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationOnReceipt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
