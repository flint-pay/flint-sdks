import { d107 as c0 } from '../descriptors/data/5.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9534 as c1 } from '../descriptors/data/438.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d107 as d107 } from '../descriptors/data/5.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d107;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerReturnReplacementLineItemInputBundle"]:c0(),["SharedCodec164"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerReturnReplacementLineItemInputBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
