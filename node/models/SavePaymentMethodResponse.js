import { d87 as c0, d74 as c1, d1784 as c2, d1783 as c3, d1945 as c4, d2118 as c5, d2119 as c6, d2269 as c7, d2270 as c8, d88 as c9, d1944 as c10, d2286 as c11, d2287 as c12, d2288 as c13 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2269 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2269;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentMethod"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SavePaymentMethodResponse"]:c7(),["SavePaymentMethodResult"]:c8(),["SharedCodec21"]:c9(),["SharedCodec506"]:c10(),["StripeClientAuthority"]:c11(),["StripeClientSetup"]:c12(),["StripeClientSetupStripe"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
