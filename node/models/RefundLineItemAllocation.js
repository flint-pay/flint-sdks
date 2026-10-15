import { d136 as c0, d323 as c1, d2126 as c2, d2131 as c3, d2133 as c4, d2135 as c5, d2136 as c6, d2137 as c7, d2140 as c8, d2334 as c9 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2135 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2135;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["MoneyValue"]:c1(),["RefundAdjustmentReason"]:c2(),["RefundLineItemAdjustment"]:c3(),["RefundLineItemAdjustmentRefund"]:c4(),["RefundLineItemAllocation"]:c5(),["RefundLineItemAutomaticRefund"]:c6(),["RefundLineItemModifierAllocation"]:c7(),["RefundTaxBreakdownRefund"]:c8(),["SelectedProductOption"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundLineItemAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
