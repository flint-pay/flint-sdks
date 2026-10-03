import { d87 as c0, d74 as c1, d1784 as c2, d1783 as c3, d1946 as c4, d2119 as c5, d2120 as c6, d2270 as c7, d2271 as c8, d88 as c9, d1945 as c10, d2287 as c11, d2288 as c12, d2289 as c13 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2270 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2270;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentMethod"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SavePaymentMethodResponse"]:c7(),["SavePaymentMethodResult"]:c8(),["SharedCodec21"]:c9(),["SharedCodec506"]:c10(),["StripeClientAuthority"]:c11(),["StripeClientSetup"]:c12(),["StripeClientSetupStripe"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
