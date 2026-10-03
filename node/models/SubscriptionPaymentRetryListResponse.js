import { d74 as c0, d1784 as c1, d1783 as c2, d2119 as c3, d2120 as c4, d2303 as c5, d2304 as c6, d2305 as c7 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2305 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2305;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SubscriptionPaymentRetry"]:c5(),["SubscriptionPaymentRetryFailure"]:c6(),["SubscriptionPaymentRetryListResponse"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPaymentRetryListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
