import { d8066 as c0, d8067 as c1 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10690 as c2, d10691 as c3, d10700 as c4 } from '../descriptors/data/504.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8078 as c5 } from '../descriptors/data/352.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10704 as c6 } from '../descriptors/data/505.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d10704 as d10704 } from '../descriptors/data/505.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10704;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec238"]:c0(),["SharedCodec239"]:c1(),["SharedCodec2970"]:c2(),["SharedCodec2971"]:c3(),["SubscriptionOfferLineItemRequest"]:c4(),["SubscriptionPlanChangeLineItemRequest"]:c5(),["SubscriptionTermsRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
