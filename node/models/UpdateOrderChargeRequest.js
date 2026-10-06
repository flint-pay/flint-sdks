import { d77 as c0, d1846 as c1, d1855 as c2, d2372 as c3, d2373 as c4, d2376 as c5, d2460 as c6 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2460 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2460;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTax"]:c1(),["SharedCodec492"]:c2(),["TaxCalculationRequest"]:c3(),["TaxComponentRequest"]:c4(),["TaxJurisdiction"]:c5(),["UpdateOrderChargeRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
