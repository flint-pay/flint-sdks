import { d8267 as c0, d8264 as c2, d8265 as c3, d8266 as c4 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d254 as c1 } from '../descriptors/data/12.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8111 as c5, d8112 as c6, d8113 as c7 } from '../descriptors/data/356.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8127 as c8, d8128 as c9 } from '../descriptors/data/357.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d254 as d254 } from '../descriptors/data/12.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d254;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionReturnResolution"]:c1(),["SharedCodec350"]:c2(),["SharedCodec351"]:c3(),["SharedCodec352"]:c4(),["SharedCodec353"]:c5(),["SharedCodec354"]:c6(),["SharedCodec355"]:c7(),["SharedCodec368"]:c8(),["SharedCodec369"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
