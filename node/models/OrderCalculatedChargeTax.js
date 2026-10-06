import { d77 as c0, d1846 as c1, d1855 as c2, d2372 as c3, d2373 as c4, d2376 as c5 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1846 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1846;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTax"]:c1(),["SharedCodec492"]:c2(),["TaxCalculationRequest"]:c3(),["TaxComponentRequest"]:c4(),["TaxJurisdiction"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderCalculatedChargeTax(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
