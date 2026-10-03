import { d776 as c0, d1786 as c1, d1785 as c2, d844 as c3 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d844 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d844;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PaymentErrorSummary"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentErrorSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
