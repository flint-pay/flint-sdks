import { d9643 as c0 } from '../descriptors/data/442.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9643 as d9643 } from '../descriptors/data/442.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9643;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderEditRemovalRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderEditRemovalRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
