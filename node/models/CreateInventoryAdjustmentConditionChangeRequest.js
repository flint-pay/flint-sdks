import { d298 as c0 } from '../descriptors/data/15.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8932 as c1, d8937 as c6, d8938 as c7, d8939 as c8, d8940 as c9, d8941 as c10 } from '../descriptors/data/401.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8962 as c2, d8958 as c3, d8959 as c4, d8960 as c5, d8963 as c11, d8964 as c12, d8965 as c13, d8961 as c14 } from '../descriptors/data/402.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d298 as d298 } from '../descriptors/data/15.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d298;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1408"]:c3(),["SharedCodec1409"]:c4(),["SharedCodec1410"]:c5(),["SharedCodec1411"]:c6(),["SharedCodec1412"]:c7(),["SharedCodec1413"]:c8(),["SharedCodec1414"]:c9(),["SharedCodec1415"]:c10(),["SharedCodec462"]:c11(),["SharedCodec463"]:c12(),["SharedCodec464"]:c13(),["SharedCodec465"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
