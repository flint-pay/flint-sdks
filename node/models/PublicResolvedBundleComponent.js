import { d2086 as c0, d2087 as c1, d2313 as c2 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2086 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2086;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicResolvedBundleComponent"]:c0(),["PublicResolvedBundleVariantSummary"]:c1(),["SelectedProductOption"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedBundleComponent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
