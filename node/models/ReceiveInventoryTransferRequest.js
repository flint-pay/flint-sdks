import { d9042 as c0 } from '../descriptors/data/406.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8962 as c1, d8958 as c3, d8959 as c4, d8960 as c5, d8963 as c12, d8964 as c13, d8965 as c14, d8961 as c15 } from '../descriptors/data/402.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1657 as c2 } from '../descriptors/data/82.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9061 as c6, d9062 as c7, d9063 as c8, d9064 as c9, d9065 as c10, d9066 as c11 } from '../descriptors/data/407.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1657 as d1657 } from '../descriptors/data/82.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1657;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1408"]:c3(),["SharedCodec1409"]:c4(),["SharedCodec1410"]:c5(),["SharedCodec2528"]:c6(),["SharedCodec2529"]:c7(),["SharedCodec2530"]:c8(),["SharedCodec2531"]:c9(),["SharedCodec2532"]:c10(),["SharedCodec2533"]:c11(),["SharedCodec462"]:c12(),["SharedCodec463"]:c13(),["SharedCodec464"]:c14(),["SharedCodec465"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
