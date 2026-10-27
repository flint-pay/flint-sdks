import { d723 as c0 } from '../descriptors/data/31.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3344 as c2 } from '../descriptors/data/135.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d723 as d723 } from '../descriptors/data/31.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d723;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicyPercentage"]:c0(),["MoneyValue"]:c1(),["SharedCodec19"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFeePolicyPercentage(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
