import { d323 as c0, d2404 as c1, d2405 as c2, d2406 as c3, d2411 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2406 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2406;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec595"]:c1(),["SharedCodec596"]:c2(),["TaxBreakdown"]:c3(),["TaxJurisdiction"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxBreakdown(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
