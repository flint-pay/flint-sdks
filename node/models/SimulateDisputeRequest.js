import { d7364 as c0 } from '../descriptors/data/307.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7364 as d7364 } from '../descriptors/data/307.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7364;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SimulateDisputeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSimulateDisputeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
