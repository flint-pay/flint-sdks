import { d70 as c0, d1992 as c1 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1992 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1992;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PostalAddress"]:c0(),["PrefilledCustomerInfo"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePrefilledCustomerInfo(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
