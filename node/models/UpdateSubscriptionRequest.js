import { d8158 as c0, d8156 as c3, d8157 as c12 } from '../descriptors/data/359.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8884 as c1 } from '../descriptors/data/398.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9744 as c2, d9746 as c27 } from '../descriptors/data/450.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8269 as c4, d8270 as c5 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d11019 as c6, d11020 as c7, d11000 as c22, d11001 as c23, d11002 as c24 } from '../descriptors/data/524.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9652 as c8, d9653 as c9, d9654 as c26 } from '../descriptors/data/444.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10996 as c10, d10997 as c11 } from '../descriptors/data/523.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8058 as c13, d8059 as c14, d8057 as c15 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8280 as c16, d8281 as c17 } from '../descriptors/data/366.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d11025 as c18, d11026 as c19, d11027 as c20, d11028 as c21 } from '../descriptors/data/525.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d11054 as c25 } from '../descriptors/data/527.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7825 as c28 } from '../descriptors/data/331.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7825 as d7825 } from '../descriptors/data/331.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7825;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec170"]:c2(),["SharedCodec2"]:c3(),["SharedCodec233"]:c4(),["SharedCodec234"]:c5(),["SharedCodec2882"]:c6(),["SharedCodec2883"]:c7(),["SharedCodec2901"]:c8(),["SharedCodec2902"]:c9(),["SharedCodec2988"]:c10(),["SharedCodec2989"]:c11(),["SharedCodec3"]:c12(),["SharedCodec3079"]:c13(),["SharedCodec3080"]:c14(),["SharedCodec3081"]:c15(),["SharedCodec316"]:c16(),["SharedCodec317"]:c17(),["SharedCodec3222"]:c18(),["SharedCodec3223"]:c19(),["SharedCodec3224"]:c20(),["SharedCodec3225"]:c21(),["SharedCodec597"]:c22(),["SharedCodec598"]:c23(),["SharedCodec599"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
