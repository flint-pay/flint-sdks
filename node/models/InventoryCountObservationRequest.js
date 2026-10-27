import { d4015 as c0 } from '../descriptors/data/170.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4015 as d4015 } from '../descriptors/data/170.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4015;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountObservationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountObservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
