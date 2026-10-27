import { d733 as c0 } from '../descriptors/data/31.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3369 as c1 } from '../descriptors/data/136.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4182 as c2 } from '../descriptors/data/178.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d733 as d733 } from '../descriptors/data/31.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d733;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputMerchantDefault"]:c0(),["SharedCodec904"]:c1(),["SharedCodec910"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputMerchantDefault(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
