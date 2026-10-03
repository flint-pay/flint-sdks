import { d74 as c0, d1808 as c1, d1817 as c2, d2331 as c3, d2332 as c4, d2335 as c5, d2419 as c6 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2419 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2419;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTax"]:c1(),["SharedCodec482"]:c2(),["TaxCalculationRequest"]:c3(),["TaxComponentRequest"]:c4(),["TaxJurisdiction"]:c5(),["UpdateOrderChargeRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
