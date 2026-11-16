import { d56 as c0 } from '../descriptors/data/2.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9221 as c1 } from '../descriptors/data/414.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9268 as c2 } from '../descriptors/data/420.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9441 as c3, d9443 as c4, d9445 as c5, d9462 as c6, d9451 as c11, d9453 as c12, d9454 as c13, d9455 as c14, d9461 as c15, d9463 as c16 } from '../descriptors/data/431.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9293 as c7, d9294 as c8, d9295 as c9, d9296 as c10 } from '../descriptors/data/423.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d56 as d56 } from '../descriptors/data/2.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d56;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestResolution"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec170"]:c7(),["SharedCodec171"]:c8(),["SharedCodec172"]:c9(),["SharedCodec173"]:c10(),["SharedCodec2650"]:c11(),["SharedCodec2652"]:c12(),["SharedCodec2653"]:c13(),["SharedCodec2654"]:c14(),["SharedCodec97"]:c15(),["SharedCodec98"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
