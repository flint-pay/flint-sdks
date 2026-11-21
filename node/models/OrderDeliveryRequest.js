import { d8158 as c0, d8156 as c4, d8157 as c7 } from '../descriptors/data/359.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8884 as c1 } from '../descriptors/data/398.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9920 as c3 } from '../descriptors/data/460.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9652 as c5, d9653 as c6, d9654 as c8 } from '../descriptors/data/444.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9920 as d9920 } from '../descriptors/data/460.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9920;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["MoneyValue"]:c2(),["OrderDeliveryRequest"]:c3(),["SharedCodec2"]:c4(),["SharedCodec2901"]:c5(),["SharedCodec2902"]:c6(),["SharedCodec3"]:c7(),["SubscriptionDeliveryDestinationRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
