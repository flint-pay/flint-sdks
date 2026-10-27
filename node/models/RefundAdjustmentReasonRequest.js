import { d4816 as c0 } from '../descriptors/data/217.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4816 as d4816 } from '../descriptors/data/217.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4816;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundAdjustmentReasonRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundAdjustmentReasonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
