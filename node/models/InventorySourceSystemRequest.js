import { d9240 as c0, d9236 as c1, d9237 as c2, d9238 as c3, d9239 as c4 } from '../descriptors/data/419.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9240 as d9240 } from '../descriptors/data/419.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9240;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["SharedCodec1421"]:c1(),["SharedCodec1422"]:c2(),["SharedCodec1423"]:c3(),["SharedCodec462"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
