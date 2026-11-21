import { d8158 as c0, d8156 as c1, d8157 as c4 } from '../descriptors/data/359.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10994 as c2, d10995 as c3 } from '../descriptors/data/523.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d11010 as c5 } from '../descriptors/data/524.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d11010 as d11010 } from '../descriptors/data/524.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d11010;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec2"]:c1(),["SharedCodec2985"]:c2(),["SharedCodec2986"]:c3(),["SharedCodec3"]:c4(),["SubscriptionServiceLocationRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionServiceLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
