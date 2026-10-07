import { d131 as c0, d90 as c1, d314 as c2, d1775 as c3, d1776 as c4, d1942 as c5, d2112 as c6, d2113 as c7, d2263 as c8, d2264 as c9, d14 as c10, d91 as c11, d1774 as c12, d2280 as c13, d2281 as c14, d2282 as c15 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2263 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2263;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["ExpandedCustomerSummary"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PaymentMethod"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SavePaymentMethodResponse"]:c8(),["SavePaymentMethodResult"]:c9(),["SharedCodec1"]:c10(),["SharedCodec16"]:c11(),["SharedCodec448"]:c12(),["StripeClientAuthority"]:c13(),["StripeClientSetup"]:c14(),["StripeClientSetupStripe"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
