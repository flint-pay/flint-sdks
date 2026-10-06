import { d77 as c0, d2256 as c1, d1975 as c2, d2251 as c3, d2250 as c4, d2253 as c5, d2252 as c6, d2254 as c7 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2256 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2256;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemRequest"]:c1(),["SharedCodec515"]:c2(),["SharedCodec592"]:c3(),["SharedCodec593"]:c4(),["SharedCodec594"]:c5(),["SharedCodec595"]:c6(),["SharedCodec596"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
