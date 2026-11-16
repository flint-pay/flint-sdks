import { d1841 as c0 } from '../descriptors/data/92.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1841 as d1841 } from '../descriptors/data/92.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1841;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ScheduleFulfillmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeScheduleFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
