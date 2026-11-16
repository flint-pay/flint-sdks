import { d387 as c0 } from '../descriptors/data/23.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8523 as c1 } from '../descriptors/data/375.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8524 as c2 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c3 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10353 as c4, d10349 as c5, d10355 as c8, d10356 as c9, d10357 as c10, d10350 as c17 } from '../descriptors/data/484.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9462 as c6, d9463 as c18 } from '../descriptors/data/431.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8633 as c7 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10358 as c11, d10359 as c12, d10360 as c13, d10361 as c14, d10362 as c15, d10363 as c16 } from '../descriptors/data/485.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d387 as d387 } from '../descriptors/data/23.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d387;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequestStandard"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["ReturnReplacementLineItemRequest"]:c4(),["ReturnResolutionAdjustmentRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec195"]:c7(),["SharedCodec2764"]:c8(),["SharedCodec2765"]:c9(),["SharedCodec2766"]:c10(),["SharedCodec2767"]:c11(),["SharedCodec2768"]:c12(),["SharedCodec2770"]:c13(),["SharedCodec2771"]:c14(),["SharedCodec2772"]:c15(),["SharedCodec565"]:c16(),["SharedCodec567"]:c17(),["SharedCodec98"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequestStandard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
