import { d675 as c0 } from '../descriptors/data/29.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d675 as d675 } from '../descriptors/data/29.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d675;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountTransitionRequestCancel"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountTransitionRequestCancel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
