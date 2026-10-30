import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6464 as c1, d6465 as c2, d6468 as c4, d6469 as c5 } from '../descriptors/data/304.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1163 as c3 } from '../descriptors/data/54.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1170 as c6 } from '../descriptors/data/55.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1163 as d1163 } from '../descriptors/data/54.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1163;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundAdjustmentAudit"]:c1(),["RefundAdjustmentReasonRequest"]:c2(),["RefundLineItem"]:c3(),["RefundLineItemAdjustmentIn"]:c4(),["RefundLineItemAdjustmentRefundIn"]:c5(),["RefundTaxBreakdownRefundIn"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
