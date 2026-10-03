import { d87 as c0, d1948 as c1, d2273 as c2, d88 as c3, d1947 as c4, d2289 as c5, d2290 as c6, d2291 as c7 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2273 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2273;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["PaymentMethod"]:c1(),["SavePaymentMethodResult"]:c2(),["SharedCodec21"]:c3(),["SharedCodec506"]:c4(),["StripeClientAuthority"]:c5(),["StripeClientSetup"]:c6(),["StripeClientSetupStripe"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
