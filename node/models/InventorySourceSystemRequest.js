import { d8962 as c0, d8958 as c1, d8959 as c2, d8960 as c3, d8961 as c4 } from '../descriptors/data/402.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8962 as d8962 } from '../descriptors/data/402.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8962;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["SharedCodec1408"]:c1(),["SharedCodec1409"]:c2(),["SharedCodec1410"]:c3(),["SharedCodec465"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
