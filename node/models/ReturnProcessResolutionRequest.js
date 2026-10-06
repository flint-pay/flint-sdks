import { d77 as c0, d2237 as c1, d2256 as c2, d1975 as c3, d2251 as c4, d2250 as c5, d2253 as c6, d2252 as c7, d2254 as c8 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2237 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2237;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnProcessResolutionRequest"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["SharedCodec515"]:c3(),["SharedCodec592"]:c4(),["SharedCodec593"]:c5(),["SharedCodec594"]:c6(),["SharedCodec595"]:c7(),["SharedCodec596"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
