import { d5043 as c0, d5044 as c1 } from '../descriptors/data/230.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d5044 as d5044 } from '../descriptors/data/230.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5044;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryOriginPolicy"]:c0(),["InventorySettings"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
