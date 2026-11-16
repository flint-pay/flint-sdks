import { d8408 as c0 } from '../descriptors/data/369.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8408 as d8408 } from '../descriptors/data/369.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8408;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryWeeklyIntervalRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryWeeklyIntervalRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
