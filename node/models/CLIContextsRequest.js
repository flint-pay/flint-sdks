import { d121 as c0 } from '../descriptors/data/5.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d121 as d121 } from '../descriptors/data/5.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d121;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CLIContextsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCLIContextsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
