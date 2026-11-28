import { d738 as c0 } from '../descriptors/data/41.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9320 as c1 } from '../descriptors/data/423.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9240 as c2, d9236 as c5, d9237 as c6, d9238 as c7, d9241 as c8, d9242 as c9, d9243 as c10, d9239 as c11 } from '../descriptors/data/419.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9327 as c3, d9328 as c4 } from '../descriptors/data/424.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d738 as d738 } from '../descriptors/data/41.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d738;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DepartInventoryTransferRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1135"]:c3(),["SharedCodec1136"]:c4(),["SharedCodec1421"]:c5(),["SharedCodec1422"]:c6(),["SharedCodec1423"]:c7(),["SharedCodec459"]:c8(),["SharedCodec460"]:c9(),["SharedCodec461"]:c10(),["SharedCodec462"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDepartInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
