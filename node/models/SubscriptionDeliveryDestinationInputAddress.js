import { d8158 as c0, d8156 as c1, d8157 as c2 } from '../descriptors/data/359.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7573 as c3 } from '../descriptors/data/316.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7573 as d7573 } from '../descriptors/data/316.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7573;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec2"]:c1(),["SharedCodec3"]:c2(),["SubscriptionDeliveryDestinationInputAddress"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryDestinationInputAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
