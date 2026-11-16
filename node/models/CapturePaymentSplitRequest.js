import { d9863 as c0 } from '../descriptors/data/453.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c1 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8844 as c2 } from '../descriptors/data/396.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10235 as c3 } from '../descriptors/data/476.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9863 as d9863 } from '../descriptors/data/453.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9863;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CapturePaymentSplitRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec221"]:c2(),["SplitReversalRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapturePaymentSplitRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
