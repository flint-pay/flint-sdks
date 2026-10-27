import { d929 as c0 } from '../descriptors/data/41.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d929 as d929 } from '../descriptors/data/41.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d929;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReverseInvoiceManualPaymentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReverseInvoiceManualPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
