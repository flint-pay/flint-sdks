import { d1245 as c0 } from '../descriptors/data/62.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9583 as c1, d9584 as c2, d9585 as c3, d9586 as c4 } from '../descriptors/data/438.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1245 as d1245 } from '../descriptors/data/62.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1245;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequestAuthorizationCode"]:c0(),["SharedCodec1823"]:c1(),["SharedCodec1824"]:c2(),["SharedCodec1825"]:c3(),["SharedCodec1826"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequestAuthorizationCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
