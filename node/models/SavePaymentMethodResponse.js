import { d132 as c0, d90 as c1, d323 as c2, d1820 as c3, d1821 as c4, d1989 as c5, d2162 as c6, d2163 as c7, d2313 as c8, d2314 as c9, d14 as c10, d91 as c11, d1819 as c12, d2330 as c13, d2331 as c14, d2332 as c15 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2313 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2313;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["ExpandedCustomerSummary"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PaymentMethod"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SavePaymentMethodResponse"]:c8(),["SavePaymentMethodResult"]:c9(),["SharedCodec1"]:c10(),["SharedCodec16"]:c11(),["SharedCodec466"]:c12(),["StripeClientAuthority"]:c13(),["StripeClientSetup"]:c14(),["StripeClientSetupStripe"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
