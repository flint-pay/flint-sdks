import { d10205 as c0 } from '../descriptors/data/474.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10205 as d10205 } from '../descriptors/data/474.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10205;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundAdjustmentReasonRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundAdjustmentReasonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
