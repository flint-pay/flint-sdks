import { d2508 as c0 } from '../descriptors/data/102.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2508 as d2508 } from '../descriptors/data/102.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2508;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WaiveInvoiceLateFeeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWaiveInvoiceLateFeeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
