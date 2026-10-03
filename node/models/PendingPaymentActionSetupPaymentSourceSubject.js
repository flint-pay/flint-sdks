import { d1992 as c0 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1992 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1992;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PendingPaymentActionSetupPaymentSourceSubject"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentActionSetupPaymentSourceSubject(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
