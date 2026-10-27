import { d4206 as c0, d4207 as c1, d4208 as c2 } from '../descriptors/data/179.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2401 as c3 } from '../descriptors/data/95.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d2401 as d2401 } from '../descriptors/data/95.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2401;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestinationAddressRequest"]:c0(),["SharedCodec973"]:c1(),["SharedCodec974"]:c2(),["SubscriptionDeliveryDestinationInputAddress"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryDestinationInputAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
