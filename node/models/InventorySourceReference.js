import { d1642 as c0 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1642 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1642;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceReference"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySourceReference(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
