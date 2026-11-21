import { d8158 as c0, d8156 as c2, d8157 as c5 } from '../descriptors/data/359.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d329 as c1 } from '../descriptors/data/17.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9652 as c3, d9653 as c4, d9654 as c6 } from '../descriptors/data/444.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d329 as d329 } from '../descriptors/data/17.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequestDeliveryOptions"]:c1(),["SharedCodec2"]:c2(),["SharedCodec2901"]:c3(),["SharedCodec2902"]:c4(),["SharedCodec3"]:c5(),["SubscriptionDeliveryDestinationRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequestDeliveryOptions(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
