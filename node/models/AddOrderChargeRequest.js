import { d5 as c0, d323 as c1, d1847 as c2, d1850 as c3, d385 as c4, d386 as c5, d1858 as c6, d2407 as c7, d2408 as c8, d2411 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d5 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddOrderChargeRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedChargeTax"]:c2(),["OrderChargeRequest"]:c3(),["SharedCodec124"]:c4(),["SharedCodec125"]:c5(),["SharedCodec473"]:c6(),["TaxCalculationRequest"]:c7(),["TaxComponentRequest"]:c8(),["TaxJurisdiction"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
