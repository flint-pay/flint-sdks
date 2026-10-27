import { d735 as c0 } from '../descriptors/data/31.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3373 as c1 } from '../descriptors/data/136.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d735 as d735 } from '../descriptors/data/31.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d735;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputPaymentTerms"]:c0(),["SharedCodec908"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputPaymentTerms(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
