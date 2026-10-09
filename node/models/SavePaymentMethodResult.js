import { d132 as c0, d90 as c1, d1989 as c2, d2314 as c3, d91 as c4, d2330 as c5, d2331 as c6, d2332 as c7 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2314 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2314;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CardDetails"]:c0(),["ExpandedCustomerSummary"]:c1(),["PaymentMethod"]:c2(),["SavePaymentMethodResult"]:c3(),["SharedCodec16"]:c4(),["StripeClientAuthority"]:c5(),["StripeClientSetup"]:c6(),["StripeClientSetupStripe"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
