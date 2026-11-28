import { d9320 as c0 } from '../descriptors/data/423.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9240 as c1, d9236 as c3, d9237 as c4, d9238 as c5, d9241 as c12, d9242 as c13, d9243 as c14, d9239 as c15 } from '../descriptors/data/419.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1720 as c2 } from '../descriptors/data/85.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9339 as c6, d9340 as c7, d9341 as c8, d9342 as c9, d9343 as c10, d9344 as c11 } from '../descriptors/data/425.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1720 as d1720 } from '../descriptors/data/85.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1720;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1421"]:c3(),["SharedCodec1422"]:c4(),["SharedCodec1423"]:c5(),["SharedCodec2573"]:c6(),["SharedCodec2574"]:c7(),["SharedCodec2575"]:c8(),["SharedCodec2576"]:c9(),["SharedCodec2577"]:c10(),["SharedCodec2578"]:c11(),["SharedCodec459"]:c12(),["SharedCodec460"]:c13(),["SharedCodec461"]:c14(),["SharedCodec462"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
