import { d7957 as c0, d7955 as c2, d7956 as c5 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8641 as c1 } from '../descriptors/data/382.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9404 as c3, d9405 as c4, d9406 as c6 } from '../descriptors/data/429.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9486 as c7 } from '../descriptors/data/433.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9486 as d9486 } from '../descriptors/data/433.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9486;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec2"]:c2(),["SharedCodec2880"]:c3(),["SharedCodec2881"]:c4(),["SharedCodec3"]:c5(),["SubscriptionDeliveryDestinationRequest"]:c6(),["SubscriptionDeliveryRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
