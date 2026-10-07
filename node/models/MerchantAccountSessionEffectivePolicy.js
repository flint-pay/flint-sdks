import { d1797 as c0 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1797 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1797;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionEffectivePolicy"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionEffectivePolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
