import { d416 as c0, d415 as c1, d414 as c2, d2380 as c3 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d416 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d416;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderLineItemModifierRequest"]:c0(),["SharedCodec152"]:c1(),["SharedCodec153"]:c2(),["TextModifierRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItemModifierRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
