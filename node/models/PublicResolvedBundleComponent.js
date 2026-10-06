import { d2085 as c0, d2086 as c1, d2312 as c2 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2085 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2085;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicResolvedBundleComponent"]:c0(),["PublicResolvedBundleVariantSummary"]:c1(),["SelectedProductOption"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedBundleComponent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
