import { d6465 as c0 } from '../descriptors/data/304.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6465 as d6465 } from '../descriptors/data/304.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6465;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundAdjustmentReasonRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundAdjustmentReasonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
