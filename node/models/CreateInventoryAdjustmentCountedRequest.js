import { d307 as c0 } from '../descriptors/data/16.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9214 as c1, d9224 as c10, d9225 as c11 } from '../descriptors/data/418.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9240 as c2, d9236 as c3, d9237 as c4, d9238 as c5, d9241 as c6, d9242 as c7, d9243 as c8, d9239 as c9, d9226 as c12 } from '../descriptors/data/419.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d307 as d307 } from '../descriptors/data/16.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d307;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCountedRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1421"]:c3(),["SharedCodec1422"]:c4(),["SharedCodec1423"]:c5(),["SharedCodec459"]:c6(),["SharedCodec460"]:c7(),["SharedCodec461"]:c8(),["SharedCodec462"]:c9(),["SharedCodec463"]:c10(),["SharedCodec464"]:c11(),["SharedCodec465"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCountedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
