import { d2073 as c0, d2087 as c1, d38 as c2 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2087 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2087;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundGiftCardDestination"]:c0(),["RefundTenderAllocation"]:c1(),["SharedCodec5"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundTenderAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
