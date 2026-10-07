import { d77 as c0, d1853 as c1, d1856 as c2, d431 as c3, d432 as c4, d1862 as c5, d2379 as c6, d2380 as c7, d2383 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1856 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1856;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTax"]:c1(),["OrderChargeRequest"]:c2(),["SharedCodec160"]:c3(),["SharedCodec161"]:c4(),["SharedCodec497"]:c5(),["TaxCalculationRequest"]:c6(),["TaxComponentRequest"]:c7(),["TaxJurisdiction"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
