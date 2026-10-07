import { d5 as c0, d77 as c1, d1847 as c2, d1850 as c3, d430 as c4, d431 as c5, d1856 as c6, d2373 as c7, d2374 as c8, d2377 as c9 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d5 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddOrderChargeRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedChargeTax"]:c2(),["OrderChargeRequest"]:c3(),["SharedCodec160"]:c4(),["SharedCodec161"]:c5(),["SharedCodec493"]:c6(),["TaxCalculationRequest"]:c7(),["TaxComponentRequest"]:c8(),["TaxJurisdiction"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
