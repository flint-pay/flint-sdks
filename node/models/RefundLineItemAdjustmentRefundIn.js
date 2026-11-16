import { d7730 as c0 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10209 as c1 } from '../descriptors/data/474.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10209 as d10209 } from '../descriptors/data/474.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10209;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundLineItemAdjustmentRefundIn"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundLineItemAdjustmentRefundIn(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
