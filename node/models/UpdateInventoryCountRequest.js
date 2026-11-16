import { d8983 as c0 } from '../descriptors/data/403.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8962 as c1, d8958 as c2, d8959 as c3, d8960 as c4, d8963 as c5, d8964 as c6, d8965 as c7, d8961 as c8 } from '../descriptors/data/402.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7593 as c9 } from '../descriptors/data/318.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7593 as d7593 } from '../descriptors/data/318.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7593;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountObservationRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec1408"]:c2(),["SharedCodec1409"]:c3(),["SharedCodec1410"]:c4(),["SharedCodec462"]:c5(),["SharedCodec463"]:c6(),["SharedCodec464"]:c7(),["SharedCodec465"]:c8(),["UpdateInventoryCountRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryCountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
