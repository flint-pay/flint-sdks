import { d8471 as c0, d8472 as c1 } from '../descriptors/data/376.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8156 as c2, d8157 as c3 } from '../descriptors/data/359.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7792 as c4 } from '../descriptors/data/328.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7792 as d7792 } from '../descriptors/data/328.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7792;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1722"]:c0(),["SharedCodec1723"]:c1(),["SharedCodec2"]:c2(),["SharedCodec3"]:c3(),["UpdatePickupFulfillmentDetails"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePickupFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
