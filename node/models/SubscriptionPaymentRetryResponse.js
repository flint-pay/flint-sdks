import { d69 as c0, d1646 as c1, d1645 as c2, d1959 as c3, d1960 as c4, d2137 as c5, d2138 as c6, d2140 as c7 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2140 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2140;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["SubscriptionPaymentRetry"]:c5(),["SubscriptionPaymentRetryFailure"]:c6(),["SubscriptionPaymentRetryResponse"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPaymentRetryResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
