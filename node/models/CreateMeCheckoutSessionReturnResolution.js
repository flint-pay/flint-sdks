import { d8267 as c0, d8264 as c2, d8265 as c3, d8266 as c4 } from '../descriptors/data/365.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d327 as c1 } from '../descriptors/data/17.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9628 as c5, d9629 as c6 } from '../descriptors/data/443.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d327 as d327 } from '../descriptors/data/17.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d327;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionReturnResolution"]:c1(),["SharedCodec350"]:c2(),["SharedCodec351"]:c3(),["SharedCodec352"]:c4(),["SharedCodec470"]:c5(),["SharedCodec471"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
