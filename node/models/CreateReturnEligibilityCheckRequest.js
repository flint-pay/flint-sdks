import { d475 as c0, d2170 as c1, d2214 as c2, d2168 as c3, d2169 as c4 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d475 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d475;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["ReturnEligibilitySelection"]:c1(),["ReturnLineItemRequest"]:c2(),["SharedCodec545"]:c3(),["SharedCodec546"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnEligibilityCheckRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
