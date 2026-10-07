import { d1727 as c0, d1725 as c1, d1726 as c2 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1727 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1727;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDue"]:c0(),["SharedCodec471"]:c1(),["SharedCodec472"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDue(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
