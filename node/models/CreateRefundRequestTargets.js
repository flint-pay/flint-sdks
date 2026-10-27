import { d198 as c0 } from '../descriptors/data/11.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4815 as c2, d4816 as c3, d4817 as c4, d4818 as c5, d4820 as c6, d4821 as c7, d4822 as c8, d4823 as c9 } from '../descriptors/data/217.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4834 as c10, d4835 as c11, d4839 as c12 } from '../descriptors/data/218.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d198 as d198 } from '../descriptors/data/11.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d198;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequestTargets"]:c0(),["MoneyValue"]:c1(),["RefundAdjustmentAudit"]:c2(),["RefundAdjustmentReasonRequest"]:c3(),["RefundCharge"]:c4(),["RefundDestinations"]:c5(),["RefundLineItem"]:c6(),["RefundLineItemAdjustmentIn"]:c7(),["RefundLineItemAdjustmentRefundIn"]:c8(),["RefundTaxBreakdownRefundIn"]:c9(),["SharedCodec192"]:c10(),["SharedCodec193"]:c11(),["SharedCodec197"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequestTargets(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
