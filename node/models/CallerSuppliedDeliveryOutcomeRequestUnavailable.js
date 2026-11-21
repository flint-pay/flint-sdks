import { d137 as c0 } from '../descriptors/data/7.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8778 as c1, d8779 as c2 } from '../descriptors/data/392.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8784 as c3, d8785 as c4 } from '../descriptors/data/393.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d137 as d137 } from '../descriptors/data/7.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d137;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequestUnavailable"]:c0(),["SharedCodec197"]:c1(),["SharedCodec198"]:c2(),["SharedCodec203"]:c3(),["SharedCodec204"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequestUnavailable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
