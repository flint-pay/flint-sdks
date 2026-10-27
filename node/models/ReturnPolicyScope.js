import { d4853 as c0, d4869 as c1, d4870 as c2 } from '../descriptors/data/219.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4853 as d4853 } from '../descriptors/data/219.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4853;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScope"]:c0(),["SharedCodec1089"]:c1(),["SharedCodec1090"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScope(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
