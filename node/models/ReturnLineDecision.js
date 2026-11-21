import { d10737 as c0 } from '../descriptors/data/509.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10748 as c1, d10749 as c2 } from '../descriptors/data/511.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10737 as d10737 } from '../descriptors/data/509.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10737;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnLineDecision"]:c0(),["SharedCodec2711"]:c1(),["SharedCodec2712"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
