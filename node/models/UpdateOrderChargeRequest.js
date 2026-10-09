import { d323 as c0, d1847 as c1, d1858 as c2, d2407 as c3, d2408 as c4, d2411 as c5, d2499 as c6 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2499 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2499;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTax"]:c1(),["SharedCodec473"]:c2(),["TaxCalculationRequest"]:c3(),["TaxComponentRequest"]:c4(),["TaxJurisdiction"]:c5(),["UpdateOrderChargeRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
