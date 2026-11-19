import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10455 as c1, d10456 as c2 } from '../descriptors/data/492.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10458 as c3, d10459 as c4, d10460 as c5, d10461 as c6 } from '../descriptors/data/493.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10458 as d10458 } from '../descriptors/data/493.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10458;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundAdjustmentAudit"]:c1(),["RefundAdjustmentReasonRequest"]:c2(),["RefundLineItem"]:c3(),["RefundLineItemAdjustmentIn"]:c4(),["RefundLineItemAdjustmentRefundIn"]:c5(),["RefundTaxBreakdownRefundIn"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundLineItem(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
