import { d612 as c0, d614 as c1, d747 as c2, d77 as c3, d613 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d614 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d614;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryInputConstraint"]:c0(),["DeliveryInputRequirement"]:c1(),["DeliveryWindowResource"]:c2(),["MoneyValue"]:c3(),["SharedCodec207"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryInputRequirement(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
