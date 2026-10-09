import { d2070 as c0, d2068 as c1, d2069 as c2 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2070 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2070;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrence"]:c0(),["SharedCodec508"]:c1(),["SharedCodec509"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrence(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
