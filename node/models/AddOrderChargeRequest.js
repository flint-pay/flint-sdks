import { d5 as c0, d77 as c1, d1853 as c2, d1856 as c3, d431 as c4, d432 as c5, d1862 as c6, d2379 as c7, d2380 as c8, d2383 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d5 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddOrderChargeRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedChargeTax"]:c2(),["OrderChargeRequest"]:c3(),["SharedCodec160"]:c4(),["SharedCodec161"]:c5(),["SharedCodec497"]:c6(),["TaxCalculationRequest"]:c7(),["TaxComponentRequest"]:c8(),["TaxJurisdiction"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
