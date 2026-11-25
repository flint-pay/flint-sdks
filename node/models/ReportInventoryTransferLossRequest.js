import { d9320 as c0 } from '../descriptors/data/422.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9240 as c1, d9236 as c3, d9237 as c4, d9238 as c5, d9241 as c8, d9242 as c9, d9243 as c10, d9239 as c11 } from '../descriptors/data/418.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1764 as c2 } from '../descriptors/data/87.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9345 as c6, d9346 as c7 } from '../descriptors/data/424.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1764 as d1764 } from '../descriptors/data/87.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1764;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReportInventoryTransferLossRequest"]:c2(),["SharedCodec1421"]:c3(),["SharedCodec1422"]:c4(),["SharedCodec1423"]:c5(),["SharedCodec2638"]:c6(),["SharedCodec2639"]:c7(),["SharedCodec459"]:c8(),["SharedCodec460"]:c9(),["SharedCodec461"]:c10(),["SharedCodec462"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportInventoryTransferLossRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
