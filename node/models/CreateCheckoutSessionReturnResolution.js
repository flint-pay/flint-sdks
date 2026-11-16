import { d8064 as c0, d8061 as c2, d8062 as c3, d8063 as c4 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d244 as c1 } from '../descriptors/data/11.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7911 as c5, d7912 as c6, d7913 as c7 } from '../descriptors/data/342.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7932 as c8, d7933 as c9 } from '../descriptors/data/343.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d244 as d244 } from '../descriptors/data/11.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d244;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionReturnResolution"]:c1(),["SharedCodec361"]:c2(),["SharedCodec362"]:c3(),["SharedCodec363"]:c4(),["SharedCodec364"]:c5(),["SharedCodec365"]:c6(),["SharedCodec366"]:c7(),["SharedCodec379"]:c8(),["SharedCodec380"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
