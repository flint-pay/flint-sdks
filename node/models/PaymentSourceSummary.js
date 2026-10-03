import { d1956 as c0, d1957 as c1, d1959 as c2 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1959 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1959;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentSourceAchDebitSummary"]:c0(),["PaymentSourceCardSummary"]:c1(),["PaymentSourceSummary"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentSourceSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
