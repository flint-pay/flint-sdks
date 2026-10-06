import { d2108 as c0, d2122 as c1, d41 as c2 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2122 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2122;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundGiftCardDestination"]:c0(),["RefundTenderAllocation"]:c1(),["SharedCodec6"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundTenderAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
