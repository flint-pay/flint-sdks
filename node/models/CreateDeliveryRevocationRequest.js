import { d267 as c0 } from '../descriptors/data/12.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8607 as c1, d8614 as c2, d8615 as c3, d8616 as c4, d8617 as c5 } from '../descriptors/data/380.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d267 as d267 } from '../descriptors/data/12.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d267;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryRevocationRequest"]:c0(),["CreateDeliveryRevocationTarget"]:c1(),["SharedCodec422"]:c2(),["SharedCodec423"]:c3(),["SharedCodec424"]:c4(),["SharedCodec425"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryRevocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
