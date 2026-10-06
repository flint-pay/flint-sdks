import { d90 as c0, d77 as c1, d1797 as c2, d1796 as c3, d1959 as c4, d2131 as c5, d2132 as c6, d2282 as c7, d2283 as c8, d14 as c9, d91 as c10, d1795 as c11, d1958 as c12, d2300 as c13, d2301 as c14, d2302 as c15 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2282 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2282;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentMethod"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SavePaymentMethodResponse"]:c7(),["SavePaymentMethodResult"]:c8(),["SharedCodec1"]:c9(),["SharedCodec22"]:c10(),["SharedCodec485"]:c11(),["SharedCodec515"]:c12(),["StripeClientAuthority"]:c13(),["StripeClientSetup"]:c14(),["StripeClientSetupStripe"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
