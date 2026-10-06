import { d1859 as c0, d1865 as c1, d1867 as c2, d73 as c3, d41 as c4, d2342 as c5, d2343 as c6, d2344 as c7, d2345 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1859 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1859;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTax"]:c0(),["OrderTaxExemption"]:c1(),["OrderTaxLocation"]:c2(),["PostalAddress"]:c3(),["SharedCodec6"]:c4(),["SharedCodec615"]:c5(),["SharedCodec616"]:c6(),["SharedCodec617"]:c7(),["TaxBreakdown"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTax(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
