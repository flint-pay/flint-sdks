import { d10809 as c0, d10816 as c1, d10817 as c2 } from '../descriptors/data/513.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10809 as d10809 } from '../descriptors/data/513.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10809;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RiskPredicateNodeInRequest"]:c0(),["SharedCodec571"]:c1(),["SharedCodec572"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRiskPredicateNodeInRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
