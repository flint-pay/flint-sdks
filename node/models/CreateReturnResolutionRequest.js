import { d388 as c0 } from '../descriptors/data/23.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8523 as c1 } from '../descriptors/data/375.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8524 as c2 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c3 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c4 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10353 as c5, d10349 as c6, d10355 as c9, d10356 as c10, d10357 as c11, d10350 as c18, d10351 as c19, d10352 as c20 } from '../descriptors/data/484.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9462 as c7, d9463 as c24 } from '../descriptors/data/431.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8633 as c8 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10358 as c12, d10359 as c13, d10360 as c14, d10361 as c15, d10362 as c16, d10363 as c17 } from '../descriptors/data/485.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10426 as c21 } from '../descriptors/data/489.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10418 as c22, d10419 as c23 } from '../descriptors/data/488.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d388 as d388 } from '../descriptors/data/23.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d388;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MetadataRequest"]:c3(),["MoneyValue"]:c4(),["ReturnReplacementLineItemRequest"]:c5(),["ReturnResolutionAdjustmentRequest"]:c6(),["ReturnResolutionLineItemRequest"]:c7(),["SharedCodec195"]:c8(),["SharedCodec2764"]:c9(),["SharedCodec2765"]:c10(),["SharedCodec2766"]:c11(),["SharedCodec2767"]:c12(),["SharedCodec2768"]:c13(),["SharedCodec2770"]:c14(),["SharedCodec2771"]:c15(),["SharedCodec2772"]:c16(),["SharedCodec565"]:c17(),["SharedCodec567"]:c18(),["SharedCodec569"]:c19(),["SharedCodec570"]:c20(),["SharedCodec571"]:c21(),["SharedCodec572"]:c22(),["SharedCodec573"]:c23(),["SharedCodec98"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
