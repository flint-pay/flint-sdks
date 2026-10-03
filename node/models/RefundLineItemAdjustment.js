import { d74 as c0, d2067 as c1, d2072 as c2, d38 as c3 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2072 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2072;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundAdjustmentReason"]:c1(),["RefundLineItemAdjustment"]:c2(),["SharedCodec5"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundLineItemAdjustment(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
