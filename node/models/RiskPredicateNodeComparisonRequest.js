import { d10807 as c0, d10816 as c1 } from '../descriptors/data/513.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10807 as d10807 } from '../descriptors/data/513.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10807;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeComparisonRequest"]:c0(),["SharedCodec571"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeComparisonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
