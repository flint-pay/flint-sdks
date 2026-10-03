import { d87 as c0, d74 as c1, d1786 as c2, d1785 as c3, d1948 as c4, d2121 as c5, d2122 as c6, d2272 as c7, d2273 as c8, d88 as c9, d1947 as c10, d2289 as c11, d2290 as c12, d2291 as c13 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d2272 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2272;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentMethod"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SavePaymentMethodResponse"]:c7(),["SavePaymentMethodResult"]:c8(),["SharedCodec21"]:c9(),["SharedCodec506"]:c10(),["StripeClientAuthority"]:c11(),["StripeClientSetup"]:c12(),["StripeClientSetupStripe"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
