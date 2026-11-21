import { d1830 as c0 } from '../descriptors/data/91.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10625 as c1 } from '../descriptors/data/502.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1830 as d1830 } from '../descriptors/data/91.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1830;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeIncludeRequest"]:c0(),["SharedCodec2757"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeIncludeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
