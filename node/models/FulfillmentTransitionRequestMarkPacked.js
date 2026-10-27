import { d377 as c0 } from '../descriptors/data/21.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d824 as c1 } from '../descriptors/data/35.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d377 as d377 } from '../descriptors/data/21.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d377;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequestMarkPacked"]:c0(),["PackageTransitionRequestMarkPacked"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequestMarkPacked(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
