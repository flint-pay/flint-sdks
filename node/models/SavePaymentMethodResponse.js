import { d132 as c0, d90 as c1, d323 as c2, d1823 as c3, d1824 as c4, d2006 as c5, d2178 as c6, d2179 as c7, d2329 as c8, d2330 as c9, d14 as c10, d91 as c11, d1822 as c12, d2346 as c13, d2347 as c14, d2348 as c15 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2329 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["ExpandedCustomerSummary"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PaymentMethod"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SavePaymentMethodResponse"]:c8(),["SavePaymentMethodResult"]:c9(),["SharedCodec1"]:c10(),["SharedCodec16"]:c11(),["SharedCodec467"]:c12(),["StripeClientAuthority"]:c13(),["StripeClientSetup"]:c14(),["StripeClientSetupStripe"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
