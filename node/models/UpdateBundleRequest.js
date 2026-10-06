import { d928 as c0, d77 as c1, d2395 as c2, d2396 as c3, d2397 as c4, d2394 as c5, d2398 as c6 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2398 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2398;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec623"]:c2(),["SharedCodec624"]:c3(),["SharedCodec625"]:c4(),["UpdateBundleComponentRequest"]:c5(),["UpdateBundleRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateBundleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
