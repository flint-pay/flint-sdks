import { d4815 as c0 } from '../descriptors/data/217.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4815 as d4815 } from '../descriptors/data/217.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4815;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundAdjustmentAudit"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundAdjustmentAudit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
