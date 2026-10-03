import { d1990 as c0, d841 as c1, d2293 as c2, d2292 as c3 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1990 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1990;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PendingPaymentAction"]:c0(),["PendingPaymentActionSubject"]:c1(),["StripePaymentClientAction"]:c2(),["StripeSetupIntentClientAction"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePendingPaymentAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
