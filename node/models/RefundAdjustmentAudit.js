import { d10434 as c0 } from '../descriptors/data/486.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10434 as d10434 } from '../descriptors/data/486.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10434;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundAdjustmentAudit"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundAdjustmentAudit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
