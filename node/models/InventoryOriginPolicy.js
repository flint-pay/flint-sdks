import { d1611 as c0 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1611 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1611;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryOriginPolicy"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryOriginPolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
