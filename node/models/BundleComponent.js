import { d64 as c0, d2319 as c1, d63 as c2 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d64 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d64;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponent"]:c0(),["SelectedProductOption"]:c1(),["SharedCodec17"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleComponent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
