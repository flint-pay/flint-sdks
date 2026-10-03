import { d2276 as c0 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2276 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2276;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SetDefaultCustomerAddressRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSetDefaultCustomerAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
