import { d924 as c0 } from '../descriptors/data/40.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3689 as c1, d3690 as c2 } from '../descriptors/data/152.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d924 as d924 } from '../descriptors/data/40.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d924;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetDeliveryRateCallbackRevision"]:c0(),["SharedCodec1112"]:c1(),["SharedCodec1113"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetDeliveryRateCallbackRevision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
