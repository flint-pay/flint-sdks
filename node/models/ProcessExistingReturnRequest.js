import { d8523 as c0 } from '../descriptors/data/375.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8524 as c1 } from '../descriptors/data/376.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c2 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c3 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10427 as c4, d10426 as c29 } from '../descriptors/data/489.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1566 as c5 } from '../descriptors/data/78.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10434 as c6, d10435 as c7, d10436 as c8, d10437 as c9, d10438 as c10 } from '../descriptors/data/490.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10353 as c11, d10355 as c19, d10356 as c20, d10357 as c21 } from '../descriptors/data/484.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10288 as c12, d10291 as c14, d10292 as c15, d10293 as c16 } from '../descriptors/data/480.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8633 as c13 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10443 as c17, d10444 as c18 } from '../descriptors/data/491.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10358 as c22, d10359 as c23, d10360 as c24, d10361 as c25, d10362 as c26, d10363 as c28 } from '../descriptors/data/485.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8961 as c27 } from '../descriptors/data/402.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d1566 as d1566 } from '../descriptors/data/78.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1566;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ProcessExistingReturnLineItemRequest"]:c4(),["ProcessExistingReturnRequest"]:c5(),["ReturnProcessDecision"]:c6(),["ReturnProcessDispositionRequest"]:c7(),["ReturnProcessInspectionRequest"]:c8(),["ReturnProcessReceiptRequest"]:c9(),["ReturnProcessResolutionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnSourceSystemRequest"]:c12(),["SharedCodec195"]:c13(),["SharedCodec2661"]:c14(),["SharedCodec2662"]:c15(),["SharedCodec2663"]:c16(),["SharedCodec2686"]:c17(),["SharedCodec2687"]:c18(),["SharedCodec2764"]:c19(),["SharedCodec2765"]:c20(),["SharedCodec2766"]:c21(),["SharedCodec2767"]:c22(),["SharedCodec2768"]:c23(),["SharedCodec2770"]:c24(),["SharedCodec2771"]:c25(),["SharedCodec2772"]:c26(),["SharedCodec465"]:c27(),["SharedCodec565"]:c28(),["SharedCodec571"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
