import { d66 as c0, d2312 as c1 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d66 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d66;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BundleComponentVariantSummary"]:c0(),["SelectedProductOption"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBundleComponentVariantSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
