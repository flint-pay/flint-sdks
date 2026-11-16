import { d8930 as c0 } from '../descriptors/data/400.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8930 as d8930 } from '../descriptors/data/400.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8930;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SignedMoneyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSignedMoneyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
