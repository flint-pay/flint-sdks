import { d9087 as c0 } from '../descriptors/data/408.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c1 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8132 as c2 } from '../descriptors/data/354.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8133 as c3, d8134 as c4, d8135 as c5 } from '../descriptors/data/355.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9087 as d9087 } from '../descriptors/data/408.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9087;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceLateFeePolicyRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec120"]:c2(),["SharedCodec121"]:c3(),["SharedCodec122"]:c4(),["SharedCodec123"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceLateFeePolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
