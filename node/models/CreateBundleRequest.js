import { d262 as c0, d263 as c1, d928 as c2, d77 as c3 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d263 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d263;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateBundleComponentRequest"]:c0(),["CreateBundleRequest"]:c1(),["ImageRequest"]:c2(),["MoneyValue"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateBundleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
