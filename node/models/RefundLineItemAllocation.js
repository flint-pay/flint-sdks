import { d169 as c0, d74 as c1, d2067 as c2, d2072 as c3, d2074 as c4, d2077 as c5, d2079 as c6, d2082 as c7, d2272 as c8, d38 as c9, d2076 as c10 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2077 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2077;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["MoneyValue"]:c1(),["RefundAdjustmentReason"]:c2(),["RefundLineItemAdjustment"]:c3(),["RefundLineItemAdjustmentRefund"]:c4(),["RefundLineItemAllocation"]:c5(),["RefundLineItemModifierAllocation"]:c6(),["RefundTaxBreakdownRefund"]:c7(),["SelectedProductOption"]:c8(),["SharedCodec5"]:c9(),["SharedCodec526"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundLineItemAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
