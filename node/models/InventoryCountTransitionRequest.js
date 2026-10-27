import { d673 as c0 } from '../descriptors/data/29.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4023 as c1, d4024 as c2 } from '../descriptors/data/170.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d673 as d673 } from '../descriptors/data/29.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d673;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountTransitionRequest"]:c0(),["SharedCodec841"]:c1(),["SharedCodec842"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
