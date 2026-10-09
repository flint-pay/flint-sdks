import { d144 as c0, d201 as c1, d199 as c2, d200 as c3, d2437 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2437 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2437;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["CheckoutSubscriptionTermsRequest"]:c1(),["SharedCodec34"]:c2(),["SharedCodec35"]:c3(),["UpdateCheckoutSessionRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
