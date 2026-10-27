import { d922 as c0 } from '../descriptors/data/40.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3694 as c1, d3695 as c2 } from '../descriptors/data/152.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d922 as d922 } from '../descriptors/data/40.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d922;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetDeliveryMethodRevision"]:c0(),["SharedCodec1117"]:c1(),["SharedCodec1118"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetDeliveryMethodRevision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
