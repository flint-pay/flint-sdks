import { d73 as c0, d2172 as c1, d2173 as c2, d2269 as c3 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2173 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2173;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PostalAddress"]:c0(),["ReturnHandoffDestination"]:c1(),["ReturnHandoffRequirement"]:c2(),["ReturnShipmentLineItemAllocation"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnHandoffRequirement(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
