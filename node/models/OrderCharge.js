import { d77 as c0, d1820 as c1, d1822 as c2, d1829 as c3, d41 as c4, d2346 as c5, d2347 as c6, d2350 as c7 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1822 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1822;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTax"]:c1(),["OrderCharge"]:c2(),["SharedCodec490"]:c3(),["SharedCodec6"]:c4(),["TaxCalculationRequest"]:c5(),["TaxComponentRequest"]:c6(),["TaxJurisdiction"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderCharge(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
