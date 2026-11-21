import { d264 as c0 } from '../descriptors/data/13.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8421 as c1 } from '../descriptors/data/373.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d264 as d264 } from '../descriptors/data/13.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d264;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerSessionRequest"]:c0(),["SharedCodec373"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
