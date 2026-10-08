import { d2088 as c0, d2089 as c1, d2318 as c2 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2088 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2088;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicResolvedBundleComponent"]:c0(),["PublicResolvedBundleVariantSummary"]:c1(),["SelectedProductOption"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedBundleComponent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
