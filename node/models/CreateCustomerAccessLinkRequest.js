import { d261 as c0 } from '../descriptors/data/12.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8453 as c1 } from '../descriptors/data/375.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d261 as d261 } from '../descriptors/data/12.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d261;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerAccessLinkRequest"]:c0(),["SharedCodec371"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerAccessLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
