import { d309 as c0 } from '../descriptors/data/16.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9210 as c1, d9212 as c2, d9214 as c3, d9215 as c8, d9216 as c9, d9217 as c10, d9218 as c11, d9219 as c12, d9224 as c17, d9225 as c18 } from '../descriptors/data/418.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9240 as c4, d9236 as c5, d9237 as c6, d9238 as c7, d9241 as c13, d9242 as c14, d9243 as c15, d9239 as c16, d9226 as c19, d9227 as c20, d9228 as c21, d9229 as c22, d9230 as c23 } from '../descriptors/data/419.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d309 as d309 } from '../descriptors/data/16.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d309;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec1421"]:c5(),["SharedCodec1422"]:c6(),["SharedCodec1423"]:c7(),["SharedCodec1424"]:c8(),["SharedCodec1425"]:c9(),["SharedCodec1426"]:c10(),["SharedCodec1427"]:c11(),["SharedCodec1428"]:c12(),["SharedCodec459"]:c13(),["SharedCodec460"]:c14(),["SharedCodec461"]:c15(),["SharedCodec462"]:c16(),["SharedCodec463"]:c17(),["SharedCodec464"]:c18(),["SharedCodec465"]:c19(),["SharedCodec466"]:c20(),["SharedCodec467"]:c21(),["SharedCodec468"]:c22(),["SharedCodec469"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
