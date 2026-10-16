import { d431 as c0, d323 as c1, d2126 as c2, d2127 as c3, d2128 as c4, d2131 as c5, d2133 as c6, d2135 as c7, d2142 as c8, d2147 as c9, d336 as c10, d2145 as c11, d2144 as c12, d2146 as c13 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d431 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d431;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MoneyValue"]:c1(),["RefundAdjustmentAudit"]:c2(),["RefundAdjustmentReason"]:c3(),["RefundCharge"]:c4(),["RefundLineItem"]:c5(),["RefundLineItemAdjustmentIn"]:c6(),["RefundLineItemAdjustmentRefundIn"]:c7(),["RefundTaxBreakdownRefundIn"]:c8(),["RefundTenderAllocationRequest"]:c9(),["SharedCodec104"]:c10(),["SharedCodec521"]:c11(),["SharedCodec522"]:c12(),["SharedCodec523"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
