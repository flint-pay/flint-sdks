import { d1683 as c0, d77 as c1, d1682 as c2 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1683 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1683;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceActivity"]:c0(),["MoneyValue"]:c1(),["SharedCodec456"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceActivity(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
