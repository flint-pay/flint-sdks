import { d1185 as c0 } from '../descriptors/data/59.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1185 as d1185 } from '../descriptors/data/59.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1185;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MarkPackageDeliveryAttemptedRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMarkPackageDeliveryAttemptedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
