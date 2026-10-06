import { d2232 as c0, d2230 as c1, d2231 as c2 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2232 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2232;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScope"]:c0(),["SharedCodec585"]:c1(),["SharedCodec586"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScope(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
