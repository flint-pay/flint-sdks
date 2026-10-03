import { d171 as c0, d74 as c1, d2070 as c2, d2075 as c3, d2077 as c4, d2080 as c5, d2082 as c6, d2085 as c7, d2275 as c8, d38 as c9, d2079 as c10 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2080 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2080;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CategoryReference"]:c0(),["MoneyValue"]:c1(),["RefundAdjustmentReason"]:c2(),["RefundLineItemAdjustment"]:c3(),["RefundLineItemAdjustmentRefund"]:c4(),["RefundLineItemAllocation"]:c5(),["RefundLineItemModifierAllocation"]:c6(),["RefundTaxBreakdownRefund"]:c7(),["SelectedProductOption"]:c8(),["SharedCodec5"]:c9(),["SharedCodec526"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundLineItemAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
