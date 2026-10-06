import { d176 as c0, d77 as c1, d2105 as c2, d2110 as c3, d2112 as c4, d2115 as c5, d2117 as c6, d2120 as c7, d2312 as c8, d2114 as c9, d41 as c10 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d2115 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2115;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["MoneyValue"]:c1(),["RefundAdjustmentReason"]:c2(),["RefundLineItemAdjustment"]:c3(),["RefundLineItemAdjustmentRefund"]:c4(),["RefundLineItemAllocation"]:c5(),["RefundLineItemModifierAllocation"]:c6(),["RefundTaxBreakdownRefund"]:c7(),["SelectedProductOption"]:c8(),["SharedCodec538"]:c9(),["SharedCodec6"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundLineItemAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
