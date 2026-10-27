import { d240 as c0 } from '../descriptors/data/14.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4206 as c1, d4207 as c4, d4208 as c5 } from '../descriptors/data/179.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d4432 as c2, d4433 as c3, d4435 as c6 } from '../descriptors/data/194.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d240 as d240 } from '../descriptors/data/14.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d240;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPreviewRequestDeliveryOptions"]:c0(),["OrderDeliveryDestinationAddressRequest"]:c1(),["SharedCodec1146"]:c2(),["SharedCodec1147"]:c3(),["SharedCodec973"]:c4(),["SharedCodec974"]:c5(),["SubscriptionDeliveryDestinationRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestDeliveryOptions(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
