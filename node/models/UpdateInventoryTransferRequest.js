import { d9071 as c0, d9072 as c1, d9073 as c2 } from '../descriptors/data/407.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7597 as c3 } from '../descriptors/data/318.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7597 as d7597 } from '../descriptors/data/318.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7597;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3097"]:c0(),["SharedCodec3098"]:c1(),["SharedCodec3099"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
