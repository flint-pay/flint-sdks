import { d4711 as c0 } from '../descriptors/data/210.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4711 as d4711 } from '../descriptors/data/210.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4711;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItemCreateRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryItemCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
