import { d87 as c0, d1945 as c1, d2270 as c2, d88 as c3, d1944 as c4, d2286 as c5, d2287 as c6, d2288 as c7 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2270 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2270;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["PaymentMethod"]:c1(),["SavePaymentMethodResult"]:c2(),["SharedCodec21"]:c3(),["SharedCodec506"]:c4(),["StripeClientAuthority"]:c5(),["StripeClientSetup"]:c6(),["StripeClientSetupStripe"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
