import { d8384 as c0 } from '../descriptors/data/410.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8404 as c1, d8405 as c2, d8406 as c3, d8407 as c4 } from '../descriptors/data/411.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8384 as d8384 } from '../descriptors/data/410.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8384;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeRequest"]:c0(),["SharedCodec1491"]:c1(),["SharedCodec1492"]:c2(),["SharedCodec1493"]:c3(),["SharedCodec1494"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
