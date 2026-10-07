import { d95 as c0, d77 as c1, d1830 as c2, d1829 as c3, d1992 as c4, d2164 as c5, d2165 as c6, d2315 as c7, d2316 as c8, d14 as c9, d96 as c10, d1828 as c11, d1991 as c12, d2333 as c13, d2334 as c14, d2335 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2315 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2315;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentMethod"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SavePaymentMethodResponse"]:c7(),["SavePaymentMethodResult"]:c8(),["SharedCodec1"]:c9(),["SharedCodec24"]:c10(),["SharedCodec492"]:c11(),["SharedCodec522"]:c12(),["StripeClientAuthority"]:c13(),["StripeClientSetup"]:c14(),["StripeClientSetupStripe"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
