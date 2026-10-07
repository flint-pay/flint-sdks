import { d314 as c0, d2060 as c1, d2061 as c2, d2065 as c3, d2067 as c4, d2069 as c5, d2076 as c6 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2065 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2065;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundAdjustmentAudit"]:c1(),["RefundAdjustmentReason"]:c2(),["RefundLineItem"]:c3(),["RefundLineItemAdjustmentIn"]:c4(),["RefundLineItemAdjustmentRefundIn"]:c5(),["RefundTaxBreakdownRefundIn"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
