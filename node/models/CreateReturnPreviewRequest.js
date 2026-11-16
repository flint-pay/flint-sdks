import { d9441 as c0, d9443 as c6, d9445 as c7, d9462 as c10, d9451 as c12, d9453 as c13, d9454 as c14, d9455 as c15, d9460 as c32, d9461 as c33, d9463 as c34 } from '../descriptors/data/431.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d377 as c1 } from '../descriptors/data/22.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10337 as c2 } from '../descriptors/data/483.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8523 as c3 } from '../descriptors/data/375.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8524 as c4 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c5 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10353 as c8, d10349 as c9, d10355 as c16, d10356 as c17, d10357 as c18, d10345 as c24, d10346 as c25, d10347 as c27, d10350 as c28, d10348 as c29, d10351 as c30, d10352 as c31 } from '../descriptors/data/484.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8633 as c11 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10358 as c19, d10359 as c20, d10360 as c21, d10361 as c22, d10362 as c23, d10363 as c26 } from '../descriptors/data/485.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d377 as d377 } from '../descriptors/data/22.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d377;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["ReturnEligibilityLineItemRequestModel"]:c6(),["ReturnEligibilitySelectionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec195"]:c11(),["SharedCodec2650"]:c12(),["SharedCodec2652"]:c13(),["SharedCodec2653"]:c14(),["SharedCodec2654"]:c15(),["SharedCodec2764"]:c16(),["SharedCodec2765"]:c17(),["SharedCodec2766"]:c18(),["SharedCodec2767"]:c19(),["SharedCodec2768"]:c20(),["SharedCodec2770"]:c21(),["SharedCodec2771"]:c22(),["SharedCodec2772"]:c23(),["SharedCodec563"]:c24(),["SharedCodec564"]:c25(),["SharedCodec565"]:c26(),["SharedCodec566"]:c27(),["SharedCodec567"]:c28(),["SharedCodec568"]:c29(),["SharedCodec569"]:c30(),["SharedCodec570"]:c31(),["SharedCodec95"]:c32(),["SharedCodec97"]:c33(),["SharedCodec98"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
