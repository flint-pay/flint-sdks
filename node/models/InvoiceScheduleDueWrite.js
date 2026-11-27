import { d9387 as c0 } from '../descriptors/data/427.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9406 as c1, d9407 as c2, d9408 as c3, d9409 as c4, d9410 as c5 } from '../descriptors/data/428.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9387 as d9387 } from '../descriptors/data/427.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9387;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec1717"]:c1(),["SharedCodec1718"]:c2(),["SharedCodec1719"]:c3(),["SharedCodec1720"]:c4(),["SharedCodec1721"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
