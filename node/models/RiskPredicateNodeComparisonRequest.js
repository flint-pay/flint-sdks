import { d10807 as c0, d10816 as c1 } from '../descriptors/data/513.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10807 as d10807 } from '../descriptors/data/513.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10807;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeComparisonRequest"]:c0(),["SharedCodec571"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeComparisonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
