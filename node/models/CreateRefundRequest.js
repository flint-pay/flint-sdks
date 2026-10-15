import { d431 as c0, d323 as c1, d2125 as c2, d2126 as c3, d2127 as c4, d2130 as c5, d2132 as c6, d2134 as c7, d2141 as c8, d2146 as c9, d336 as c10, d2144 as c11, d2143 as c12, d2145 as c13 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d431 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d431;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MoneyValue"]:c1(),["RefundAdjustmentAudit"]:c2(),["RefundAdjustmentReason"]:c3(),["RefundCharge"]:c4(),["RefundLineItem"]:c5(),["RefundLineItemAdjustmentIn"]:c6(),["RefundLineItemAdjustmentRefundIn"]:c7(),["RefundTaxBreakdownRefundIn"]:c8(),["RefundTenderAllocationRequest"]:c9(),["SharedCodec104"]:c10(),["SharedCodec521"]:c11(),["SharedCodec522"]:c12(),["SharedCodec523"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
