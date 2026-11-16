import { d8064 as c0, d8061 as c2, d8062 as c3, d8063 as c4 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d317 as c1 } from '../descriptors/data/17.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9383 as c5, d9384 as c6 } from '../descriptors/data/428.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d317 as d317 } from '../descriptors/data/17.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d317;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionReturnResolution"]:c1(),["SharedCodec361"]:c2(),["SharedCodec362"]:c3(),["SharedCodec363"]:c4(),["SharedCodec480"]:c5(),["SharedCodec481"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
