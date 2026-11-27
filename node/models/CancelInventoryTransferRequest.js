import { d141 as c0 } from '../descriptors/data/7.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9320 as c1 } from '../descriptors/data/423.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9240 as c2, d9236 as c3, d9237 as c4, d9238 as c5, d9241 as c8, d9242 as c9, d9243 as c10, d9239 as c11 } from '../descriptors/data/419.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9337 as c6, d9338 as c7 } from '../descriptors/data/425.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d141 as d141 } from '../descriptors/data/7.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d141;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelInventoryTransferRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1421"]:c3(),["SharedCodec1422"]:c4(),["SharedCodec1423"]:c5(),["SharedCodec210"]:c6(),["SharedCodec211"]:c7(),["SharedCodec459"]:c8(),["SharedCodec460"]:c9(),["SharedCodec461"]:c10(),["SharedCodec462"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
