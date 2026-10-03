import { d74 as c0, d1810 as c1, d1812 as c2, d1819 as c3, d38 as c4, d2334 as c5, d2335 as c6, d2338 as c7 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1812 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1812;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTax"]:c1(),["OrderCharge"]:c2(),["SharedCodec482"]:c3(),["SharedCodec5"]:c4(),["TaxCalculationRequest"]:c5(),["TaxComponentRequest"]:c6(),["TaxJurisdiction"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderCharge(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
