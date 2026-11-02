import { d4510 as c0, d4508 as c2, d4509 as c3 } from '../descriptors/data/193.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d241 as c1 } from '../descriptors/data/12.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5905 as c4, d5906 as c5 } from '../descriptors/data/271.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4051 as c6 } from '../descriptors/data/166.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d241 as d241 } from '../descriptors/data/12.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d241;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequestDeliveryOptions"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3(),["SharedCodec1271"]:c4(),["SharedCodec1272"]:c5(),["SubscriptionDeliveryDestinationRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequestDeliveryOptions(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
