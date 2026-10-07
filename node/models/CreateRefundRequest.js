import { d471 as c0, d77 as c1, d2111 as c2, d2112 as c3, d2113 as c4, d2116 as c5, d2118 as c6, d2120 as c7, d2128 as c8, d2133 as c9, d367 as c10, d2131 as c11, d2130 as c12, d2132 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d471 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d471;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MoneyValue"]:c1(),["RefundAdjustmentAudit"]:c2(),["RefundAdjustmentReason"]:c3(),["RefundCharge"]:c4(),["RefundLineItem"]:c5(),["RefundLineItemAdjustmentIn"]:c6(),["RefundLineItemAdjustmentRefundIn"]:c7(),["RefundTaxBreakdownRefundIn"]:c8(),["RefundTenderAllocationRequest"]:c9(),["SharedCodec128"]:c10(),["SharedCodec544"]:c11(),["SharedCodec545"]:c12(),["SharedCodec546"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
