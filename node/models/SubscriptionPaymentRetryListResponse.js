import { d74 as c0, d1784 as c1, d1783 as c2, d2118 as c3, d2119 as c4, d2302 as c5, d2303 as c6, d2304 as c7 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2304 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2304;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SubscriptionPaymentRetry"]:c5(),["SubscriptionPaymentRetryFailure"]:c6(),["SubscriptionPaymentRetryListResponse"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPaymentRetryListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
