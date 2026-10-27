import { d4815 as c0 } from '../descriptors/data/217.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4815 as d4815 } from '../descriptors/data/217.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4815;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundAdjustmentAudit"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundAdjustmentAudit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
