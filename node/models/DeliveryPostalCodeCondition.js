import { d656 as c0, d657 as c1 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d656 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d656;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPostalCodeCondition"]:c0(),["DeliveryPostalCodeValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPostalCodeCondition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
