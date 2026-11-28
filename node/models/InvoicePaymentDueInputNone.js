import { d1097 as c0 } from '../descriptors/data/56.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8444 as c1, d8445 as c2 } from '../descriptors/data/375.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1097 as d1097 } from '../descriptors/data/56.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1097;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentDueInputNone"]:c0(),["SharedCodec1641"]:c1(),["SharedCodec1642"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentDueInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
