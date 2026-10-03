import { d74 as c0, d1808 as c1, d1811 as c2, d420 as c3, d421 as c4, d1817 as c5, d2332 as c6, d2333 as c7, d2336 as c8 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1811 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1811;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTax"]:c1(),["OrderChargeRequest"]:c2(),["SharedCodec158"]:c3(),["SharedCodec159"]:c4(),["SharedCodec482"]:c5(),["TaxCalculationRequest"]:c6(),["TaxComponentRequest"]:c7(),["TaxJurisdiction"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
