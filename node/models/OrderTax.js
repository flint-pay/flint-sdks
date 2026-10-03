import { d1848 as c0, d1854 as c1, d1856 as c2, d70 as c3, d38 as c4, d2330 as c5, d2331 as c6, d2332 as c7, d2333 as c8 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1848 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1848;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTax"]:c0(),["OrderTaxExemption"]:c1(),["OrderTaxLocation"]:c2(),["PostalAddress"]:c3(),["SharedCodec5"]:c4(),["SharedCodec603"]:c5(),["SharedCodec604"]:c6(),["SharedCodec605"]:c7(),["TaxBreakdown"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTax(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
