import { d1244 as c0 } from '../descriptors/data/62.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9583 as c1, d9584 as c2, d9585 as c3, d9586 as c4, d9587 as c5 } from '../descriptors/data/438.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9588 as c6, d9589 as c7, d9590 as c8, d9591 as c9, d9592 as c10 } from '../descriptors/data/439.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1244 as d1244 } from '../descriptors/data/62.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1244;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1823"]:c1(),["SharedCodec1824"]:c2(),["SharedCodec1825"]:c3(),["SharedCodec1826"]:c4(),["SharedCodec1827"]:c5(),["SharedCodec1828"]:c6(),["SharedCodec1829"]:c7(),["SharedCodec1830"]:c8(),["SharedCodec1831"]:c9(),["SharedCodec1832"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
