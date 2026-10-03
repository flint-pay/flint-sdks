import { d1845 as c0, d1851 as c1, d1853 as c2, d70 as c3, d38 as c4, d2327 as c5, d2328 as c6, d2329 as c7, d2330 as c8 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1845 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1845;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTax"]:c0(),["OrderTaxExemption"]:c1(),["OrderTaxLocation"]:c2(),["PostalAddress"]:c3(),["SharedCodec5"]:c4(),["SharedCodec603"]:c5(),["SharedCodec604"]:c6(),["SharedCodec605"]:c7(),["TaxBreakdown"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTax(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
