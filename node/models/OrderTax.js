import { d314 as c0, d1843 as c1, d1849 as c2, d1851 as c3, d66 as c4, d2320 as c5, d2321 as c6, d2322 as c7, d2327 as c8 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1843 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1843;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderTax"]:c1(),["OrderTaxExemption"]:c2(),["OrderTaxLocation"]:c3(),["PostalAddress"]:c4(),["SharedCodec570"]:c5(),["SharedCodec571"]:c6(),["TaxBreakdown"]:c7(),["TaxJurisdiction"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTax(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
