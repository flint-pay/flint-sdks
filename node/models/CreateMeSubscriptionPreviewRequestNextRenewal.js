import { d8158 as c0, d8156 as c3, d8157 as c6 } from '../descriptors/data/359.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d330 as c1 } from '../descriptors/data/17.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8884 as c2 } from '../descriptors/data/398.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9652 as c4, d9653 as c5, d9654 as c8, d9639 as c11 } from '../descriptors/data/444.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9633 as c7 } from '../descriptors/data/443.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9746 as c9, d9748 as c10 } from '../descriptors/data/450.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d330 as d330 } from '../descriptors/data/17.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d330;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateMeSubscriptionPreviewRequestNextRenewal"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["SharedCodec2"]:c3(),["SharedCodec2901"]:c4(),["SharedCodec2902"]:c5(),["SharedCodec3"]:c6(),["SharedCodec475"]:c7(),["SubscriptionDeliveryDestinationRequest"]:c8(),["SubscriptionDeliveryRequest"]:c9(),["SubscriptionQuantityChangeLineItemRequest"]:c10(),["SubscriptionSwapPreviewRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeSubscriptionPreviewRequestNextRenewal(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
