import { d5075 as c0, d5076 as c1 } from '../descriptors/data/232.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5075 as d5075 } from '../descriptors/data/232.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5075;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceReminderPolicy"]:c0(),["InvoiceReminderRule"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceReminderPolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
