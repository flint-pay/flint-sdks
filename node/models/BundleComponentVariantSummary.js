import { d63 as c0, d2273 as c1 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d63 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d63;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponentVariantSummary"]:c0(),["SelectedProductOption"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleComponentVariantSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
