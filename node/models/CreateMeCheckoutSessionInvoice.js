import { d8064 as c0, d8061 as c2, d8062 as c3, d8063 as c4 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d315 as c1 } from '../descriptors/data/16.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9381 as c5 } from '../descriptors/data/427.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d315 as d315 } from '../descriptors/data/16.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d315;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionInvoice"]:c1(),["SharedCodec361"]:c2(),["SharedCodec362"]:c3(),["SharedCodec363"]:c4(),["SharedCodec478"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionInvoice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
