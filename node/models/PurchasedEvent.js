import { d2061 as c0 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2061 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2061;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PurchasedEvent"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePurchasedEvent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
