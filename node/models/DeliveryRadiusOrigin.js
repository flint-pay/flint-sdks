import { d8380 as c0 } from '../descriptors/data/368.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8380 as d8380 } from '../descriptors/data/368.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRadiusOrigin"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRadiusOrigin(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
