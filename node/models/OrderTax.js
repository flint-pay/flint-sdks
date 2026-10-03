import { d1846 as c0, d1852 as c1, d1854 as c2, d70 as c3, d38 as c4, d2328 as c5, d2329 as c6, d2330 as c7, d2331 as c8 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1846 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1846;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTax"]:c0(),["OrderTaxExemption"]:c1(),["OrderTaxLocation"]:c2(),["PostalAddress"]:c3(),["SharedCodec5"]:c4(),["SharedCodec603"]:c5(),["SharedCodec604"]:c6(),["SharedCodec605"]:c7(),["TaxBreakdown"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTax(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
