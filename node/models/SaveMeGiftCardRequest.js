import { d1835 as c0 } from '../descriptors/data/92.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9311 as c1, d9312 as c2, d9313 as c3 } from '../descriptors/data/424.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9314 as c4, d9315 as c5 } from '../descriptors/data/425.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1835 as d1835 } from '../descriptors/data/92.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1835;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequest"]:c0(),["SharedCodec2803"]:c1(),["SharedCodec2804"]:c2(),["SharedCodec2805"]:c3(),["SharedCodec2806"]:c4(),["SharedCodec2807"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
