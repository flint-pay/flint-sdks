import { d2099 as c0, d2100 as c1 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2100 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2100;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicRiskAttribute"]:c0(),["PublicRiskAttributeRegistry"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicRiskAttributeRegistry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
