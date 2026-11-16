import { d8523 as c0 } from '../descriptors/data/375.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8524 as c1 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c2 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c3 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10427 as c4, d10426 as c22 } from '../descriptors/data/489.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10434 as c5, d10435 as c6, d10436 as c7, d10438 as c8 } from '../descriptors/data/490.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10353 as c9, d10355 as c13, d10356 as c14, d10357 as c15 } from '../descriptors/data/484.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8633 as c10 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10443 as c11, d10444 as c12 } from '../descriptors/data/491.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10358 as c16, d10359 as c17, d10360 as c18, d10361 as c19, d10362 as c20, d10363 as c21 } from '../descriptors/data/485.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10427 as d10427 } from '../descriptors/data/489.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10427;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ProcessExistingReturnLineItemRequest"]:c4(),["ReturnProcessDecision"]:c5(),["ReturnProcessDispositionRequest"]:c6(),["ReturnProcessInspectionRequest"]:c7(),["ReturnProcessResolutionRequest"]:c8(),["ReturnReplacementLineItemRequest"]:c9(),["SharedCodec195"]:c10(),["SharedCodec2686"]:c11(),["SharedCodec2687"]:c12(),["SharedCodec2764"]:c13(),["SharedCodec2765"]:c14(),["SharedCodec2766"]:c15(),["SharedCodec2767"]:c16(),["SharedCodec2768"]:c17(),["SharedCodec2770"]:c18(),["SharedCodec2771"]:c19(),["SharedCodec2772"]:c20(),["SharedCodec565"]:c21(),["SharedCodec571"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
