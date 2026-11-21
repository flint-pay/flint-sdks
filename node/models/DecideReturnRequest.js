import { d519 as c0 } from '../descriptors/data/29.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10737 as c1 } from '../descriptors/data/509.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10748 as c2, d10749 as c3 } from '../descriptors/data/511.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d519 as d519 } from '../descriptors/data/29.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d519;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnRequest"]:c0(),["ReturnLineDecision"]:c1(),["SharedCodec2711"]:c2(),["SharedCodec2712"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
