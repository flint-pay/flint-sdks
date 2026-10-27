import { d752 as c0 } from '../descriptors/data/32.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4189 as c1 } from '../descriptors/data/178.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d752 as d752 } from '../descriptors/data/32.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d752;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWriteAtIssue"]:c0(),["SharedCodec938"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWriteAtIssue(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
