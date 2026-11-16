import { d8071 as c0, d8066 as c1, d8067 as c2, d8076 as c3 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8077 as c4, d8078 as c5 } from '../descriptors/data/352.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8071 as d8071 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8071;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionTermsRequest"]:c0(),["SharedCodec238"]:c1(),["SharedCodec239"]:c2(),["SharedCodec327"]:c3(),["SharedCodec328"]:c4(),["SubscriptionPlanChangeLineItemRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
