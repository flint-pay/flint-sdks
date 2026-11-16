import { d227 as c0 } from '../descriptors/data/9.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9042 as c1, d9033 as c6, d9034 as c7 } from '../descriptors/data/406.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8962 as c2, d8958 as c3, d8959 as c4, d8960 as c5, d8963 as c8, d8964 as c9, d8965 as c10, d8961 as c11 } from '../descriptors/data/402.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d227 as d227 } from '../descriptors/data/9.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d227;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConsumeInventoryReservationRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1408"]:c3(),["SharedCodec1409"]:c4(),["SharedCodec1410"]:c5(),["SharedCodec348"]:c6(),["SharedCodec349"]:c7(),["SharedCodec462"]:c8(),["SharedCodec463"]:c9(),["SharedCodec464"]:c10(),["SharedCodec465"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConsumeInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
