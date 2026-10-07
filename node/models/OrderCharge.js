import { d314 as c0, d1802 as c1, d1804 as c2, d1813 as c3, d2323 as c4, d2324 as c5, d2327 as c6 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1804 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1804;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTax"]:c1(),["OrderCharge"]:c2(),["SharedCodec455"]:c3(),["TaxCalculationRequest"]:c4(),["TaxComponentRequest"]:c5(),["TaxJurisdiction"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderCharge(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
