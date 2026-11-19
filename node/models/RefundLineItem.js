import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10434 as c1, d10435 as c2 } from '../descriptors/data/486.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10437 as c3, d10438 as c4, d10439 as c5, d10440 as c6 } from '../descriptors/data/487.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10437 as d10437 } from '../descriptors/data/487.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10437;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundAdjustmentAudit"]:c1(),["RefundAdjustmentReasonRequest"]:c2(),["RefundLineItem"]:c3(),["RefundLineItemAdjustmentIn"]:c4(),["RefundLineItemAdjustmentRefundIn"]:c5(),["RefundTaxBreakdownRefundIn"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
