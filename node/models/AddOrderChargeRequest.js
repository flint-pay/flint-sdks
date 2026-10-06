import { d5 as c0, d77 as c1, d1820 as c2, d1823 as c3, d425 as c4, d426 as c5, d1829 as c6, d2346 as c7, d2347 as c8, d2350 as c9 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d5 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddOrderChargeRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedChargeTax"]:c2(),["OrderChargeRequest"]:c3(),["SharedCodec160"]:c4(),["SharedCodec161"]:c5(),["SharedCodec490"]:c6(),["TaxCalculationRequest"]:c7(),["TaxComponentRequest"]:c8(),["TaxJurisdiction"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
