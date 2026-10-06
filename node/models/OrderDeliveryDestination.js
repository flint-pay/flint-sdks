import { d108 as c0, d1850 as c1, d1852 as c2 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d108 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d108;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestination"]:c0(),["OrderDeliveryDestinationAddress"]:c1(),["OrderDeliveryDestinationRecipient"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryDestination(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
