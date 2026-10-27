import { d243 as c0 } from '../descriptors/data/14.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3018 as c1 } from '../descriptors/data/115.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5217 as c2, d5220 as c3 } from '../descriptors/data/240.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d243 as d243 } from '../descriptors/data/14.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d243;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWorkloadIdentityRequest"]:c0(),["SharedCodec1"]:c1(),["SharedCodec234"]:c2(),["WorkloadIdentityClaimConditionRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
