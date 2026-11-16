import { d9042 as c0 } from '../descriptors/data/406.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8962 as c1, d8958 as c3, d8959 as c4, d8960 as c5, d8963 as c8, d8964 as c9, d8965 as c10, d8961 as c11 } from '../descriptors/data/402.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1698 as c2 } from '../descriptors/data/84.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9067 as c6, d9068 as c7 } from '../descriptors/data/407.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1698 as d1698 } from '../descriptors/data/84.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1698;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReportInventoryTransferLossRequest"]:c2(),["SharedCodec1408"]:c3(),["SharedCodec1409"]:c4(),["SharedCodec1410"]:c5(),["SharedCodec2589"]:c6(),["SharedCodec2590"]:c7(),["SharedCodec462"]:c8(),["SharedCodec463"]:c9(),["SharedCodec464"]:c10(),["SharedCodec465"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReportInventoryTransferLossRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
