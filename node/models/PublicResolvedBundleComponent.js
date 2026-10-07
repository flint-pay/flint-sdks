import { d2039 as c0, d2040 as c1, d2268 as c2 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2039 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2039;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicResolvedBundleComponent"]:c0(),["PublicResolvedBundleVariantSummary"]:c1(),["SelectedProductOption"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedBundleComponent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
