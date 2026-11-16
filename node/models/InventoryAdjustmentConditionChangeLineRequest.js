import { d8932 as c0, d8937 as c1, d8938 as c2, d8939 as c3, d8940 as c4, d8941 as c5 } from '../descriptors/data/401.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8932 as d8932 } from '../descriptors/data/401.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8932;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec1411"]:c1(),["SharedCodec1412"]:c2(),["SharedCodec1413"]:c3(),["SharedCodec1414"]:c4(),["SharedCodec1415"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
