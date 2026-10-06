import { d90 as c0, d1985 as c1, d2309 as c2, d91 as c3, d1984 as c4, d2326 as c5, d2327 as c6, d2328 as c7 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2309 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2309;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["PaymentMethod"]:c1(),["SavePaymentMethodResult"]:c2(),["SharedCodec22"]:c3(),["SharedCodec517"]:c4(),["StripeClientAuthority"]:c5(),["StripeClientSetup"]:c6(),["StripeClientSetupStripe"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSavePaymentMethodResult(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
