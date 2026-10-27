import { d3018 as c0 } from '../descriptors/data/115.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3046 as c1 } from '../descriptors/data/117.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5212 as c2 } from '../descriptors/data/239.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5217 as c3, d5220 as c5 } from '../descriptors/data/240.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2489 as c4 } from '../descriptors/data/100.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2489 as d2489 } from '../descriptors/data/100.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2489;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1"]:c0(),["SharedCodec1160"]:c1(),["SharedCodec1235"]:c2(),["SharedCodec234"]:c3(),["UpdateWorkloadIdentityRequest"]:c4(),["WorkloadIdentityClaimConditionRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
