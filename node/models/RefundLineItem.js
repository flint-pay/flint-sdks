import { d74 as c0, d2067 as c1, d2068 as c2, d2072 as c3, d2074 as c4, d2076 as c5, d2084 as c6 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2072 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2072;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundAdjustmentAudit"]:c1(),["RefundAdjustmentReason"]:c2(),["RefundLineItem"]:c3(),["RefundLineItemAdjustmentIn"]:c4(),["RefundLineItemAdjustmentRefundIn"]:c5(),["RefundTaxBreakdownRefundIn"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
