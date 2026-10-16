import { d323 as c0, d1850 as c1, d1853 as c2, d387 as c3, d388 as c4, d2423 as c5, d2424 as c6, d2427 as c7 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1853 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1853;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTax"]:c1(),["OrderChargeRequest"]:c2(),["SharedCodec126"]:c3(),["SharedCodec127"]:c4(),["TaxCalculationRequest"]:c5(),["TaxComponentRequest"]:c6(),["TaxJurisdiction"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
