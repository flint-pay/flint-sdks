import { d3 as c0, d74 as c1, d1810 as c2, d1813 as c3, d422 as c4, d423 as c5, d1819 as c6, d2334 as c7, d2335 as c8, d2338 as c9 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d3 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddOrderChargeRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedChargeTax"]:c2(),["OrderChargeRequest"]:c3(),["SharedCodec158"]:c4(),["SharedCodec159"]:c5(),["SharedCodec482"]:c6(),["TaxCalculationRequest"]:c7(),["TaxComponentRequest"]:c8(),["TaxJurisdiction"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
