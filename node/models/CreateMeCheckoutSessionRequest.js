import { d8064 as c0, d8061 as c2, d8062 as c3, d8063 as c4 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d316 as c1 } from '../descriptors/data/16.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9381 as c5 } from '../descriptors/data/427.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9382 as c6, d9383 as c7, d9384 as c8, d9385 as c9 } from '../descriptors/data/428.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d316 as d316 } from '../descriptors/data/16.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d316;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionRequest"]:c1(),["SharedCodec361"]:c2(),["SharedCodec362"]:c3(),["SharedCodec363"]:c4(),["SharedCodec478"]:c5(),["SharedCodec479"]:c6(),["SharedCodec480"]:c7(),["SharedCodec481"]:c8(),["SharedCodec482"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
