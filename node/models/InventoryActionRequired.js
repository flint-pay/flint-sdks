import { d1564 as c0 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1564 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1564;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryActionRequired"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryActionRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
