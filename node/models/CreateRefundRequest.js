import { d460 as c0, d74 as c1, d2067 as c2, d2068 as c3, d2069 as c4, d2072 as c5, d2074 as c6, d2076 as c7, d2084 as c8, d2089 as c9, d419 as c10, d2087 as c11, d2086 as c12, d2088 as c13 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d460 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d460;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MoneyValue"]:c1(),["RefundAdjustmentAudit"]:c2(),["RefundAdjustmentReason"]:c3(),["RefundCharge"]:c4(),["RefundLineItem"]:c5(),["RefundLineItemAdjustmentIn"]:c6(),["RefundLineItemAdjustmentRefundIn"]:c7(),["RefundTaxBreakdownRefundIn"]:c8(),["RefundTenderAllocationRequest"]:c9(),["SharedCodec157"]:c10(),["SharedCodec527"]:c11(),["SharedCodec528"]:c12(),["SharedCodec529"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
