import { d10602 as c0 } from '../descriptors/data/501.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10622 as c1, d10623 as c2, d10624 as c3, d10625 as c4 } from '../descriptors/data/502.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d10602 as d10602 } from '../descriptors/data/501.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10602;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeRequest"]:c0(),["SharedCodec2754"]:c1(),["SharedCodec2755"]:c2(),["SharedCodec2756"]:c3(),["SharedCodec2757"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
