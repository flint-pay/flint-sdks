import { d1187 as c0 } from '../descriptors/data/59.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1187 as d1187 } from '../descriptors/data/59.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1187;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MarkPackageInTransitRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMarkPackageInTransitRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
